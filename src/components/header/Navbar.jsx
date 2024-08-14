import migo from "/migo.png?url";

export default function Navbar() {
  return (
    <>
      <nav className="text-azulin sticky -top-0 flex items-center justify-around bg-rosin py-4 text-lg font-bold">
        <ul className="flex min-w-full justify-around">
          <a href="/">Inicio</a>
          <a href="/nosotros">
            <li>Nosotros</li>
          </a>
          <a href="/clientes">
            <li>Clientes</li>
          </a>
          <a href="/servicios">
            <li>Servicios</li>
          </a>
        </ul>
      </nav>
    </>
  );
}
