import React from "react";
import logo from "/logoconletras.png?url";
import SlidingText from "../SlidingText";

const tools = [
  "Python",
  "Django",
  "JavaScript",
  "React",
  "TailwindCSS",
  "Vite",
  "Ruby",
  "Ruby on Rails",
  "Git",
  "Linux",
];

export default function Hero() {
  return (
    <>
      <header
        id="hero"
        className="relative flex flex-col border-azulin h-dvh justify-center space-y-16 py-20 text-center"
      >
        <div className="flex flex-col items-center justify-center space-y-5">
          <img src={logo} alt="" className="w-48" />

          <h2 className="text-2xl/6 text-balance font-semibold px-5 pt-4">
            Acompañamos la transición de tu marca al mundo digital
          </h2>
        </div>

        <div className="absolute bottom-0 left-0 right-0 text-azulin flex justify-center space-x-10 text-4xl text-[#CC6DCC] py-5 bg-migomorado">
          <SlidingText />
        </div>
      </header>
    </>
  );
}
