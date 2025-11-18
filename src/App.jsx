import { useState, useEffect } from "react";

import "./App.css";
import { Nav } from "./components/Nav";

function App() {
  const [count, setCount] = useState(0);

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
    <>
      <div id="parallax"></div>
      <Nav />
      <main className="flex flex-col items-center lg:items-start justify-center min-h-screen pt-40 sm:mt-30 xl:pl-40 lg:pt-0 lg:pl-20 lg:mt-10 xl:mt-0">
        <section className="text-start bg-white/80 lg:bg-transparent sm:px-20 sm:pt-20 sm:pb-50 lg:p-0 p-10 rounded-3xl shadow-3xl">
          <div className="space-y-12 sm:space-y-20 lg:space-y-12 max-w-3xl mx-auto">
            <h2 className="text-morado sm:text-3xl font-roboto-mono italic font-light text-2xl 2xl:text-4xl">
              Tu partido esta a un click
            </h2>
            <h1 className="text-4xl sm:text-6xl font-bold italic">
              Todo lo que necesitas para practicar{" "}
              <span className="text-morado">tenis</span> está al alcance de tu
              mano.
            </h1>
            <a
              className="px-6 lg:px-12 py-3 lg:py-5 rounded-full font-medium hover:scale-105 transition-transform shadow-2xl inline-block border-2 border-morado"
              href="#reservar"
            >
              <span className="bg-linear-to-r text-xl  font-roboto-mono font-medium italic from-morado via-azul sm:text-3xl to-lima text-transparent bg-clip-text ">
                Ver disponibilidad ahora
              </span>
            </a>
          </div>
        </section>
      </main>
    </>
  );
}

export default App;
