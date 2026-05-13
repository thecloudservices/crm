import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "@/context/auth";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Sparkles, Loader2 } from "lucide-react";
import { toast } from "sonner";

export default function Signup() {
  const { signUp } = useAuth();
  const nav = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [pw, setPw] = useState("");
  const [loading, setLoading] = useState(false);

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    try {
      await signUp(email, pw, name);
      toast.success("Account created. Check your email to confirm.");
      nav("/");
    } catch (err: any) { toast.error(err.message ?? "Sign up failed"); }
    finally { setLoading(false); }
  }

  return (
    <div className="min-h-screen flex items-center justify-center p-6">
      <form onSubmit={submit} className="w-full max-w-sm space-y-5 glass rounded-2xl p-8">
        <div className="flex items-center gap-2.5">
          <div className="size-9 rounded-xl bg-gradient-to-br from-[var(--color-gold)] to-amber-700 grid place-items-center">
            <Sparkles size={18} className="text-black" />
          </div>
          <div className="font-semibold tracking-tight">OneExpand CRM</div>
        </div>
        <div>
          <h1 className="text-2xl font-semibold tracking-tight">Create your workspace</h1>
          <p className="text-sm text-white/50 mt-1">Start in under a minute.</p>
        </div>
        <div className="space-y-2"><Label htmlFor="name">Name</Label><Input id="name" required value={name} onChange={e => setName(e.target.value)} /></div>
        <div className="space-y-2"><Label htmlFor="em">Email</Label><Input id="em" type="email" required value={email} onChange={e => setEmail(e.target.value)} /></div>
        <div className="space-y-2"><Label htmlFor="pw">Password</Label><Input id="pw" type="password" minLength={6} required value={pw} onChange={e => setPw(e.target.value)} /></div>
        <Button type="submit" disabled={loading} className="w-full" size="lg">
          {loading ? <Loader2 className="animate-spin" size={16} /> : "Create account"}
        </Button>
        <p className="text-sm text-white/50 text-center">
          Have an account? <Link to="/login" className="text-[var(--color-gold)] hover:underline">Sign in</Link>
        </p>
      </form>
    </div>
  );
}
