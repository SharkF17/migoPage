import Navbar from "../../components/header/Navbar";
import marketing from "/marketing.jpg";

export default function Equipo() {
  return (
    <>
      <Navbar />
      <div className="">
        <h2 className="bg-bgwhite pt-10 text-center text-4xl font-extrabold text-migomorado md:px-10 md:py-10 md:text-left md:text-5xl">
          Equipo
        </h2>

        <section className="flex min-h-screen flex-col bg-bgwhite pb-10 text-rosin md:flex-row md:space-x-14 md:px-10">
          <div className="mx-auto my-10 w-4/5 space-y-10 text-lg font-semibold">
            <ul className="mt-14 space-y-10">
              <li>
                Alejandra Riquelme -{" "}
                <span className="text-rosin/90">Directora General</span>
              </li>
              <li>
                Jocelin Rojas - <span>Diseñadora</span>
              </li>
              <li>
                Claudio Ruiz - <span>Mercadologo</span>
              </li>
              <li>
                Diego Miguel - <span>Programador</span>
              </li>
              <li>
                Sergio - <span>Contador</span>
              </li>
            </ul>
          </div>
          <img
            src={marketing}
            alt=""
            className="m-auto min-h-full w-4/5 rounded-3xl object-cover md:w-1/2"
          />
        </section>
      </div>
    </>
  );
}
