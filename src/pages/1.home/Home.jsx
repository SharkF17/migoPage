import marketing from "/marketing.jpg";
import Navbar from "../../components/header/Navbar";
import Hero from "../../components/header/Hero";

export default function Home() {
  return (
    <>
      <Hero />
      <Navbar />
      <section className="min-h-screen bg-azulin/80  text-rosin flex flex-row py-10 px-5">
        <img
          src={marketing}
          alt=""
          className="object-cover w-1/2 min-h-full rounded-3xl"
        />

        <div className="w-1/2 m-10 space-y-10">
          <h1 className="font-black text-amarillin">Migo Digital</h1>
          <h2 className="font-bold">
            Tu A<span className="text-amarillin">MIGO</span> en Marketing
            Digital
          </h2>
          <p>
            Somos la agencia mas eficiente de marketing digital en México y
            desde la CDMX ofrecemos servicios integrales para marcas y empresas
            en todo el mundo.
          </p>
          <p>
            Hemos desarrollado más de _____ proyectos exitosos con clientes de
            ____ países en ___ continentes.
          </p>
          <div className="grid grid-cols-3 gap-5 m-5 ">
            <div>
              <p className="text-white font-semibold">5</p>
              <p>Años</p>
            </div>
            <div>
              <p className="text-white font-semibold">5</p>
              <p>Paises</p>
            </div>
            <div>
              <p className="text-white font-semibold">2</p>
              <p>Continentes</p>
            </div>
            <div>
              <p className="text-white font-semibold">50</p>
              <p>Clientes</p>
            </div>
            <div>
              <p className="text-white font-semibold">50</p>
              <p>Proyectos</p>
            </div>
            <div>
              <p className="text-white font-semibold">200 hrs</p>
              <p>Contenido Audiovisual</p>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-azulin/90 py-10 px-5 min-h-screen text-rosin flex flex-row">
        <div className="w-1/2">
          <h2 className="font-extrabold text-amarillin">
            Somos una agencia internacional
          </h2>
          <h3>
            A lo largo de estos años, hemos trabajado con empresas y marcas
            nacionales e internacionales, con proyectos en diversos idiomas como
            el inglés, portugués, francés, alemán, italiano, japonés y coreano.
          </h3>
          <ul>
            <p>Actualmente trabajamos con clientes de varios países:</p>
            <li>México</li>
            <li>USA</li>
            <li>Panama</li>
            <li>Colombia</li>
            <li>Portugal</li>
            <li>Argentina</li>
          </ul>
        </div>
        <img
          src={marketing}
          alt=""
          className="object-cover w-1/2 min-h-full rounded-3xl"
        />
      </section>
      <section className="min-h-screen bg-azulin/80 text-rosin flex flex-row py-10">
        <img src={marketing} alt="" className="object-cover w-1/2 min-h-full" />
        <div>
          <h2>Clientes que confían en Migo Digital</h2>
          <p>
            Migo Digital es la agencia de Marketing Digital ideal para empresas
            líderes en su area. Ya sean nacionales o internacionales
          </p>
        </div>
      </section>
    </>
  );
}
