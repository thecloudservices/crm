import { useEffect, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { PageHeader } from "@/components/layout/PageHeader";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { supabase, type Profile } from "@/lib/supabase";
import { useAuth } from "@/context/auth";
import { toast } from "sonner";

export default function Settings() {
  const { user } = useAuth();
  const [profile, setProfile] = useState<Profile | null>(null);
  const [name, setName] = useState("");

  useEffect(() => {
    supabase.from("profiles").select("*").maybeSingle().then(({ data }) => {
      if (data) { setProfile(data as Profile); setName((data as Profile).display_name ?? ""); }
    });
  }, []);

  async function save() {
    const { error } = await supabase.from("profiles").update({ display_name: name }).eq("id", profile!.id);
    if (error) toast.error(error.message); else toast.success("Profile updated");
  }

  return (
    <div className="p-8 max-w-2xl">
      <PageHeader title="Settings" subtitle="Manage your workspace preferences." />
      <Card>
        <CardHeader><CardTitle>Profile</CardTitle></CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-1.5"><Label>Email</Label><Input readOnly value={user?.email ?? ""} /></div>
          <div className="space-y-1.5"><Label>Display name</Label><Input value={name} onChange={e => setName(e.target.value)} /></div>
          <Button onClick={save}>Save changes</Button>
        </CardContent>
      </Card>
    </div>
  );
}
