import Typed from "typed.js";
import React from "react";
import logo from "/logo.svg?url";
import {
  FaFacebookSquare,
  FaWhatsappSquare,
  FaInstagramSquare,
  FaRegEye,
} from "react-icons/fa";

export default function Hero() {
  const el = React.useRef(null);

  React.useEffect(() => {
    const typed = new Typed(el.current, {
      strings: [
        "Digitaliza tu negocio",
        "Trabaja",
        "Crea tu web",
        "Haz crecer tu empresa",
        "Transforma tus ideas",
        "Destaca tu creatividad",
        "Conexiones que importan",
        "Marca la diferencia",
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
      <header className="border-azulin justify-center space-y-16 border-x-8 border-t-8 py-20 text-center">
        <div className="flex flex-col items-center justify-center space-y-5">
          <img src={logo} alt="" className="w-36" />
          <div>
            <div className="text-5xl text-black">
              <span ref={el}></span>
            </div>
            <h2 className="text-7xl font-bold text-rosin">con MIGO</h2>
          </div>
        </div>
        <div className="text-azulin bg-melonsin/80 flex justify-center space-x-10 text-4xl">
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
    </>
  );
}
