import Navbar from "../../components/header/Navbar";
import marketing from "/marketing.jpg";
import phone from "/phone.jpg";

export default function Clientes() {
  return (
    <>
      <Navbar />
      <div className="">
        <h2 className="bg-bgwhite pt-10 text-center text-4xl font-extrabold text-migomorado md:px-10 md:py-10 md:text-left md:text-5xl">
          Clientes
        </h2>

        <section className="flex flex-col bg-bgwhite pb-10 text-rosin md:flex-row md:space-x-14 md:px-10">
          <div className="mx-auto my-10 w-4/5 space-y-10 text-lg md:font-semibold">
            <h3 className="bg-bgwhite text-center text-lg font-semibold text-migomorado md:text-left md:font-bold">
              Impulsando el Éxito Digital a nivel Internacional
            </h3>
            <p>
              En nuestra agencia de comunicación y marketing digital, trabajamos
              con una variedad de clientes que abarcan diferentes sectores y
              tamaños de negocio. Desde emprendedores que buscan dar sus
              primeros pasos en el mundo digital hasta grandes corporaciones que
              desean fortalecer su presencia en línea, nos adaptamos a las
              necesidades específicas de cada uno.
            </p>
            <p>
              Nos enorgullecemos de colaborar con empresas innovadoras que
              valoran la importancia de una comunicación efectiva y una
              estrategia de marketing digital bien planificada.
            </p>
            <p>
              Nuestros clientes no solo nos eligen por nuestras habilidades
              técnicas, sino por nuestra pasión por contar historias que
              resuenen y por nuestro compromiso con su éxito. Creemos que el
              crecimiento de nuestros clientes es nuestro propio crecimiento, y
              estamos dedicados a ayudarlos a prosperar en el dinámico mundo
              digital.
            </p>
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
          Clientes con MIGO
        </h2>
        <section className="flex flex-col bg-bgwhite py-10 text-rosin md:flex-row md:space-x-14 md:px-10">
          <div className="mx-auto my-10 w-4/5 space-y-10 text-lg md:font-semibold">
            <div className="m-auto grid grid-cols-3 gap-y-16 md:gap-x-10">
              <div>
                <p className="font-semibold text-migomorado">Nuestro Bosque</p>
                <p>Kinder</p>
              </div>
              <div>
                <p className="font-semibold text-migomorado">Joca</p>
                <p>Método JOCA {"(Psicologia)"}</p>
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
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
