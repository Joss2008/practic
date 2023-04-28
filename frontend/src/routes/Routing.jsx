import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Capacitaciones from "../pages/Capacitaciones";
import Contactanos from "../pages/Contactanos";
import Historia from "../pages/Historia";
import Home from "../pages/Home";
import Noticias from "../pages/Noticias";
import QuienesSomos from "../pages/QuienesSomos";
import RegistroVoluntarios from "../pages/RegistroVoluntarios";
import RendicionCuentas from "../pages/RendicionCuentas";
import Simbolos from "../pages/Simbolos";
import Sugerencias from "../pages/Sugerencias";
import Valores from "../pages/Valores";

const Routing = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/transparencia" element={<RendicionCuentas />} />
        <Route path="/contactanos" element={<Contactanos />} />
        <Route path="/noticias" element={<Noticias />} />
        <Route path="/capacitaciones" element={<Capacitaciones />} />
        <Route path="/valores" element={<Valores />} />
        <Route path="/quienes-somos" element={<QuienesSomos />} />
        <Route path="/simbolos" element={<Simbolos />} />
        <Route path="/registro-voluntarios" element={<RegistroVoluntarios />} />
        <Route path="/sugerencias" element={<Sugerencias />} />
        <Route path="/historia" element={<Historia />} />
      </Routes>
    </Router>
  );
};
export default Routing;
