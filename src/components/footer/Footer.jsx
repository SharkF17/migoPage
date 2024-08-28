import migo from "/migo.png?url";
import logo from "/logo.svg?url";

export default function Footer() {
  return (
    <>
      <div className="relative bottom-0 flex w-full flex-col items-center justify-center space-x-5 bg-migonegro text-white">
        <div className="flex w-full flex-row justify-around">
          <a href="/blog">Blog</a>
          <a href="/espacios">Espacios</a>
        </div>
        {/* Estilizar link para blog */}

        <p className="flex flex-row">
          Hecho con ❤️ desde México. Migo Digital 2024.
        </p>
      </div>
    </>
  );
}
