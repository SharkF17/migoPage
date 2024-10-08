import Navbar from "../../components/header/Navbar";
import marketing from "/marketing.jpg";

export default function Nosotros() {
  return (
    <>
      <Navbar />
      <div className="">
        <h2 className="bg-bgwhite pt-10 text-center text-4xl font-extrabold text-migomorado md:px-10 md:text-left md:text-5xl">
          Migo Digital
        </h2>
        <section className="flex flex-col bg-bgwhite py-10 text-rosin md:flex-row md:space-x-14 md:px-10">
          <img
            src={marketing}
            alt=""
            className="m-auto min-h-full w-4/5 rounded-3xl object-cover md:w-1/2"
          />

          <div className="mx-auto my-10 w-4/5 space-y-10 text-lg md:font-semibold">
            <h3 className="font-bold">
              Tus redes sociales con{" "}
              <span className="text-migomorado">MIGO</span>
            </h3>
            <p>
              Somos la agencia mas eficiente de marketing digital en{" "}
              <span className="text-migomorado">México</span> y desde la{" "}
              <span className="text-migomorado">CDMX</span> ofrecemos servicios
              integrales para marcas y empresas en todo el{" "}
              <span className="text-migomorado">mundo</span>.
            </p>
            <p>
              Hemos desarrollado más de{" "}
              <span className="text-migomorado">25 proyectos</span>{" "}
              personalizados
            </p>
            <div className="m-5 grid grid-cols-3 gap-5">
              <div>
                <p className="font-semibold text-migomorado">4</p>
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
                <p className="font-semibold text-migomorado">25+</p>
                <p>Clientes</p>
              </div>
              <div>
                <p className="font-semibold text-migomorado">25+</p>
                <p>Proyectos</p>
              </div>
              <div>
                <p className="font-semibold text-migomorado">200 hrs +</p>
                <p>Contenido Audiovisual</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
