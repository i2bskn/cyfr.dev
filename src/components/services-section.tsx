const services = [
  {
    title: "Full-stack Development",
    description:
      "Building web applications end-to-end, from backend APIs to polished frontends. I handle the entire stack so you get a cohesive product, fast.",
  },
  {
    title: "API Design & Integration",
    description:
      "Designing clean, performant APIs in Go. From third-party integrations to custom backends, I build reliable systems that just work.",
  },
  {
    title: "Mobile App Development",
    description:
      "Cross-platform iOS and Android apps using React Native. Shared codebase with your web product for efficient development and consistent experience.",
  },
];

export function ServicesSection() {
  return (
    <section id="services" className="border-t border-border px-6 py-20 md:px-12 md:py-28">
      <div className="mx-auto grid max-w-6xl gap-12 md:grid-cols-[200px_1fr] md:gap-20">
        <div>
          <p className="text-xs tracking-[0.3em] text-gold">WHAT I CAN DO</p>
        </div>
        <div className="flex flex-col gap-14">
          {services.map((service) => (
            <div key={service.title}>
              <h3 className="mb-3 text-xl font-semibold text-white md:text-2xl">
                {service.title}
              </h3>
              <p className="max-w-xl leading-relaxed text-muted">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
