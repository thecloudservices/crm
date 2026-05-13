import { useEffect, useState } from "react";
import { PageHeader } from "@/components/layout/PageHeader";
import { supabase, type Lead, type Stage } from "@/lib/supabase";
import { DndContext, type DragEndEvent, PointerSensor, useSensor, useSensors, useDraggable, useDroppable } from "@dnd-kit/core";
import { fmtCurrency } from "@/lib/utils";
import { toast } from "sonner";

export default function Pipeline() {
  const [leads, setLeads] = useState<Lead[]>([]);
  const [stages, setStages] = useState<Stage[]>([]);
  const sensors = useSensors(useSensor(PointerSensor, { activationConstraint: { distance: 6 } }));

  useEffect(() => { load(); }, []);
  async function load() {
    const [l, s] = await Promise.all([
      supabase.from("leads").select("*").order("created_at", { ascending: false }),
      supabase.from("pipeline_stages").select("*").order("position"),
    ]);
    if (l.data) setLeads(l.data as Lead[]);
    if (s.data) setStages(s.data as Stage[]);
  }

  async function onDragEnd(e: DragEndEvent) {
    const leadId = String(e.active.id);
    const stageId = e.over?.id ? String(e.over.id) : null;
    if (!stageId) return;
    setLeads(prev => prev.map(l => l.id === leadId ? { ...l, stage_id: stageId } : l));
    const { error } = await supabase.from("leads").update({ stage_id: stageId }).eq("id", leadId);
    if (error) { toast.error(error.message); load(); }
  }

  return (
    <div className="p-8">
      <PageHeader title="Pipeline" subtitle="Drag leads across stages to update their status." />
      <DndContext sensors={sensors} onDragEnd={onDragEnd}>
        <div className="flex gap-4 overflow-x-auto pb-4">
          {stages.map(stage => {
            const stageLeads = leads.filter(l => l.stage_id === stage.id);
            const total = stageLeads.reduce((a, b) => a + (b.value || 0), 0);
            return <Column key={stage.id} stage={stage} leads={stageLeads} total={total} />;
          })}
        </div>
      </DndContext>
    </div>
  );
}

function Column({ stage, leads, total }: { stage: Stage; leads: Lead[]; total: number }) {
  const { setNodeRef, isOver } = useDroppable({ id: stage.id });
  return (
    <div ref={setNodeRef} className={`w-72 shrink-0 glass rounded-2xl p-3 transition ${isOver ? "ring-2 ring-[var(--color-gold)]/40" : ""}`}>
      <div className="flex items-center justify-between p-2 mb-2">
        <div className="flex items-center gap-2">
          <span className="size-2 rounded-full" style={{ background: stage.color }} />
          <span className="font-medium text-sm">{stage.name}</span>
          <span className="text-xs text-white/40">{leads.length}</span>
        </div>
        <span className="text-xs text-white/50">{fmtCurrency(total)}</span>
      </div>
      <div className="space-y-2 min-h-[200px]">
        {leads.map(l => <LeadCard key={l.id} lead={l} />)}
      </div>
    </div>
  );
}

function LeadCard({ lead }: { lead: Lead }) {
  const { attributes, listeners, setNodeRef, transform, isDragging } = useDraggable({ id: lead.id });
  const style = transform ? { transform: `translate3d(${transform.x}px, ${transform.y}px, 0)` } : undefined;
  return (
    <div ref={setNodeRef} style={style} {...listeners} {...attributes}
      className={`bg-white/[0.04] hover:bg-white/[0.07] border border-white/10 rounded-xl p-3 cursor-grab active:cursor-grabbing transition ${isDragging ? "opacity-40" : ""}`}>
      <div className="font-medium text-sm">{lead.name}</div>
      {lead.category && <div className="text-xs text-white/40 mt-0.5">{lead.category}</div>}
      <div className="flex items-center justify-between mt-2 text-xs">
        <span className="text-white/50">{lead.phone || lead.emails?.[0] || "—"}</span>
        {lead.value ? <span className="text-[var(--color-gold)] font-medium">{fmtCurrency(lead.value)}</span> : null}
      </div>
    </div>
  );
}
