import { useEffect, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { PageHeader } from "@/components/layout/PageHeader";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select } from "@/components/ui/select";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { supabase, type Template, type Lead } from "@/lib/supabase";
import { Plus, Trash2, Send, MessageSquare, Mail } from "lucide-react";
import { toast } from "sonner";

export default function Outreach() {
  const [tpls, setTpls] = useState<Template[]>([]);
  const [leads, setLeads] = useState<Lead[]>([]);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState<Template | null>(null);
  const [sendOpen, setSendOpen] = useState<Template | null>(null);

  useEffect(() => { load(); }, []);
  async function load() {
    const [t, l] = await Promise.all([
      supabase.from("outreach_templates").select("*").order("created_at", { ascending: false }),
      supabase.from("leads").select("*").order("created_at", { ascending: false }).limit(200),
    ]);
    if (t.data) setTpls(t.data as Template[]);
    if (l.data) setLeads(l.data as Lead[]);
  }

  return (
    <div className="p-8 max-w-[1200px]">
      <PageHeader title="Outreach" subtitle="Create message templates and launch one-tap WhatsApp / Email."
        actions={<Button onClick={() => { setActive(null); setOpen(true); }}><Plus size={16} /> New template</Button>} />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {tpls.map(t => (
          <Card key={t.id} className="hover-lift">
            <CardContent className="p-5 space-y-3">
              <div className="flex items-start justify-between">
                <div>
                  <div className="font-semibold">{t.name}</div>
                  <Badge color={t.channel === "whatsapp" ? "var(--color-emerald)" : "var(--color-sapphire)"} className="mt-1.5">
                    {t.channel === "whatsapp" ? <MessageSquare size={10} /> : <Mail size={10} />}
                    {t.channel}
                  </Badge>
                </div>
              </div>
              {t.subject && <div className="text-xs text-white/60">Subject: <span className="text-white/80">{t.subject}</span></div>}
              <div className="text-xs text-white/50 line-clamp-3">{t.body}</div>
              <div className="flex gap-2 pt-2">
                <Button size="sm" onClick={() => setSendOpen(t)}><Send size={12} /> Send</Button>
                <Button size="sm" variant="ghost" onClick={() => { setActive(t); setOpen(true); }}>Edit</Button>
              </div>
            </CardContent>
          </Card>
        ))}
        {tpls.length === 0 && <div className="col-span-full text-center py-16 text-white/40 text-sm">No templates yet. Create your first one.</div>}
      </div>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent title={active ? "Edit template" : "New template"}>
          <TemplateForm tpl={active} onDone={() => { setOpen(false); load(); }} />
        </DialogContent>
      </Dialog>

      <Dialog open={!!sendOpen} onOpenChange={() => setSendOpen(null)}>
        <DialogContent title="Send to leads" className="max-w-xl">
          {sendOpen && <SendDrawer template={sendOpen} leads={leads} onDone={() => setSendOpen(null)} />}
        </DialogContent>
      </Dialog>
    </div>
  );
}

