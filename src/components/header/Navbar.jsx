import migo from "/migo.png?url";

export default function Navbar() {
  return (
    <>
      <nav className="sticky justify-around items-center -top-0 flex bg-rosin py-4 text-azulin text-lg font-bold">
        <img src={migo} className="absolute w-12" />
        <ul className="flex justify-around min-w-full">
          <a href="/">
            <li>Inicio</li>
          </a>
          <a href="/proyectos">
            <li>Proyectos</li>
          </a>
          <a href="/servicios">
            <li>Servicios</li>
          </a>
          <a href="/nosotros">
            <li>Nosotros</li>
          </a>
          <a href="/espacios">
            <li>Espacios</li>
          </a>
          <a href="/blog">
            <li>Blog</li>
          </a>
        </ul>
      </nav>
    </>
  );
}
