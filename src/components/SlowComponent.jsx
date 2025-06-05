import React from "react";

function fib(n) {
  if (n <= 1) return 1;
  return fib(n - 1) + fib(n - 2);
}

export default function SlowComponent() {
  const numbers = [];
  for (let i = 1; i <= 38; i++) {
    numbers.push(fib(i)); 
  }

  return (
    <div style={{ padding: "20px" }}>
      <h2>Slow Component </h2>
      <p>Fibonacci numbers calculated:</p>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
        {numbers.map((num, idx) => (
          <span key={idx}>{num}</span>
        ))}
      </div>
    </div>
  );
}
