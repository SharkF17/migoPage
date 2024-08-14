import Navbar from "../../components/header/Navbar";
import marketing from "/marketing.jpg";
import services from "/services.jpg";

export default function Servicios() {
  return (
    <>
      <Navbar />
      <div className="min-h-screen">
        <section className="bg-azulin/90 flex min-h-screen flex-row px-5 py-10 text-rosin">
          <div className="m-10 w-1/2 space-y-10">
            <h2>Servicios</h2>
          </div>
          <img
            src={services}
            alt=""
            className="min-h-full w-1/2 rounded-3xl object-cover"
          />
        </section>
      </div>
    </>
  );
}
