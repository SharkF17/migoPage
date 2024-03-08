import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React from "react";
import ReactDOM from "react-dom/client";
/* import App from './App.jsx' */
import Navbar from "./components/header/Navbar.jsx";
import Hero from "./components/header/Hero.jsx";
import "./index.css";
import Home from "./pages/1.home/Home.jsx";
import Servicios from "./pages/2.servicios/Servicios.jsx";
import Proyectos from "./pages/3.proyectos/Proyectos.jsx";
import Nosotros from "./pages/4.nosotros/Nosotros.jsx";
import Espacios from "./pages/5.espacios/Espacios.jsx";
import Blog from "./pages/6.blog/Blog.jsx";
import Footer from "./components/footer/Footer.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/proyectos" element={<Proyectos />} />
        <Route path="/servicios" element={<Servicios />} />
        <Route path="/nosotros" element={<Nosotros />} />
        <Route path="/espacios" element={<Espacios />} />
        <Route path="/blog" element={<Blog />} />
      </Routes>

      <Footer />
    </Router>
  </React.StrictMode>
);
