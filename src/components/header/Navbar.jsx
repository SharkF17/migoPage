import { IoMenu, IoClose } from "react-icons/io5";
import logo from "/logoconletras.png?url";

let menu;

function Opn() {
  menu = document.getElementById("menu");
  menu.classList.add("w-[100%]");
}

function Clse() {
  menu = document.getElementById("menu");
  menu.classList.remove("w-[100%]");
}

function Navbar() {
  return (
    <>
      <div
        className="fixed top-5 right-5 text-4xl text-black cursor-pointer"
        onClick={() => Opn()}
      >
        <IoMenu />
      </div>
      <div className="fixed top-5 left-5 h-9 text-black cursor-pointer">
        <img src={logo} className="h-full" alt="" />
      </div>
      <nav
        className="bg-white grid fixed w-[0] h-[100vh] place-content-center overflow-hidden duration-1000 text-nowrap z-[100]"
        id="menu"
      >
        <ul className="flex flex-col justify-center gap-y-10 text-black text-3xl overflow-hidden text-nowrap">
          <li className="hover:translate-y-[-5px] duration-500">
            <a href="/espacios" className="hover:textShadow">
              Servicios
            </a>
          </li>
          <li className="hover:translate-y-[-5px] duration-500">
            <a href="/arte" className="hover:textShadow">
              Acerca de
            </a>
          </li>
          <li className="hover:translate-y-[-5px] duration-500">
            <a href="/diseño" className="hover:textShadow">
              Contacto
            </a>
          </li>
          <li className="hover:translate-y-[-5px] duration-500">
            <a href="/diseño" className="hover:textShadow">
              Crear
            </a>
          </li>
        </ul>
        <div
          className="absolute top-5 right-5 text-4xl text-legivegold cursor-pointer duration-300 hover:rotate-90"
          onClick={() => Clse()}
        >
          <IoClose />
        </div>
      </nav>
    </>
  );
}

export default Navbar;
