import React, { useState } from "react";
import tenisBall from "../assets/tennisball.png";
import logo from "../assets/logo.png";

export const Nav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-6 left-6 right-6 z-50">
      {/* Contenedor principal que mantiene la forma circular */}
      <div className="relative">
        {/* Navbar circular */}
        <div
          className={`bg-white/80 shadow-2xl menu-transition menu-element ${
            isMenuOpen ? "" : "closed"
          } p-5 border border-gray-300/50 max-w-7xl 2xl:max-w-[80%] 2xl:flex 2xl:flex-col 2xl:place-content-center 2xl:h-36 2xl:px-15 mx-auto transition-all duration-500 ease-in-out`}
        >
          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <img
                className="w-40 md:w-48 lg:w-80 2xl:w-96 h-auto"
                src={logo}
                alt="logo"
              />
            </div>

            <div className="hidden md:flex items-center space-x-10">
              <div className="flex items-center relative space-x-3">
                <img
                  src={tenisBall}
                  className="size-8 lg:size-10 absolute z-0 -left-3 lg:-left-4 drop-shadow-3xl"
                  alt="tenis"
                />
                <a
                  className="text-morado hover:text-morado font-bold italic text-lg lg:text-2xl 2xl:text-2xl 3xl:text-4xl block z-1 transition duration-700"
                  href="#"
                >
                  Inicio
                </a>
              </div>
              <a
                className="text-gris-oscuro hover:text-morado font-bold italic text-lg lg:text-2xl 2xl:text-2xl 3xl:text-4xl block z-1 transition duration-70"
                href="#"
              >
                Acerca
              </a>
              <a
                className="text-gris-oscuro hover:text-morado font-bold italic text-lg lg:text-2xl 2xl:text-2xl 3xl:text-4xl block z-1 transition duration-70"
                href="#"
              >
                Reservas
              </a>
            </div>

            <button className="hidden 2xl:text-3xl 2xl:px-10 2xl:py-4 md:block bg-linear-to-r italic from-morado via-azul to-lima text-white font-bold py-3 px-8 rounded-full transition duration-700 transform hover:scale-105 shadow-lg">
              Reserva Ahora
            </button>

            <button
              className="md:hidden p-3 bg-gray-100 rounded-full hover:bg-gray-200 transition duration-700"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {isMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Menú móvil - Posicionado absolutamente debajo del navbar */}
        <div
          className={`absolute top-full left-0 right-0 transition-all duration-300 ease-in-out origin-top transform overflow-hidden ${
            isMenuOpen
              ? "scale-y-100 opacity-100 max-h-[800px] pointer-events-auto"
              : "scale-y-0 opacity-0 max-h-0 pointer-events-none"
          }`}
        >
          <div className="bg-white/80 shadow-xl rounded-t-none rounded-b-2xl p-6 border border-gray-300/50">
            <div className="space-y-4">
              <div className="flex items-center  space-x-3 relative  p-4 rounded-xl">
                <img
                  src={tenisBall}
                  className="size-8 absolute left-1 drop-shadow-3xl"
                  alt="tenis"
                />
                <a
                  className="text-morado font-bold italic z-1 text-lg"
                  href="#"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Inicio
                </a>
              </div>
              <div className=" p-4 rounded-xl">
                <a
                  className="text-gris-oscuro hover:text-morado font-bold italic text-lg block"
                  href="#"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Acerca
                </a>
              </div>
              <div className=" p-4 rounded-xl">
                <a
                  className="text-gris-oscuro hover:text-morado font-bold italic text-lg block"
                  href="#"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Reservas
                </a>
              </div>
              <button
                className="w-full bg-linear-to-r from-morado via-azul to-lima text-white font-bold italic py-4 px-6 rounded-full transition duration-700 shadow-lg"
                onClick={() => setIsMenuOpen(false)}
              >
                Reserva Ahora
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};
