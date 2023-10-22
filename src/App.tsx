import "./css/App.css";
import { Routes, Route } from "react-router-dom";
import Landing from "./pages/landing/Landing";
import Layout from "./pages/Layout";

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
