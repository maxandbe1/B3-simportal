import React, { useState } from "react";
import memory from "../../modules/memory/module-bridge.js";

export default function Memory() {
  const [text, setText] = useState("");

  return (
    <div style={{ marginTop: "20px" }}>
      <h2>🐝 Memory Module</h2>
      <memory />



      <input
        value={text}
        onChange={e => setText(e.target.value)}
        placeholder="Write a memory entry"
        style={{ width: "250px" }}
      />

      <button onClick={() => {
        memory.addEntry(text);
        setText("");
      }}>
        Save
      </button>

      <ul>
        {memory.entries.map(entry => (
          <li key={entry.id}>
            {entry.text} — {new Date(entry.timestamp).toLocaleString()}
            <button
              style={{ marginLeft: "10px" }}
              onClick={() => memory.removeEntry(entry.id)}
            >
              ❌
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
