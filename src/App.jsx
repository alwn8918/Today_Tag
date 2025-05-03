import React, { useEffect } from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  useNavigate,
  useLocation,
} from "react-router-dom";
import "./index.css";
import Home from "./pages/Home";
import Select from "./pages/Select";

function RouterWrapper() {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    // 루트(/)로 들어온 경우 → localStorage 확인해서 자동 이동
    if (location.pathname === "/") {
      const savedType = localStorage.getItem("selectedCharacter");
      if (
        savedType === "yuja" ||
        savedType === "top" ||
        savedType === "miggo"
      ) {
        navigate(`/${savedType}`);
      }
    }
  }, [location]);

  return (
    <Routes>
      <Route path="/select" element={<Select />} />
      <Route path="/yuja" element={<Home type="yuja" />} />
      <Route path="/top" element={<Home type="top" />} />
      <Route path="/miggo" element={<Home type="miggo" />} />
      <Route path="/" element={<Select />} /> {/* fallback */}
    </Routes>
  );
}

function App() {
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
      <RouterWrapper />
    </BrowserRouter>
  );
}

export default App;
