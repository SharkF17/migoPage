import Navbar from "../../components/header/Navbar";
/*import marketing from "/marketing.jpg";*/
import services from "/services.jpg";

export default function Servicios() {
  return (
    <>
      <Navbar />
      <div className="section md:px-10 space-y-10">
        <h2 className="section-title md:text-left md:text-5xl">Servicios</h2> 
        <section className="">
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
