import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "@/context/auth";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Sparkles, Loader2 } from "lucide-react";
import { toast } from "sonner";

export default function Login() {
  const { signIn } = useAuth();
  const nav = useNavigate();
  const [email, setEmail] = useState("");
  const [pw, setPw] = useState("");
  const [loading, setLoading] = useState(false);

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    try { await signIn(email, pw); toast.success("Welcome back"); nav("/"); }
    catch (err: any) { toast.error(err.message ?? "Sign in failed"); }
    finally { setLoading(false); }
  }

  return (
    <div className="min-h-screen grid lg:grid-cols-2">
      <div className="hidden lg:flex flex-col justify-between p-12 relative overflow-hidden border-r border-white/5">
        <div className="flex items-center gap-2.5">
          <div className="size-9 rounded-xl bg-gradient-to-br from-[var(--color-gold)] to-amber-700 grid place-items-center">
            <Sparkles size={18} className="text-black" />
          </div>
          <div className="font-semibold tracking-tight text-lg">OneExpand</div>
        </div>
        <div className="relative z-10">
          <h2 className="text-4xl font-semibold tracking-tight leading-tight max-w-md">
            Turn Google Maps prospects into <span className="text-[var(--color-gold)]">closed deals</span>.
          </h2>
          <p className="mt-4 text-white/50 max-w-md">A premium-class CRM connected directly to your OneExpand Prospects extension. Pipeline, outreach, and analytics in one workspace.</p>
        </div>
        <div className="text-xs text-white/30">© {new Date().getFullYear()} OneExpand</div>
        <div className="absolute -bottom-40 -right-40 size-[500px] rounded-full bg-[var(--color-gold)]/10 blur-3xl" />
        <div className="absolute -top-40 -left-40 size-[500px] rounded-full bg-[var(--color-sapphire)]/10 blur-3xl" />
      </div>

      <div className="flex items-center justify-center p-8">
        <form onSubmit={submit} className="w-full max-w-sm space-y-5">
          <div>
            <h1 className="text-2xl font-semibold tracking-tight">Sign in</h1>
            <p className="text-sm text-white/50 mt-1">Welcome back to your workspace.</p>
          </div>
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input id="email" type="email" required value={email} onChange={e => setEmail(e.target.value)} placeholder="you@company.com" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="pw">Password</Label>
            <Input id="pw" type="password" required value={pw} onChange={e => setPw(e.target.value)} placeholder="••••••••" />
          </div>
          <Button type="submit" disabled={loading} className="w-full" size="lg">
            {loading ? <Loader2 className="animate-spin" size={16} /> : "Sign in"}
          </Button>
          <p className="text-sm text-white/50 text-center">
            New here? <Link to="/signup" className="text-[var(--color-gold)] hover:underline">Create an account</Link>
          </p>
        </form>
      </div>
    </div>
  );
}
