import Navbar from "../../components/header/Navbar";
import marketing from "/marketing.jpg";

export default function Nosotros() {
  return (
    <>
      <Navbar />
      <div className="min-h-screen">
        <section className="flex min-h-screen flex-row bg-bgwhite px-5 py-10 text-rosin">
          <img
            src={marketing}
            alt=""
            className="min-h-full w-1/2 rounded-3xl object-cover"
          />

          <div className="m-10 w-1/2 space-y-10">
            <h1 className="text-amarillin font-black">Migo Digital</h1>
            <h2 className="font-bold">
              Tus redes sociales con<span className="text-amarillin">MIGO</span>
            </h2>
            <p>
              Somos la agencia mas eficiente de marketing digital en México y
              desde la CDMX ofrecemos servicios integrales para marcas y
              empresas en todo el mundo.
            </p>
            <p>Hemos desarrollado más de 25 proyectos personalizados</p>
            <div className="m-5 grid grid-cols-3 gap-5">
              <div>
                <p className="font-semibold text-black">4</p>
                <p>Años</p>
              </div>
              <div>
                <p className="font-semibold text-black">4</p>
                <p>Paises</p>
              </div>
              <div>
                <p className="font-semibold text-black">2</p>
                <p>Continentes</p>
              </div>
              <div>
                <p className="font-semibold text-black">25+</p>
                <p>Clientes</p>
              </div>
              <div>
                <p className="font-semibold text-black">25+</p>
                <p>Proyectos</p>
              </div>
              <div>
                <p className="font-semibold text-black">200 hrs +</p>
                <p>Contenido Audiovisual</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
