import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import { Nav } from "./components/Nav";
import { HomePage } from "./pages/HomePage";
import { AboutPage } from "./pages/AboutPage";
import { ReservationsPage } from "./pages/ReservationsPage";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    const elem = document.querySelector("#parallax");
    if (!elem) return;

    function parallax(e) {
      const x = e.clientX / window.innerWidth;
      const move = x - 0.5; // -0.5 a 0.5

      const range = 10;
      const m1 = 1;
      const m2 = 2;
      const m3 = 3;

      const p1 = 100 + move * range * m1;
      const p2 = 100 + move * range * m2;
      const p3 = 100 + move * range * m3;

      const pos = `${p1}% 0%, ${p2}% 0%, ${p3}% 0%`;
      elem.style.backgroundPosition = pos;
    }

    window.addEventListener("mousemove", parallax);
    return () => window.removeEventListener("mousemove", parallax);
  }, []);
  return (
    <BrowserRouter>
      <div id="parallax"></div>
      <div className="backdrop-blur-xs lg:backdrop-blur-none">
        <Nav />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/acerca" element={<AboutPage />} />
          <Route path="/reservas" element={<ReservationsPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
