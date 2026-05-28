import React, { useState } from "react";
import patterns from "../../modules/patterns/module-bridge.js";

export default function Patterns() {
  const [pattern, setPattern] = useState("");

  return (
    <div style={{ marginTop: "20px" }}>
      <h2>🐝 Patterns Module</h2>

      <input
        value={pattern}
        onChange={e => setPattern(e.target.value)}
        placeholder="Enter pattern"
      />

      <button onClick={() => patterns.addPattern(pattern)}>Add</button>

      <ul>
        {patterns.patterns.map((p, i) => (
          <li key={i}>{p}</li>
        ))}
      </ul>
    </div>
  );
}
