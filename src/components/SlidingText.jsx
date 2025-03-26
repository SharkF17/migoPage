const services = [
  "MKT Digital",
  "Página Web",
  "Redes Sociales",
  "Identidad Visual",
  "Transición Digital",
];

export default function SlidingText() {
  return (
    <div className="w-full h-auto overflow-hidden whitespace-nowrap">
      <div className="inline-block space-x-10 animate-scroll">
        {/* Duplicar los elementos para la animación continua */}
        {[...services, ...services].map((service, index) => (
          <div
            key={index}
            className="inline-block px-4 py-2 text-center rounded-md min-w-max shrink-0"
          >
            {service}
          </div>
        ))}
      </div>
    </div>
  );
}
