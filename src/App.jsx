import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import './App.css'
import Memo from "./pages/Memo";
import NoMemo from "./pages/NoMemo";

export default function App() {
  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h1>React Profiler – useMemo vs No useMemo</h1>
      <nav>
        <Link to="/use-memo" style={{ marginRight: "20px" }}>With useMemo</Link>
        <Link to="/no-memo">Without useMemo</Link>
      </nav>

      <Routes>
        <Route path="/use-memo" element={<Memo/>} />
        <Route path="/no-memo" element={<NoMemo/>} />
      </Routes>
    </div>
  );
}
