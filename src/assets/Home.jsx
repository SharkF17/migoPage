import marketing from "/marketing.jpg";

export default function Home() {
  return (
    <>
      <section className="min-h-screen bg-moradologo/80  text-rosa flex flex-row py-10">
        <img src={marketing} alt="" className="object-cover w-1/2 min-h-full" />

        <div className="w-1/2 m-10 space-y-10">
          <h1 className="font-black">Migo Digital</h1>
          <h2 className="font-bold">
            Tu A<span className="text-white">MIGO</span> en Marketing Digital
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
          <div className="grid grid-cols-3 gap-5 m-5">
            <div>
              <p>5</p>
              <p>Años</p>
            </div>
            <div>
              <p>5</p>
              <p>Paises</p>
            </div>
            <div>
              <p>2</p>
              <p>Continentes</p>
            </div>
            <div>
              <p>50</p>
              <p>Clientes</p>
            </div>
            <div>
              <p>50</p>
              <p>Proyectos</p>
            </div>
            <div>
              <p>200 hrs</p>
              <p>Contenido Audiovisual</p>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-moradologo/90 py-10 min-h-screen text-rosa font-bold flex flex-row">
        <div className="w-1/2">
          <h2 className="font-extrabold">Somos una agencia internacional</h2>
          <h3>
            A lo largo de estos años, hemos trabajado con empresas y marcas
            nacionales e internacionales, con proyectos en diversos idiomas como
            el inglés, portugués, francés, alemán, italiano, japonés y coreano.
          </h3>
          <ul>
            <p>Actualmente trabajamos con clientes de varios países:</p>
          </ul>
          <li>México</li>
          <li>USA</li>
          <li>Panama</li>
          <li>Colombia</li>
          <li>Portugal</li>
          <li>Argentina</li>
        </div>
        <img src={marketing} alt="" className="object-cover w-1/2 min-h-full"/>
      </section>
      <section className="min-h-screen bg-moradologo/80 text-rosa flex flex-row py-10">
        <img src={marketing} alt="" className="object-cover w-1/2 min-h-full"/>
        <div>
          <h2>Clientes que confían en Migo Digital</h2>
          <p>Migo Digital es la agencia de Marketing Digital ideal para empresas líderes en su area. Ya sean nacionales o internacionales</p>
        </div>
      </section>
    </>
  );
}
