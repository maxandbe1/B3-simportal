import React, { useState } from "react";
import identity from "../../modules/identity/module-bridge.js";

export default function Identity() {
  const [name, setName] = useState("");

  return (
    <div style={{ marginTop: "20px" }}>
      <h2>🐝 Identity Module</h2>

      <input
        value={name}
        onChange={e => setName(e.target.value)}
        placeholder="Enter identity name"
      />

      <button onClick={() => identity.setName(name)}>Save</button>

      <p>Current Name: {identity.state.name}</p>
    </div>
  );
}
