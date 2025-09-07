// pages/index.js
import { useState } from "react";

export default function Home() {
  const [result, setResult] = useState(null);

  const runImport = async () => {
    const res = await fetch("/api/import-shops", { method: "POST" });
    const json = await res.json();
    setResult(json);
  };

  return (
    <div style={{ padding: "2rem" }}>
      <h1>Supabase Shops Starter</h1>
      <button onClick={runImport}>Run import_shops()</button>
      {result && (
        <pre
          style={{ marginTop: "1rem", background: "#f4f4f4", padding: "1rem" }}
        >
          {JSON.stringify(result, null, 2)}
        </pre>
      )}
    </div>
  );
}
