import Navbar from "../../components/header/Navbar";
import marketing from "/marketing.jpg";
import phone from "/phone.jpg";

export default function Clientes() {
  return (
    <>
      <Navbar />
      <div className="min-h-screen">
        <section className="bg-azulin/90 flex min-h-screen flex-row px-5 py-10 text-rosin">
          <div className="w-1/2">
            <h2 className="text-amarillin font-extrabold">
              Somos una agencia internacional
            </h2>
            <h3>
              A lo largo de estos años, hemos trabajado con empresas y marcas
              nacionales e internacionales, con proyectos en diversos idiomas
              como el inglés, portugués, francés, alemán, italiano, japonés y
              coreano.
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
            src={phone}
            alt=""
            className="min-h-full w-1/2 rounded-3xl object-cover"
          />
        </section>
      </div>

      <section className="bg-azulin/80 flex min-h-screen flex-row py-10 text-rosin">
        {/*<img src={marketing} alt="" className="object-cover w-1/2 min-h-full" />*/}
        <div>
          <h2>Clientes que confían en Migo Digital</h2>
          <p>
            Migo Digital es la agencia de Marketing Digital ideal para empresas
            líderes en su area. Ya sean nacionales o internacionales
          </p>
          <div className="m-5 grid grid-cols-3 gap-5">
            <div>
              <p className="font-semibold text-black">Nuestro Bosque</p>
              <p>Kinder</p>
            </div>
            <div>
              <p className="font-semibold text-black">Joca</p>
              <p>Psicologo</p>
            </div>
            <div>
              <p className="font-semibold text-black">Refricool Costaverde</p>
              <p>Aires Acondicionados</p>
            </div>
            <div>
              <p className="font-semibold text-black">Nverts</p>
              <p>Consultoria Financiera</p>
            </div>
            <div>
              <p className="font-semibold text-black">Montse Oscos</p>
              <p>Psicologa</p>
            </div>
            <div>
              <p className="font-semibold text-black">Unity</p>
              <p>Corredoras</p>
            </div>
            <div>
              <p className="font-semibold text-black">Royal Prestige</p>
              <p>Articulos de Cocina</p>
            </div>
            <div>
              <p className="font-semibold text-black">Mc Cofee</p>
              <p>Parafernalia Canabica</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
