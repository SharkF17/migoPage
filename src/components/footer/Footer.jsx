import migo from "/migo.png?url";
import logo from "/logo.svg?url";

export default function Footer() {
  return (
    <>
      <div className="bg-migonegro flex text-white items-center justify-center space-x-20">
        <p>© 2024 Migo Digital. Todos los derechos reservados.</p>
        <img src={migo} alt="" className="w-16" />
      </div>
    </>
  );
}
