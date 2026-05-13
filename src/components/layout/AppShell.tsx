import { NavLink, Outlet, useNavigate } from "react-router-dom";
import { LayoutDashboard, Users, KanbanSquare, Send, Plug, Settings, LogOut, Sparkles } from "lucide-react";
import { useAuth } from "@/context/auth";
import { cn } from "@/lib/utils";

const nav = [
  { to: "/", label: "Dashboard", icon: LayoutDashboard, end: true },
  { to: "/leads", label: "Leads", icon: Users },
  { to: "/pipeline", label: "Pipeline", icon: KanbanSquare },
  { to: "/outreach", label: "Outreach", icon: Send },
  { to: "/integrations", label: "Integrations", icon: Plug },
  { to: "/settings", label: "Settings", icon: Settings },
];

export default function AppShell() {
  const { user, signOut } = useAuth();
  const navigate = useNavigate();

  return (
    <div className="flex h-screen w-screen overflow-hidden">
      <aside className="w-64 shrink-0 border-r border-white/5 flex flex-col p-4 gap-1 bg-black/20 backdrop-blur-xl">
        <div className="flex items-center gap-2.5 px-3 py-4 mb-3">
          <div className="size-9 rounded-xl bg-gradient-to-br from-[var(--color-gold)] to-amber-700 grid place-items-center shadow-[var(--shadow-glow)]">
            <Sparkles size={18} className="text-black" />
          </div>
          <div>
            <div className="font-semibold tracking-tight">OneExpand</div>
            <div className="text-[10px] text-white/40 tracking-[0.18em] uppercase">Premium CRM</div>
          </div>
        </div>
        <nav className="flex flex-col gap-1">
          {nav.map(n => (
            <NavLink key={n.to} to={n.to} end={n.end}
              className={({ isActive }) => cn(
                "flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm transition-all",
                isActive
                  ? "bg-white/10 text-white shadow-inner"
                  : "text-white/60 hover:text-white hover:bg-white/5"
              )}>
              <n.icon size={16} /> {n.label}
            </NavLink>
          ))}
        </nav>
        <div className="mt-auto p-3 rounded-xl glass">
          <div className="text-xs text-white/50 mb-1">Signed in as</div>
          <div className="text-sm font-medium truncate">{user?.email}</div>
          <button onClick={async () => { await signOut(); navigate("/login"); }}
            className="mt-3 w-full flex items-center justify-center gap-2 text-xs text-white/60 hover:text-white py-2 rounded-md border border-white/10 hover:border-white/20 transition">
            <LogOut size={14} /> Sign out
          </button>
        </div>
      </aside>
      <main className="flex-1 overflow-y-auto">
        <Outlet />
      </main>
    </div>
  );
}
