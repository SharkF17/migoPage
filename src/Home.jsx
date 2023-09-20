import Typed from "typed.js";
import React from "react";
import space from "/space.mp4";
import viteLogo from "/vite.svg";
import { FaFacebookSquare, FaWhatsappSquare, FaInstagramSquare, FaRegEye } from "react-icons/fa";

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
      <header className="justify-center text-center bg-moradologo space-y-16 py-20 border-rosa border-t-4 border-x-4 ">
        <div className="text-5xl text-white">
          <span ref={el}></span>
        </div>
        <h1 className="text-9xl text-rosalogo font-bold">con MIGO</h1>
        <div className="flex justify-center text-4xl text-rosalogo space-x-10">
          <FaFacebookSquare />
          <FaWhatsappSquare />
          <FaInstagramSquare />
        </div>
      </header>
      
      <nav className="sticky justify-around items-center -top-0 flex bg-rosa py-4 text-lg font-bold">
        <FaRegEye className="absolute"/>
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
