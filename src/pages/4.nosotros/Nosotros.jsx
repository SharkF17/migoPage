import Navbar from "../../components/header/Navbar";
import colorido from "/colorido.jpg";
import Equipo from "../7.equipo/Equipo"

export default function Nosotros() {
  return (
    <>
      <Navbar />
      <div className="">
        <h2 className="bg-bgwhite pt-10 text-center text-4xl font-extrabold text-migomorado md:px-10 md:text-left md:text-5xl">
          Nosotros
        </h2>
        <section className="flex flex-col bg-bgwhite py-10 text-rosin md:flex-row md:space-x-14 md:px-10">
          <img
            src={colorido}
            alt=""
            className="m-auto h-[30rem] w-4/5 rounded-3xl object-cover md:w-1/2"
          />

          <div className="mx-auto my-10 w-4/5 space-y-10 text-lg md:font-semibold">
            <p>
              Somos una agencia especializada en{" "}
              <span className="text-migomorado">Comunicación Digital</span> en{" "}
              <span className="text-migomorado">México</span>. Desde la{" "}
              <span className="text-migomorado">Ciudad de México</span>{" "}
              ofrecemos servicios integrales para marcas y empresas de{" "}
              <span className="text-migomorado">Todo el Mundo</span>.
            </p>
            <p>
              Hemos desarrollado más de{" "}
              <span className="text-migomorado">1000 Diseños</span>{" "}
              personalizados.
            </p>
            <div className="m-5 grid grid-cols-3 gap-5">
              <div>
                <p className="font-semibold text-migomorado">3</p>
                <p>Años</p>
              </div>
              <div>
                <p className="font-semibold text-migomorado">4</p>
                <p>Paises</p>
              </div>
              <div>
                <p className="font-semibold text-migomorado">2</p>
                <p>Continentes</p>
              </div>
              <div>
                <p className="font-semibold text-migomorado">10+</p>
                <p>Clientes</p>
              </div>
              <div>
                <p className="font-semibold text-migomorado">10+</p>
                <p>Proyectos</p>
              </div>
              <div>
                <p className="font-semibold text-migomorado">200 hrs+</p>
                <p>Contenido Audiovisual</p>
              </div>
            </div>
          </div>
        </section>
      </div>
      <div>
        <Equipo />
      </div>
    </>
  );
}
