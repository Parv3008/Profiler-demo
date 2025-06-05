import React from "react";

export default function FastComponent() {
  const items = Array.from({ length: 10 }, (_, i) => `Item ${i + 1}`);
  
  return (
    <div style={{ padding: "20px"}}>
      <h2>Fast Component </h2>
      <ul style={{listStyle:"none"}}>
        {items.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>
    </div>
  );
}
