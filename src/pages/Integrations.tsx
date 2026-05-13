import { useEffect, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { PageHeader } from "@/components/layout/PageHeader";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { supabase, type ApiKey, type Integration } from "@/lib/supabase";
import { Copy, RefreshCw, Download, Check, FileSpreadsheet, Chrome } from "lucide-react";
import { toast } from "sonner";

export default function Integrations() {
  const [keys, setKeys] = useState<ApiKey[]>([]);
  const [integ, setInteg] = useState<Integration | null>(null);
  const [sheetUrl, setSheetUrl] = useState("");
  const [copied, setCopied] = useState(false);

  useEffect(() => { load(); }, []);
  async function load() {
    const [k, i] = await Promise.all([
      supabase.from("api_keys").select("*").order("created_at", { ascending: false }),
      supabase.from("integrations").select("*").maybeSingle(),
    ]);
    if (k.data) setKeys(k.data as ApiKey[]);
    if (i.data) { setInteg(i.data as Integration); setSheetUrl((i.data as Integration).sheet_webhook_url ?? ""); }
  }

  async function rotate() {
    if (!confirm("Rotate API key? Your extension will need the new key.")) return;
    const newKey = "oxp_" + Array.from(crypto.getRandomValues(new Uint8Array(24)))
      .map(b => b.toString(16).padStart(2, "0")).join("");
    const { data: { user } } = await supabase.auth.getUser();
    if (!user) return;
    if (keys[0]) await supabase.from("api_keys").update({ key: newKey }).eq("id", keys[0].id);
    else await supabase.from("api_keys").insert({ user_id: user.id, key: newKey, label: "Default" });
    toast.success("API key rotated");
    load();
  }

  async function saveSheet() {
    const { error } = await supabase.from("integrations").update({ sheet_webhook_url: sheetUrl || null }).eq("id", integ!.id);
    if (error) toast.error(error.message); else toast.success("Saved");
  }

  function copy(t: string) {
    navigator.clipboard.writeText(t);
    setCopied(true); setTimeout(() => setCopied(false), 1500);
    toast.success("Copied");
  }

  const apiKey = keys[0]?.key ?? "";

  return (
    <div className="p-8 max-w-4xl">
      <PageHeader title="Integrations" subtitle="Connect your OneExpand extension and Google Sheets." />

      <div className="space-y-6">
        <Card>
          <CardHeader><CardTitle className="flex items-center gap-2"><Chrome size={16} /> Chrome Extension</CardTitle></CardHeader>
          <CardContent className="space-y-4">
            <div>
              <Label>Your API Key</Label>
              <div className="flex gap-2 mt-2">
                <Input readOnly value={apiKey} className="font-mono text-xs" />
                <Button variant="secondary" onClick={() => copy(apiKey)}>{copied ? <Check size={14} /> : <Copy size={14} />}</Button>
                <Button variant="outline" onClick={rotate}><RefreshCw size={14} /></Button>
              </div>
              <p className="text-xs text-white/40 mt-2">Paste this into the Sync tab of your OneExpand Prospects extension.</p>
            </div>
            <div className="pt-2 border-t border-white/5">
              <a href="/oneexpand-prospects.zip" download>
                <Button variant="secondary"><Download size={14} /> Download Extension (.zip)</Button>
              </a>
              <p className="text-xs text-white/40 mt-2">Unzip → Chrome → chrome://extensions → Developer mode → Load unpacked → select folder.</p>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader><CardTitle className="flex items-center gap-2"><FileSpreadsheet size={16} /> Google Sheets</CardTitle></CardHeader>
          <CardContent className="space-y-4">
            <div>
              <Label>Apps Script Webhook URL</Label>
              <div className="flex gap-2 mt-2">
                <Input value={sheetUrl} onChange={e => setSheetUrl(e.target.value)} placeholder="https://script.google.com/macros/s/.../exec" />
                <Button onClick={saveSheet}>Save</Button>
              </div>
            </div>
            <details className="text-sm text-white/70">
              <summary className="cursor-pointer text-white/90 font-medium">3-step setup guide</summary>
              <ol className="list-decimal list-inside space-y-2 mt-3 text-white/60">
                <li>Open Google Sheets → Extensions → Apps Script.</li>
                <li>Paste this code:
                  <pre className="mt-2 bg-black/40 border border-white/10 rounded-lg p-3 text-xs font-mono overflow-x-auto whitespace-pre-wrap">{`function doPost(e) {
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  const data = JSON.parse(e.postData.contents);
  (data.leads || [data]).forEach(l => sheet.appendRow([
    new Date(), l.name, l.phone, (l.emails||[]).join(","),
    l.website, l.address, l.category, l.rating
  ]));
  return ContentService.createTextOutput(JSON.stringify({ok:true})).setMimeType(ContentService.MimeType.JSON);
}`}</pre>
                </li>
                <li>Deploy → New deployment → Web app → Execute as: Me, Access: Anyone → Copy URL → paste above.</li>
              </ol>
            </details>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
