import React from "react";
import { Link } from "react-router-dom";
import "./styles.css";
const Header = () => {
  return (
    <div className="py-2 bg-gray-800 px-4">
      <div className="flex justify-end font-semibold">
        <ul className="flex text-white text-sm gap-2 ">
          <li className="hover:text-gray-300">
            <a href="/">Acceso</a>
          </li>
          <li className="hover:text-gray-300">
            <a
              href="https://webmail.bomberosmanta.gob.ec/"
              target="_blank"
              rel="noreferrer"
            >
              Correo Electronico
            </a>
          </li>
        </ul>
      </div>

      <div className="w-60">
        <a href="/" className="flex items-center gap-2 text text-white">
          <img
            src="./img/logo.png"
            width={50}
            alt="favicon"
            className="navL-img"
          />
          <div className="flex flex-col">
            <strong>Cuerpo de Bomberos</strong>
            <span className="flex justify-end text-xs">Manta</span>
          </div>
        </a>
      </div>

      <div className="flex justify-end">
        <ul className="flex text-gray-300 text-sm gap-2 font-light">
          <li className="hover:text-white">
            <Link to="/">Inicio</Link>
          </li>
          <li className="hover:text-white dropdown">
            <Link to="/valores" className="dropbtn">
              Intitución
            </Link>
            <div class="dropdown-content text-white font-bold">
              <Link to="/historia">Historia</Link>
              <Link to="/simbolos">Símbolos</Link>
              <Link to="/quienes-somos">¿Quiénes somos?</Link>
            </div>
          </li>
          <li className="hover:text-white">
            <a href="/">Servicios</a>
          </li>
          <li className="hover:text-white dropdown">
            <Link to="/capacitaciones" className="dropbtn">
              Capacitaciones
            </Link>
            <div class="dropdown-content text-white font-bold">
              <Link to="/registro-voluntarios">Registro de voluntarios</Link>
              <Link to="/sugerencias">
                Formulario de sugerencias denuncias y reconocimientos
              </Link>
            </div>
          </li>
          <li className="hover:text-white">
            <Link to="/noticias">Noticias</Link>
          </li>
          <li className="hover:text-white">
            <Link to="/contactanos">Contáctanos</Link>
          </li>
          <li className="hover:text-white">
            <Link to="/transparencia">Transparencia</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
