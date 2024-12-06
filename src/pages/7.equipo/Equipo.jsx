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
      <div className="flex min-h-screen min-w-full flex-col bg-bgwhite md:flex-row">
        <div className="flex flex-col bg-bgwhite pt-10 text-center text-4xl font-extrabold text-migomorado md:px-10 md:py-10 md:text-left md:text-5xl">
          <h2>Equipo</h2>

          <div className="mb-10 w-4/5 space-y-10 text-lg font-semibold md:mt-10">
            <ul className="mt-14 space-y-10 pl-5 text-left">
              {EQUIPO.map(({ nombre, puesto }) => (
                <li>
                  {nombre + " - "}
                  <span className="text-rosin/90">{puesto}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="m-auto bg-bgwhite">
          <img
            src={marketing}
            alt=""
            className="m-auto w-4/5 rounded-3xl object-cover pb-5 md:w-4/5"
          />
        </div>
      </div>
    </>
  );
}
