import React from "react";
import { Link } from "react-router-dom";

export function Footer() {
  return (
    <footer className="bg-gray-200 text-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Asistencia */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Asistencia</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-black hover:text-white">
                  Centro de ayuda
                </Link>
              </li>
              <li>
                <Link to="/" className="text-black hover:text-white">
                  AirCover
                </Link>
              </li>
              <li>
                <Link to="/" className="text-black hover:text-white">
                  Antidiscriminación
                </Link>
              </li>
            </ul>
          </div>

          {/* Modo Anfitrión */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Modo Anfitrión</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-black hover:text-white">
                  Pon tu espacio en Airbnb
                </Link>
              </li>
              <li>
                <Link to="/" className="text-black hover:text-white">
                  Oferece tu experiencia en Airbnb
                </Link>
              </li>
              <li>
                <Link to="/" className="text-black hover:text-white">
                  Ofrece tu servicio en Airbnb
                </Link>
              </li>
            </ul>
          </div>

          {/* Airbnb */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Airbnb</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-black hover:text-white">
                  Novedades de mayo de 2025
                </Link>
              </li>
              <li>
                <Link to="/" className="text-black hover:text-white">
                  Sala de prensa
                </Link>
              </li>
              <li>
                <Link to="/" className="text-black hover:text-white">
                  Carreras
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex space-x-6 mb-4 md:mb-0">
              <span className="text-black">© 2025 Airbnb Clone, Inc.</span>
              <Link to="/" className="text-black hover:text-white">
                Privacidad
              </Link>
              <Link to="/" className="text-black hover:text-white">
                Términos
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
