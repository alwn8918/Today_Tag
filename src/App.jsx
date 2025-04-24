import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import Home from "./pages/Home";

function App() {
  const selectedType = "yuja";

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home type={selectedType} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
