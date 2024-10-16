import Typed from "typed.js";
import React from "react";
import logo from "/logo.svg?url";
import curve from "/curve.png?url";
import {
  FaFacebookSquare,
  FaWhatsappSquare,
  FaInstagramSquare,
  FaRegEye,
} from "react-icons/fa";

import { ScrollParallax } from "react-just-parallax";

export default function Hero() {
  const el = React.useRef(null);

  React.useEffect(() => {
    const typed = new Typed(el.current, {
      strings: [
        "Crea tu web",
        "Transforma tus ideas",
        "Destaca tu creatividad",
        "Haz crecer tu empresa",
        "Digitalizate",
        "Tus redes sociales",
        "Trabaja",
        "Tus ideas",
        "Marketing Digital",
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
      <header
        id="hero"
        className="border-azulin h-screen justify-center space-y-16 border-x-8 border-t-8 py-20 text-center"
      >
        <div className="flex flex-col items-center justify-center space-y-5">
          <img src={logo} alt="" className="w-36" />
          <div>
            <div className="text-2xl text-rosin md:text-5xl">
              <span ref={el}></span>
            </div>
            <h2 className="text-7xl text-rosin">
              con <span className="font-bold text-migomorado/90">MIGO</span>
            </h2>
          </div>
          <img
            src={curve}
            className="relative left-0 top-full w-3/4 md:w-1/2 xl:-mt-2"
            alt="Curve"
          />
        </div>

        <div className="text-azulin bg-melonsin/80 flex justify-center space-x-10 text-4xl text-migomorado">
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
