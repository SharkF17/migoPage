import Navbar from "../../components/header/Navbar";
import marketing from "/marketing.jpg";

const EQUIPO = [
  { nombre: "Alejandra Riquelme", puesto: "Directora General" },
  { nombre: "Jocelin Rojas", puesto: "Diseñadora" },
  { nombre: "Claudio Ruiz", puesto: "Mercadologo" },
  { nombre: "Diego Miguel", puesto: "Programador" },
  { nombre: "Sergio", puesto: "Contador" },
];

export default function Equipo() {
  return (
    <>
      <div id="equipo-section" className="section md:px-10 space-y-10">
          <h2 className="section-title md:text-left md:text-5xl">Equipo</h2>
          <div className="w-full flex flex-col md:flex-row">
            <ul className="text-lg font-semibold py-5 space-y-10 text-center md:text-left md:w-full">
              {EQUIPO.map(({ nombre, puesto }) => (
                <li>
                  {nombre + " - "}
                  <span className="text-rosin/90">{puesto}</span>
                </li>
              ))}
            </ul>
            <img
            src={marketing}
            alt=""
            className="m-auto h-[30rem] w-4/5 rounded-3xl object-cover md:w-1/2 md:mr-0 md:mt-5"
          />
          </div>
        </div>
        <div className="m-auto bg-bgwhite">
          
        </div>
    </>
  );
}
