import { FaGit } from "react-icons/fa";
import Navbar from "../../components/header/Navbar";
import marketing from "/marketing.jpg";
import phone from "/phone.jpg";

let information;

function ShowCardInfo() {
  information = document.getElementById("Hello");
  information.classList.add("w-[100%]");
}

function HideCardInfo() {
  information = document.getElementById("Hello");
  information.classList.remove("w-[100%]");
}

const CLIENTES = [
  {
    nombre: "Nuestro Bosque",
    giro: "Kinder",
    descripcion:
      "Todo comenzó tocando las puertas de un kínder, al que perteneció la dueña de MIGO. Comenzamos con activar y dar una identidad visual más sólida a la escuela. Se realizó un levantamiento de imagen de la escuela, para utilizarla como contenido orgánico. Establecimos una identidad visual. Trabajamos en conjunto cerca del cierre de ciclo. Creamos un video de graduación, por el tiempo de la pandemia. El equipo MIGO, junto con las maestras del Kínder, realizaron un video de despedida a los alumnos que cerraban el ciclo escolar.",
  },
  {
    nombre: "Joca",
    giro: "Método JOCA (Psicologia)",
    descripcion:
      "El método JOCA, creado por la Dra. Carmen Puga, trabajó con MIGO, para tener una mejor presencia en Redes Sociales. Manejamos Facebook, Instagram, TikTok y YouTube. Todo el contenido creado en ese tiempo fue orgánico. Se crearon clases de estiramiento, las cuáles grabó y editó el equipo de MIGO. Se grabó un en vivo cada semana. Apoyamos en la creación y edición de su segundo libro “De Nuestros Amores Que lo Iluminan Todo”.",
  },
  {
    nombre: "Montse Oscos",
    giro: "Psicologa",
    descripcion:
      "En esta ocasión MIGO fue un complemento para la cliente, ya que en esta situación, la cliente generaba en su mayoría su propio contenido. Se hizo una renovación de página web en su tiempo trabajado, y edición de ciertos videos.",
  },
  {
    nombre: "Nverts/ Nssupply",
    giro: "Consultoria Financiera",
    descripcion: "Ubicada en Estocolmo, Suecia",
  },
  {
    nombre: "Refricool Costaverde",
    giro: "Aires Acondicionados",
    descripcion: "",
  },
  {
    nombre: "Unity",
    giro: "Corredoras",
    descripcion: "",
  },
  {
    nombre: "Royal Prestige",
    giro: "Articulos de Cocina",
    descripcion: "",
  },
];

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
            <div className="text-wrap m-auto grid grid-cols-2 gap-y-16 md:grid-cols-3 md:gap-x-10">
              {CLIENTES.map(({ nombre, giro, descripcion }) => (
                <div
                  className="border"
                  onMouseEnter={() => ShowCardInfo()}
                  onMouseLeave={() => HideCardInfo()}
                >
                  <p className="font-semibold text-migomorado">{nombre}</p>
                  <p>{giro}</p>
                  <p
                    id="Hello"
                    className="text-nowrap fixed z-[100] grid h-full w-[0] place-content-center overflow-hidden bg-orange-500 duration-1000"
                  >
                    {descripcion}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
