import migo from "/migo.png?url";

export default function Navbar() {
  return (
    <>
      <nav className="text-azulin sticky -top-0 flex items-center justify-around bg-rosin py-4 text-lg font-bold">
        <ul className="flex min-w-full justify-around">
          <a
            href="/"
            className="group text-migomorado transition-all duration-300 ease-in-out"
          >
            <li class="bg-gradient-to-r from-migomorado to-migomorado bg-[length:0%_2px] bg-left-bottom bg-no-repeat transition-all duration-500 ease-out group-hover:bg-[length:100%_2px]">
              Inicio
            </li>
          </a>
          <a
            href="/nosotros"
            className="group text-migomorado transition-all duration-300 ease-in-out"
          >
            <li class="bg-gradient-to-r from-migomorado to-migomorado bg-[length:0%_2px] bg-left-bottom bg-no-repeat transition-all duration-500 ease-out group-hover:bg-[length:100%_2px]">
              Nosotros
            </li>
          </a>
          <a
            href="/clientes"
            className="group text-migomorado transition-all duration-300 ease-in-out"
          >
            <li class="bg-gradient-to-r from-migomorado to-migomorado bg-[length:0%_2px] bg-left-bottom bg-no-repeat transition-all duration-500 ease-out group-hover:bg-[length:100%_2px]">
              Clientes
            </li>
          </a>
          <a
            href="/servicios"
            className="group text-migomorado transition-all duration-300 ease-in-out"
          >
            <li class="bg-gradient-to-r from-migomorado to-migomorado bg-[length:0%_2px] bg-left-bottom bg-no-repeat transition-all duration-500 ease-out group-hover:bg-[length:100%_2px]">
              Servicios
            </li>
          </a>

        </ul>
      </nav>
    </>
  );
}
