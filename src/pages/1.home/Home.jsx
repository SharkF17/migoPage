import Navbar from "../../components/header/Navbar";
import Hero from "../../components/header/Hero";
import Servicios from "../../components/sections/Servicios";

export default function Home() {
  return (
    <>
      <div className="mb-4">
        <Navbar />
        <Hero />
      </div>

      <div className="my-2">
        <Servicios />
      </div>
    </>
  );
}
