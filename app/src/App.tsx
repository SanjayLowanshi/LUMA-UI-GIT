// app/src/App.tsx
import React from "react";

// helper to read CSS variable value by name
function cssVar(name: string) {
  return getComputedStyle(document.documentElement).getPropertyValue(name).trim();
}

export default function App() {
  // simple list of variables we want to inspect
  const vars = [
    "--color-primary",
    "--color-surface",
    "--color-text",
    "--space-4",
    "--radius-md",
    "--shadow-sm"
  ];

  return (
    <main className="container" style={{ paddingTop: "var(--space-5)" }}>
      <h1 className="h1">Luma UI — Tokens Demo</h1>

      <p style={{ marginBottom: "var(--space-4)" }}>
        This demo reads CSS variables from <code>:root</code>. Useful to verify token values quickly.
      </p>

      <div className="token-grid" aria-live="polite">
        {vars.map((v) => (
          <div key={v} className="token-card" role="region" aria-label={v}>
            <div style={{ fontSize: "var(--type-sm-size)", color: "var(--color-muted)", marginBottom: "var(--space-2)" }}>
              {v}
            </div>
            <div style={{ fontWeight: 600, fontSize: "var(--type-md-size)" }}>
              {cssVar(v) || "—"}
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
