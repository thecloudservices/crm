import { useEffect, useMemo, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { PageHeader } from "@/components/layout/PageHeader";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select } from "@/components/ui/select";
import { supabase, type Lead, type Stage } from "@/lib/supabase";
import { Plus, Search, Phone, Globe, Mail, MapPin, Star, Trash2, Download } from "lucide-react";
import { toast } from "sonner";
import { timeAgo } from "@/lib/utils";

export default function LeadsPage() {
  const [leads, setLeads] = useState<Lead[]>([]);
  const [stages, setStages] = useState<Stage[]>([]);
  const [q, setQ] = useState("");
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState<Lead | null>(null);

  useEffect(() => { load(); }, []);
  async function load() {
    const [l, s] = await Promise.all([
      supabase.from("leads").select("*").order("created_at", { ascending: false }),
      supabase.from("pipeline_stages").select("*").order("position"),
    ]);
    if (l.data) setLeads(l.data as Lead[]);
    if (s.data) setStages(s.data as Stage[]);
  }

  const filtered = useMemo(() => leads.filter(l =>
    !q || [l.name, l.phone, l.address, l.category, ...(l.emails || [])].join(" ").toLowerCase().includes(q.toLowerCase())
  ), [leads, q]);

  function exportCsv() {
    const cols = ["name", "phone", "emails", "website", "address", "city", "category", "rating", "value", "created_at"];
    const rows = filtered.map(l => cols.map(c => {
      const v = (l as any)[c];
      return Array.isArray(v) ? v.join("|") : (v ?? "");
    }));
    const csv = [cols.join(","), ...rows.map(r => r.map(x => `"${String(x).replace(/"/g, '""')}"`).join(","))].join("\n");
    const blob = new Blob([csv], { type: "text/csv" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a"); a.href = url; a.download = `leads-${Date.now()}.csv`; a.click();
    URL.revokeObjectURL(url);
  }

  return (
    <div className="p-8 max-w-[1400px]">
      <PageHeader
        title="Leads"
        subtitle={`${leads.length} prospects in your workspace.`}
        actions={
          <>
            <Button variant="secondary" onClick={exportCsv}><Download size={14} /> Export</Button>
            <Button onClick={() => { setActive(null); setOpen(true); }}><Plus size={16} /> Add lead</Button>
          </>
        }
      />

      <Card className="mb-4">
        <CardContent className="p-4 flex items-center gap-3">
          <Search size={16} className="text-white/40" />
          <Input value={q} onChange={e => setQ(e.target.value)} placeholder="Search by name, phone, email, category…" className="border-0 bg-transparent focus:ring-0" />
        </CardContent>
      </Card>

      <Card>
        <CardContent className="p-0">
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead className="text-xs text-white/40 uppercase tracking-wider">
                <tr className="border-b border-white/5">
                  <th className="text-left p-4 font-medium">Name</th>
                  <th className="text-left p-4 font-medium">Contact</th>
                  <th className="text-left p-4 font-medium">Stage</th>
                  <th className="text-left p-4 font-medium">Rating</th>
                  <th className="text-right p-4 font-medium">Added</th>
                </tr>
              </thead>
              <tbody>
                {filtered.map(l => {
                  const stage = stages.find(s => s.id === l.stage_id);
                  return (
                    <tr key={l.id} className="border-b border-white/5 hover:bg-white/[0.02] cursor-pointer transition" onClick={() => { setActive(l); setOpen(true); }}>
                      <td className="p-4">
                        <div className="font-medium">{l.name}</div>
                        <div className="text-xs text-white/40 truncate max-w-xs">{l.address}</div>
                      </td>
                      <td className="p-4">
                        <div className="flex flex-col gap-0.5 text-xs text-white/60">
                          {l.phone && <span className="flex items-center gap-1.5"><Phone size={11} />{l.phone}</span>}
                          {l.emails?.[0] && <span className="flex items-center gap-1.5"><Mail size={11} />{l.emails[0]}</span>}
                        </div>
                      </td>
                      <td className="p-4">{stage && <Badge color={stage.color}>{stage.name}</Badge>}</td>
                      <td className="p-4">{l.rating ? <span className="flex items-center gap-1 text-xs"><Star size={12} className="fill-[var(--color-gold)] text-[var(--color-gold)]" />{l.rating}</span> : "—"}</td>
                      <td className="p-4 text-right text-xs text-white/40">{timeAgo(l.created_at)}</td>
                    </tr>
                  );
                })}
                {filtered.length === 0 && (
                  <tr><td colSpan={5} className="p-12 text-center text-white/40 text-sm">No leads yet.</td></tr>
                )}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="max-w-2xl" title={active ? "Lead details" : "Add new lead"}>
          <LeadForm lead={active} stages={stages} onDone={() => { setOpen(false); load(); }} />
        </DialogContent>
      </Dialog>
    </div>
  );
}

function LeadForm({ lead, stages, onDone }: { lead: Lead | null; stages: Stage[]; onDone: () => void }) {
  const [form, setForm] = useState({
    name: lead?.name ?? "",
    phone: lead?.phone ?? "",
    email: lead?.emails?.[0] ?? "",
    website: lead?.website ?? "",
    address: lead?.address ?? "",
    category: lead?.category ?? "",
    notes: lead?.notes ?? "",
    stage_id: lead?.stage_id ?? stages[0]?.id ?? "",
    value: lead?.value ?? 0,
  });

  async function save(e: React.FormEvent) {
    e.preventDefault();
    const { data: { user } } = await supabase.auth.getUser();
    if (!user) return;
    const payload = {
      user_id: user.id,
      name: form.name,
      phone: form.phone || null,
      emails: form.email ? [form.email] : [],
      website: form.website || null,
      address: form.address || null,
      category: form.category || null,
      notes: form.notes || null,
      stage_id: form.stage_id || null,
      value: Number(form.value) || 0,
    };
    let res;
    if (lead) res = await supabase.from("leads").update(payload).eq("id", lead.id);
    else res = await supabase.from("leads").insert(payload);
    if (res.error) toast.error(res.error.message);
    else { toast.success(lead ? "Lead updated" : "Lead added"); onDone(); }
  }

  async function remove() {
    if (!lead || !confirm("Delete this lead?")) return;
    const { error } = await supabase.from("leads").delete().eq("id", lead.id);
    if (error) toast.error(error.message);
    else { toast.success("Deleted"); onDone(); }
  }

  return (
    <form onSubmit={save} className="space-y-3 max-h-[70vh] overflow-y-auto">
      <div className="grid grid-cols-2 gap-3">
        <Field label="Name *"><Input required value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} /></Field>
        <Field label="Phone"><Input value={form.phone} onChange={e => setForm({ ...form, phone: e.target.value })} /></Field>
        <Field label="Email"><Input type="email" value={form.email} onChange={e => setForm({ ...form, email: e.target.value })} /></Field>
        <Field label="Website"><Input value={form.website} onChange={e => setForm({ ...form, website: e.target.value })} /></Field>
        <Field label="Category"><Input value={form.category} onChange={e => setForm({ ...form, category: e.target.value })} /></Field>
        <Field label="Estimated value ($)"><Input type="number" value={form.value} onChange={e => setForm({ ...form, value: Number(e.target.value) })} /></Field>
        <div className="col-span-2"><Field label="Address"><Input value={form.address} onChange={e => setForm({ ...form, address: e.target.value })} /></Field></div>
        <div className="col-span-2"><Field label="Stage">
          <Select value={form.stage_id} onChange={e => setForm({ ...form, stage_id: e.target.value })}>
            {stages.map(s => <option key={s.id} value={s.id}>{s.name}</option>)}
          </Select>
        </Field></div>
        <div className="col-span-2"><Field label="Notes"><Textarea value={form.notes} onChange={e => setForm({ ...form, notes: e.target.value })} rows={3} /></Field></div>
      </div>
      <div className="flex justify-between pt-3">
        {lead ? <Button type="button" variant="danger" onClick={remove}><Trash2 size={14} /> Delete</Button> : <span />}
        <Button type="submit">{lead ? "Save changes" : "Add lead"}</Button>
      </div>
    </form>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return <div className="space-y-1.5"><Label>{label}</Label>{children}</div>;
}
