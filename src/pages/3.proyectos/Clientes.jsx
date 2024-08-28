import Navbar from "../../components/header/Navbar";
import marketing from "/marketing.jpg";
import phone from "/phone.jpg";

export default function Clientes() {
  return (
    <>
      <Navbar />
      <div className="">
        <h2 className="bg-bgwhite pt-10 text-center text-4xl font-extrabold text-migomorado md:px-10 md:py-10 md:text-left md:text-5xl">
          Somos una agencia internacional
        </h2>
        <section className="flex flex-col bg-bgwhite pb-10 text-rosin md:flex-row md:space-x-14 md:px-10">
          <div className="mx-auto my-10 w-4/5 space-y-10 text-lg md:font-semibold">
            <p>
              A lo largo de estos años, hemos trabajado con empresas y marcas
              nacionales e internacionales, con proyectos en diversos idiomas
              como el inglés, portugués, francés, alemán, italiano, japonés y
              coreano.
            </p>
            <p>Actualmente trabajamos con clientes de varios países:</p>
            <div className="m-5 grid grid-cols-3 gap-5">
              <div>
                <p className="font-semibold text-migomorado">México</p>
              </div>
              <div>
                <p className="font-semibold text-migomorado">Colombia</p>
              </div>
              <div>
                <p className="font-semibold text-migomorado">Panama</p>
              </div>
              <div>
                <p className="font-semibold text-migomorado">Portugal</p>
              </div>
              <div>
                <p className="font-semibold text-migomorado">Argentina</p>
              </div>
              <div>
                <p className="font-semibold text-migomorado">USA</p>
              </div>
            </div>
          </div>
          <img
            src={marketing}
            alt=""
            className="m-auto min-h-full w-4/5 rounded-3xl object-cover md:w-1/2"
          />
        </section>
      </div>

      <div className="">
        <h2 className="bg-bgwhite px-5 pt-20 text-center text-4xl font-extrabold text-migomorado md:px-10 md:text-left md:text-5xl">
          Clientes que confían en nosotros
        </h2>
        <section className="flex flex-col bg-bgwhite py-10 text-rosin md:flex-row md:space-x-14 md:px-10">
          <img
            src={phone}
            alt=""
            className="m-auto min-h-full w-4/5 rounded-3xl object-cover md:w-1/2"
          />

          <div className="mx-auto my-10 w-4/5 space-y-10 text-lg md:font-semibold">
            <p>
              Somos la agencia de Marketing Digital ideal para empresas líderes
              en su area. Ya sean nacionales o internacionales
            </p>
            <div className="m-auto grid grid-cols-3 gap-y-16 md:gap-x-10">
              <div>
                <p className="font-semibold text-migomorado">Nuestro Bosque</p>
                <p>Kinder</p>
              </div>
              <div>
                <p className="font-semibold text-migomorado">Joca</p>
                <p>Psicologo</p>
              </div>
              <div>
                <p className="font-semibold text-migomorado">
                  Refricool Costaverde
                </p>
                <p>Aires Acondicionados</p>
              </div>
              <div>
                <p className="font-semibold text-migomorado">Nverts</p>
                <p>Consultoria Financiera</p>
              </div>
              <div>
                <p className="font-semibold text-migomorado">Montse Oscos</p>
                <p>Psicologa</p>
              </div>
              <div>
                <p className="font-semibold text-migomorado">Unity</p>
                <p>Corredoras</p>
              </div>
              <div>
                <p className="font-semibold text-migomorado">Royal Prestige</p>
                <p>Articulos de Cocina</p>
              </div>
              <div>
                <p className="font-semibold text-migomorado">Mc Cofee</p>
                <p>Parafernalia Canabica</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
