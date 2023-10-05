import React from "react";
import "./css/App.css";
import Layout from "../src/components/Navbar";
import { Routes, Route } from "react-router-dom";
import Landing from "./pages/landing/Landing";

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Landing />} />
      </Route>
    </Routes>
  );
}

export default App;
