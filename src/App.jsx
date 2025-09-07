// App.jsx — Immi's Beginner Trading Dashboard (no extras needed)
import { useState } from "react";

export default function App() {
  const [symbol, setSymbol] = useState("F"); // default: Ford
  const [confidence, setConfidence] = useState(78); // mock %
  const [entry, setEntry] = useState(12.10);
  const [target, setTarget] = useState(12.55);
  const [stop, setStop] = useState(11.90);

  function onChangeSymbol(e) {
    const v = e.target.value.toUpperCase().slice(0, 5);
    setSymbol(v);
    setConfidence(Math.min(95, Math.max(60, 70 + Math.round(Math.random() * 20))));
    const base = 10 + Math.random() * 50;
    const atr = Math.max(0.2, base * 0.02);
    setEntry(Number((base).toFixed(2)));
    setTarget(Number((base + atr * 2.2).toFixed(2)));
    setStop(Number((base - atr * 1.5).toFixed(2)));
  }

  const styles = {
    page: { fontFamily: "system-ui, -apple-system, Segoe UI, Roboto, Arial, sans-serif", background: "linear-gradient(#f8fafc, #ffffff)", minHeight: "100vh", margin: 0, color: "#0f172a" },
    wrap: { maxWidth: 900, margin: "20px auto", padding: "16px" },
    h1: { fontSize: 24, margin: 0, display: "flex", gap: 10, alignItems: "center" },
    badge: { background: "#10b981", color: "white", padding: "3px 10px", borderRadius: 999, fontSize: 12 },
    card: { border: "1px solid #e2e8f0", borderRadius: 16, padding: 16, boxShadow: "0 1px 2px rgba(0,0,0,0.04)", background: "white" },
    grid: { display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 12 },
    row: { display: "flex", gap: 12, flexWrap: "wrap" },
    label: { fontSize: 12, color: "#64748b" },
    big: { fontSize: 28, fontWeight: 700 },
    btn: { display: "inline-block", padding: "10px 14px", borderRadius: 12, border: "1px solid #cbd5e1", background: "white", cursor: "pointer" },
    btnPrimary: { display: "inline-block", padding: "10px 14px", borderRadius: 12, border: "1px solid #22c55e", background: "#22c55e", color: "white", cursor: "pointer" },
    input: { padding: "10px 12px", borderRadius: 12, border: "1px solid #cbd5e1", width: "120px", fontWeight: 700, letterSpacing: 1 },
    foot: { fontSize: 11, color: "#64748b", textAlign: "center", marginTop: 16 },
  };

  return (
    <div style={styles.page}>
      <div style={styles.wrap}>
        <div style={{ ...styles.row, justifyContent: "space-between", alignItems: "center" }}>
          <h1 style={styles.h1}>🚀 AI Trading Dashboard <span style={styles.badge}>Beginner Mode</span></h1>
          <div style={{ fontStyle: "italic", fontSize: 12, color: "#64748b" }}>stay grateful to the Creator • trade with humility</div>
        </div>

        <div style={{ height: 8 }} />

        <div style={styles.card}>
          <div style={{ ...styles.row, justifyContent: "space-between" }}>
            <div>
              <div style={styles.label}>Ticker</div>
              <div style={styles.big}>{symbol || "—"}</div>
            </div>
            <div>
              <div style={styles.label}>Confidence</div>
              <div style={{ ...styles.big, color: "#10b981" }}>{confidence}%</div>
            </div>
            <div>
              <div style={styles.label}>Change Ticker</div>
              <input style={styles.input} value={symbol} onChange={onChangeSymbol} placeholder="e.g. F, MBLY, NVDA" />
            </div>
          </div>

          <div style={{ height: 10 }} />

          <div style={styles.grid}>
            <div style={styles.card}><div style={styles.label}>Entry (buy)</div><div style={styles.big}>${entry}</div></div>
            <div style={styles.card}><div style={styles.label}>Target (take profit)</div><div style={styles.big}>${target}</div></div>
            <div style={styles.card}><div style={styles.label}>Stop-loss (protect)</div><div style={styles.big}>${stop}</div></div>
          </div>

          <div style={{ height: 10 }} />

          <div style={styles.row}>
            <button style={styles.btnPrimary} onClick={() => window.open(`https://www.tradingview.com/chart/?symbol=${encodeURIComponent(symbol || "F")}`, "_blank")}>Open Chart (Free)</button>
            <button style={styles.btn} onClick={() => window.open(`https://robinhood.com/stocks/${encodeURIComponent(symbol || "F")}`, "_blank")}>Open in Robinhood</button>
          </div>
        </div>

        <div style={{ height: 12 }} />

        <div style={styles.card}>
          <div style={{ fontWeight: 600, marginBottom: 8 }}>Why this pick?</div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 8 }}>
            <div style={{ padding: 10, border: "1px dashed #cbd5e1", borderRadius: 12 }}><b>Trend:</b> Price above average recently (momentum bias).</div>
            <div style={{ padding: 10, border: "1px dashed #cbd5e1", borderRadius: 12 }}><b>Risk:</b> Small size. One trade per day. Follow stop-loss strictly.</div>
          </div>
        </div>

        <div style={styles.foot}>This is a simple demo (no live data yet). We’ll plug in fresh prices and news next.</div>
      </div>
    </div>
  );
}
