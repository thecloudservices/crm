import { useEffect, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { PageHeader } from "@/components/layout/PageHeader";
import { supabase, type Lead, type Stage } from "@/lib/supabase";
import { fmt, fmtCurrency, timeAgo } from "@/lib/utils";
import { ArrowUpRight, Users, TrendingUp, Target, DollarSign } from "lucide-react";
import { ResponsiveContainer, AreaChart, Area, XAxis, YAxis, Tooltip, BarChart, Bar, CartesianGrid } from "recharts";

export default function Dashboard() {
  const [leads, setLeads] = useState<Lead[]>([]);
  const [stages, setStages] = useState<Stage[]>([]);

  useEffect(() => {
    (async () => {
      const [l, s] = await Promise.all([
        supabase.from("leads").select("*").order("created_at", { ascending: false }),
        supabase.from("pipeline_stages").select("*").order("position"),
      ]);
      if (l.data) setLeads(l.data as Lead[]);
      if (s.data) setStages(s.data as Stage[]);
    })();
  }, []);

  const total = leads.length;
  const weekAgo = Date.now() - 7 * 86400000;
  const thisWeek = leads.filter(l => new Date(l.created_at).getTime() > weekAgo).length;
  const wonStage = stages.find(s => s.is_won);
  const wonCount = wonStage ? leads.filter(l => l.stage_id === wonStage.id).length : 0;
  const conversion = total ? Math.round((wonCount / total) * 100) : 0;
  const pipelineValue = leads.reduce((acc, l) => acc + (l.value || 0), 0);

  const days = Array.from({ length: 14 }, (_, i) => {
    const d = new Date(Date.now() - (13 - i) * 86400000);
    const key = d.toISOString().slice(0, 10);
    return { date: d.toLocaleDateString("en-US", { month: "short", day: "numeric" }),
      leads: leads.filter(l => l.created_at.startsWith(key)).length };
  });

  const funnel = stages.map(s => ({ name: s.name, value: leads.filter(l => l.stage_id === s.id).length, color: s.color }));

  return (
    <div className="p-8 max-w-[1400px]">
      <PageHeader title="Dashboard" subtitle="Your premium overview at a glance." />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        <StatTile icon={Users} label="Total leads" value={fmt(total)} accent="var(--color-sapphire)" />
        <StatTile icon={TrendingUp} label="This week" value={fmt(thisWeek)} accent="var(--color-emerald)" />
        <StatTile icon={Target} label="Conversion" value={`${conversion}%`} accent="var(--color-gold)" />
        <StatTile icon={DollarSign} label="Pipeline value" value={fmtCurrency(pipelineValue)} accent="var(--color-amber)" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mb-6">
        <Card className="lg:col-span-2">
          <CardHeader><CardTitle>Leads over time</CardTitle></CardHeader>
          <CardContent className="h-72">
            <ResponsiveContainer>
              <AreaChart data={days}>
                <defs>
                  <linearGradient id="g1" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="var(--color-gold)" stopOpacity={0.4} />
                    <stop offset="100%" stopColor="var(--color-gold)" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <XAxis dataKey="date" stroke="rgba(255,255,255,0.3)" fontSize={11} />
                <YAxis stroke="rgba(255,255,255,0.3)" fontSize={11} allowDecimals={false} />
                <CartesianGrid stroke="rgba(255,255,255,0.05)" />
                <Tooltip contentStyle={{ background: "rgba(10,10,15,0.95)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: 8 }} />
                <Area type="monotone" dataKey="leads" stroke="var(--color-gold)" fill="url(#g1)" strokeWidth={2} />
              </AreaChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        <Card>
          <CardHeader><CardTitle>Pipeline funnel</CardTitle></CardHeader>
          <CardContent className="h-72">
            <ResponsiveContainer>
              <BarChart data={funnel} layout="vertical" margin={{ left: 10 }}>
                <XAxis type="number" hide />
                <YAxis type="category" dataKey="name" stroke="rgba(255,255,255,0.5)" fontSize={11} width={75} axisLine={false} tickLine={false} />
                <Tooltip contentStyle={{ background: "rgba(10,10,15,0.95)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: 8 }} />
                <Bar dataKey="value" fill="var(--color-gold)" radius={[0, 6, 6, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader><CardTitle>Recent leads</CardTitle></CardHeader>
        <CardContent>
          {leads.length === 0 ? (
            <div className="text-center py-8 text-white/40 text-sm">No leads yet. Push some from the OneExpand extension.</div>
          ) : (
            <div className="divide-y divide-white/5">
              {leads.slice(0, 8).map(l => (
                <div key={l.id} className="py-3 flex items-center justify-between gap-4">
                  <div>
                    <div className="font-medium text-sm">{l.name}</div>
                    <div className="text-xs text-white/40">{l.category || l.address || "—"}</div>
                  </div>
                  <div className="flex items-center gap-3 text-xs text-white/50">
                    <span>{timeAgo(l.created_at)}</span>
                    <ArrowUpRight size={14} />
                  </div>
                </div>
              ))}
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}

function StatTile({ icon: Icon, label, value, accent }: { icon: any; label: string; value: string; accent: string }) {
  return (
    <Card className="hover-lift">
      <CardContent className="p-5">
        <div className="flex items-center justify-between">
          <span className="text-xs text-white/50 uppercase tracking-wider">{label}</span>
          <div className="size-8 rounded-lg grid place-items-center" style={{ background: `${accent}20`, color: accent }}>
            <Icon size={15} />
          </div>
        </div>
        <div className="mt-3 text-3xl font-semibold tracking-tight">{value}</div>
      </CardContent>
    </Card>
  );
}
