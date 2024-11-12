import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React from "react";
import ReactDOM from "react-dom/client";
/* import App from './App.jsx' */
import "./index.css";
import Home from "./pages/1.home/Home.jsx";
import Servicios from "./pages/2.servicios/Servicios.jsx";
import Nosotros from "./pages/4.nosotros/Nosotros.jsx";
import Espacios from "./pages/5.espacios/Espacios.jsx";
import Blog from "./pages/6.blog/Blog.jsx";
import Footer from "./components/footer/Footer.jsx";
import Clientes from "./pages/3.proyectos/Clientes.jsx";
import Equipo from "./pages/7.equipo/Equipo.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/clientes" element={<Clientes />} />
        <Route path="/servicios" element={<Servicios />} />
        <Route path="/nosotros" element={<Nosotros />} />
        <Route path="/espacios" element={<Espacios />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/equipo" element={<Equipo />} />
      </Routes>

      <Footer />
    </Router>
  </React.StrictMode>,
);
