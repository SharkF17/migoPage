import Navbar from "../../components/header/Navbar";
import colorido from "/colorido.jpg";
import Equipo from "../7.equipo/Equipo"

const STADISTICS = [
  { stadistic: "Años", num: "3" },
  { stadistic: "Paises", num: "4" },
  { stadistic: "Contitnentes", num: "2" },
  { stadistic: "Clientes", num: "10+" },
  { stadistic: "Proyectos", num: "10+" },
  { stadistic: "Contenido Audiovisual", num: "200 hrs+" },

] 

export default function Nosotros() {
  return (
    <>
      <Navbar />
      <div className="section md:px-10 space-y-10">
        <h2 className="section-title md:text-left md:text-5xl">
          Nosotros
        </h2>
        <section className="flex flex-col-reverse text-rosin md:flex-row md:space-x-14">
          <img
            src={colorido}
            alt=""
            className="m-auto h-[30rem] w-4/5 rounded-3xl object-cover md:w-1/2"
          />

          <div className="text-center md:text-left mx-auto my-10 w-4/5 space-y-10 text-lg md:font-semibold">
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
              {STADISTICS.map(({ stadistic, num }) => (<>
                <div>
                  <p className="card-title">{num}</p>
                  <p>{stadistic}</p>
                </div>
              </>))}
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
