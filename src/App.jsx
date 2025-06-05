import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import FastComponent from "./components/FastComponent";
import SlowComponent from "./components/SlowComponent";
import './App.css'

export default function App() {
  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h1>React Profiler Demo </h1>
      <nav>
        <Link to="/fast" style={{ marginRight: "20px" }}>Fast Component</Link>
        <Link to="/slow">Slow Component</Link>
      </nav>

      <Routes>
        <Route path="/fast" element={<FastComponent />} />
        <Route path="/slow" element={<SlowComponent />} />
      </Routes>
    </div>
  );
}