function TemplateForm({ tpl, onDone }: { tpl: Template | null; onDone: () => void }) {
  const [form, setForm] = useState({
    name: tpl?.name ?? "",
    channel: tpl?.channel ?? "email",
    subject: tpl?.subject ?? "",
    body: tpl?.body ?? "Hi {{name}},\n\n",
  });

  async function save(e: React.FormEvent) {
    e.preventDefault();
    const { data: { user } } = await supabase.auth.getUser();
    if (!user) return;
    const payload = { user_id: user.id, ...form };
    let res;
    if (tpl) res = await supabase.from("outreach_templates").update(payload).eq("id", tpl.id);
    else res = await supabase.from("outreach_templates").insert(payload);
    if (res.error) toast.error(res.error.message);
    else { toast.success("Saved"); onDone(); }
  }
  async function remove() {
    if (!tpl || !confirm("Delete?")) return;
    await supabase.from("outreach_templates").delete().eq("id", tpl.id);
    toast.success("Deleted"); onDone();
  }

  return (
    <form onSubmit={save} className="space-y-3">
      <div className="grid grid-cols-2 gap-3">
        <div className="space-y-1.5"><Label>Name</Label><Input required value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} /></div>
        <div className="space-y-1.5"><Label>Channel</Label>
          <Select value={form.channel} onChange={e => setForm({ ...form, channel: e.target.value })}>
            <option value="email">Email</option>
            <option value="whatsapp">WhatsApp</option>
          </Select>
        </div>
      </div>
      {form.channel === "email" && (
        <div className="space-y-1.5"><Label>Subject</Label><Input value={form.subject} onChange={e => setForm({ ...form, subject: e.target.value })} /></div>
      )}
      <div className="space-y-1.5"><Label>Body</Label>
        <Textarea required value={form.body} onChange={e => setForm({ ...form, body: e.target.value })} rows={8} />
        <div className="text-xs text-white/40">Use {`{{name}}`}, {`{{phone}}`}, {`{{website}}`} as variables.</div>
      </div>
      <div className="flex justify-between pt-2">
        {tpl ? <Button type="button" variant="danger" onClick={remove}><Trash2 size={14} /> Delete</Button> : <span />}
        <Button type="submit">Save</Button>
      </div>
    </form>
  );
}

function SendDrawer({ template, leads, onDone }: { template: Template; leads: Lead[]; onDone: () => void }) {
  const [selected, setSelected] = useState<Set<string>>(new Set());
  const eligible = leads.filter(l => template.channel === "whatsapp" ? l.phone : l.emails?.[0]);

  function fill(text: string, l: Lead) {
    return text
      .replace(/\{\{name\}\}/g, l.name)
      .replace(/\{\{phone\}\}/g, l.phone || "")
      .replace(/\{\{website\}\}/g, l.website || "");
  }

  function launch() {
    selected.forEach(id => {
      const l = eligible.find(x => x.id === id); if (!l) return;
      const body = fill(template.body, l);
      if (template.channel === "whatsapp" && l.phone) {
        const num = l.phone.replace(/[^\d]/g, "");
        window.open(`https://wa.me/${num}?text=${encodeURIComponent(body)}`, "_blank");
      } else if (template.channel === "email" && l.emails?.[0]) {
        const subj = encodeURIComponent(fill(template.subject || "", l));
        window.open(`mailto:${l.emails[0]}?subject=${subj}&body=${encodeURIComponent(body)}`, "_blank");
      }
      // log activity
      supabase.from("activities").insert({
        user_id: l.user_id, lead_id: l.id, type: template.channel,
        content: `Sent template "${template.name}"`,
      });
    });
    toast.success(`Opened ${selected.size} ${template.channel} windows`);
    onDone();
  }

  return (
    <div className="space-y-3">
      <div className="text-sm text-white/60">Select leads with valid {template.channel === "whatsapp" ? "phone" : "email"} ({eligible.length} eligible)</div>
      <div className="max-h-72 overflow-y-auto border border-white/10 rounded-lg divide-y divide-white/5">
        {eligible.map(l => (
          <label key={l.id} className="flex items-center gap-3 p-3 hover:bg-white/5 cursor-pointer text-sm">
            <input type="checkbox" checked={selected.has(l.id)} onChange={e => {
              const next = new Set(selected);
              e.target.checked ? next.add(l.id) : next.delete(l.id);
              setSelected(next);
            }} />
            <div className="flex-1">
              <div className="font-medium">{l.name}</div>
              <div className="text-xs text-white/40">{template.channel === "whatsapp" ? l.phone : l.emails?.[0]}</div>
            </div>
          </label>
        ))}
        {eligible.length === 0 && <div className="p-6 text-center text-white/40 text-sm">No eligible leads.</div>}
      </div>
      <div className="flex justify-between items-center pt-2">
        <span className="text-sm text-white/60">{selected.size} selected</span>
        <Button onClick={launch} disabled={selected.size === 0}><Send size={14} /> Launch</Button>
      </div>
    </div>
  );
}
