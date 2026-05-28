import React from "react";
import Identity from "./pages/Identity.jsx";
import Patterns from "./pages/Patterns.jsx";
import bee from "/bee.png";
import Memory from "./pages/Memory.jsx";


export default function App() {
  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h1 style={{ display: "flex", alignItems: "center" }}>
        <img src={bee} alt="Bee" style={{ width: "40px", marginRight: "10px" }} />
        🐝 Bee SIM Portal
      </h1>

      <Identity />
      <Patterns />
      <Memory />
    </div>
  );
}
