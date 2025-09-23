import React, { useEffect, useState } from "react";
import API from "../lib/api";

export default function Home() {
  const [msg, setMsg] = useState("");
  useEffect(() => {
    API.get("/").then(r => setMsg(r.data)).catch(() => setMsg("API unreachable"));
  }, []);
  return (
    <main style={{ padding: 24 }}>
      <h1>autoverif — frontend</h1>
      <p>API: {msg}</p>
    </main>
  );
}
