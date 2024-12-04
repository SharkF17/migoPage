import React, { useState, useRef } from "react";

const Contenedor = () => {
  const [descripcionActiva, setDescripcionActiva] = useState(null); // Descripción activa.
  const timerRef = useRef(null); // Referencia para el temporizador.

  const tarjetas = [
    {
      id: 1,
      texto: "Nuestro Bosque",
      giro: "Kinder",
      descripcion:
        "Todo comenzó tocando las puertas de un kínder, al que perteneció la dueña de MIGO. Comenzamos con activar y dar una identidad visual más sólida a la escuela. Se realizó un levantamiento de imagen de la escuela, para utilizarla como contenido orgánico. Establecimos una identidad visual. Trabajamos en conjunto cerca del cierre de ciclo. Creamos un video de graduación, por el tiempo de la pandemia. El equipo MIGO, junto con las maestras del Kínder, realizaron un video de despedida a los alumnos que cerraban el ciclo escolar.",
    },
    {
      id: 2,
      texto: "Metodo Joca",
      giro: "Psicologia",
      descripcion:
        "El método JOCA, creado por la Dra. Carmen Puga, trabajó con MIGO, para tener una mejor presencia en Redes Sociales. Manejamos Facebook, Instagram, TikTok y YouTube. Todo el contenido creado en ese tiempo fue orgánico. Se crearon clases de estiramiento, las cuáles grabó y editó el equipo de MIGO. Se grabó un en vivo cada semana. Apoyamos en la creación y edición de su segundo libro “De Nuestros Amores Que lo Iluminan Todo”.",
    },
    {
      id: 3,
      texto: "Montse Oscos",
      giro: "Psicologia",
      descripcion:
        "En esta ocasión MIGO fue un complemento para la cliente, ya que en esta situación, la cliente generaba en su mayoría su propio contenido. Se hizo una renovación de página web en su tiempo trabajado, y edición de ciertos videos.",
    },
    {
      id: 4,
      texto: "Nverts/ Nssupply",
      giro: "Consultoria Financiera",
      descripcion: "Ubicada en Estocolmo, Suecia",
    },
    {
      id: 5,
      texto: "Refricool Costaverde",
      giro: "Aires Acondicionados",
      descripcion: "Descripcion de Refricool Costaverde.",
    },
    {
      id: 6,
      texto: "Royal Prestige",
      giro: "Articulos de Cocina",
      descripcion: "Descripcion de Royal Prestige.",
    },
    {
      id: 7,
      texto: "Unity",
      giro: "Corredoras",
      descripcion: "Descripcion de Unity.",
    },
  ];

  const handleMouseEnter = (descripcionTexto) => {
    clearTimeout(timerRef.current); // Limpia cualquier temporizador activo.
    setDescripcionActiva(descripcionTexto); // Muestra la descripción de la tarjeta actual.
  };

  const handleMouseLeave = () => {
    timerRef.current = setTimeout(() => {
      setDescripcionActiva(null); // Oculta la descripción después de un retraso.
    }, 200); // Ajusta el tiempo según sea necesario.
  };

  return (
    <div className="relative grid w-full grid-cols-2 flex-wrap items-center justify-center gap-5 overflow-hidden bg-bgwhite p-10 text-lg md:grid-cols-3">
      {tarjetas.map((tarjeta) => (
        <div
          key={tarjeta.id}
          className="m-1 flex cursor-pointer flex-col items-center justify-center border text-center transition-all hover:bg-bgwhite/50"
          onMouseEnter={() => handleMouseEnter(tarjeta.descripcion)}
          onMouseLeave={handleMouseLeave}
        >
          <p className="font-semibold text-migomorado">{tarjeta.texto}</p>
          <p className="text-rosin">{tarjeta.giro}</p>
        </div>
      ))}
      {descripcionActiva && (
        <div className="pointer-events-none absolute inset-0 m-5 flex items-center justify-center bg-black/60 p-4 text-center text-lg text-white transition-opacity duration-300">
          {descripcionActiva}
        </div>
      )}
    </div>
  );
};

export default Contenedor;
