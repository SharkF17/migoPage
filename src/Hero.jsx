import Typed from "typed.js";
import React from "react";
import migo from "/migo.png?url";
import logo from "/logo.svg?url";
import {
  FaFacebookSquare,
  FaWhatsappSquare,
  FaInstagramSquare,
  FaRegEye,
} from "react-icons/fa";

export default function Home() {
  const el = React.useRef(null);

  React.useEffect(() => {
    const typed = new Typed(el.current, {
      strings: [
        "Digitaliza tu negocio",
        "Trabaja",
        "Crea tu web",
        "Haz crecer tu empresa",
      ],
      typeSpeed: 60,
      backSpeed: 30,
      backDelay: 2000,
      loop: true,
      shuffle: true,
    });

    return () => {
      // Destroy Typed instance during cleanup to stop animation
      typed.destroy();
    };
  }, []);
  return (
    <>
      <header className="justify-center text-center bg-azulin/80 space-y-16 py-20 border-azulin border-t-8 border-x-8 ">
        <div className="flex justify-center space-x-20">
          <img src={logo} alt="" className="w-36" />
          <div>
            <div className="text-5xl text-white">
              <span ref={el}></span>
            </div>
            <h2 className="text-9xl text-rosin font-bold">con MIGO</h2>
          </div>
        </div>
        <div className="flex justify-center text-4xl text-azulin space-x-10 bg-melonsin/80">
          <a
            href="https://www.facebook.com/migo.digital"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebookSquare />
          </a>
          <a
            href="https://api.whatsapp.com/send?phone=5215630291304&text=¡Hola%21+Quiero+trabajar+con+Migo"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaWhatsappSquare />
          </a>
          <a
            href="https://www.instagram.com/migo.digital/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagramSquare />
          </a>
        </div>
      </header>

      <nav className="sticky justify-around items-center -top-0 flex bg-rosin py-4 text-azulin text-lg font-bold">
        <img src={migo} className="absolute w-12" />
        <ul className="flex justify-around min-w-full">
          <a href="#">
            <li>Inicio</li>
          </a>
          <a href="#">
            <li>Proyectos</li>
          </a>
          <a href="#">
            <li>Evolucion</li>
          </a>
          <a href="#">
            <li>Nosotros</li>
          </a>
          <a href="#">
            <li>Espacio</li>
          </a>
          <a href="#">
            <li>Blog</li>
          </a>
        </ul>
      </nav>
    </>
  );
}
