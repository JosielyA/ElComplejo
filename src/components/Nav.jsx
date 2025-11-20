import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import tenisBall from "../assets/tennisball.png";
import logo from "../assets/logo.png";

export const Nav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [hoveredLink, setHoveredLink] = useState(null);
  const location = useLocation();

  // Determinar el link activo basado en la ruta actual
  const getLinkFromPath = (path) => {
    const p = path.toLowerCase();
    if (p === "/" || p === "") return "Inicio";
    if (p.includes("acerca")) return "Acerca";
    if (p.includes("reservas")) return "Reservas";
    return "Inicio";
  };

  const currentLink = getLinkFromPath(location.pathname);

  // El link que se debe mostrar como activo (hover o actual)
  const activeLink = hoveredLink || currentLink;

  return (
    <nav className="fixed top-6 right-6 left-6 z-50">
      {/* Contenedor principal que mantiene la forma circular */}
      <div className="relative">
        {/* Navbar circular */}
        <div
          className={`menu-transition menu-element bg-white/80 shadow-2xl ${
            isMenuOpen ? "" : "closed"
          } mx-auto max-w-7xl border border-gray-300/50 p-5 transition-all duration-500 ease-in-out 2xl:flex 2xl:h-36 2xl:max-w-[80%] 2xl:flex-col 2xl:place-content-center 2xl:px-15`}
        >
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <img
                className="h-auto w-40 md:w-48 lg:w-80 2xl:w-96"
                src={logo}
                alt="logo"
              />
            </div>

            <div
              className="hidden items-center space-x-10 md:flex"
              onMouseLeave={() => setHoveredLink(null)}
            >
              {["Inicio", "Acerca", "Reservas"].map((item) => (
                <div
                  key={item}
                  className="relative flex items-center space-x-3"
                  onMouseEnter={() => setHoveredLink(item)}
                >
                  {activeLink === item && (
                    <img
                      src={tenisBall}
                      className="tennis-ball tennis-ball-bounce -left-3"
                      alt="tenis"
                    />
                  )}
                  <Link
                    className={
                      activeLink === item
                        ? "active-link-nav"
                        : "inactive-link-nav"
                    }
                    to={item === "Inicio" ? "/" : `/${item.toLowerCase()}`}
                  >
                    {item}
                  </Link>
                </div>
              ))}
            </div>

            <button className="button-nav hidden md:block">
              Reserva Ahora
            </button>

            <button
              className="burger-button"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <svg
                className="size-6"
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
          className={`movile-menu md:hidden ${
            isMenuOpen
              ? "pointer-events-auto max-h-[800px] scale-y-100 opacity-100"
              : "pointer-events-none max-h-0 scale-y-0 opacity-0"
          }`}
        >
          <div className="rounded-t-none rounded-b-2xl border border-gray-300/50 bg-white/80 p-6 shadow-xl">
            <div className="space-y-4">
              {["Inicio", "Acerca", "Reservas"].map((item) => (
                <div
                  key={item}
                  className="relative flex items-center space-x-3 rounded-xl p-4"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {currentLink === item && (
                    <img
                      src={tenisBall}
                      className="tennis-ball tennis-ball-bounce left-1"
                      alt="tenis"
                    />
                  )}
                  <Link
                    className={
                      currentLink === item
                        ? "active-link-nav-movile"
                        : "inactive-link-nav-movile"
                    }
                    to={item === "Inicio" ? "/" : `/${item.toLowerCase()}`}
                  >
                    {item}
                  </Link>
                </div>
              ))}
              <button
                className="button-nav w-full"
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
