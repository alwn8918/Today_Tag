import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import Home from "./pages/Home";

function App() {
  const selectedType = "yuja";

  useEffect(() => {
    const setAppHeight = () => {
      const doc = document.documentElement;
      doc.style.setProperty("--app-height", `${window.innerHeight}px`);
    };
    setAppHeight();
    window.addEventListener("resize", setAppHeight);
    return () => window.removeEventListener("resize", setAppHeight);
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home type={selectedType} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
