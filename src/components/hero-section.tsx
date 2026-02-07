export function HeroSection() {
  return (
    <section className="relative px-6 pt-32 pb-20 md:px-12 md:pt-40 md:pb-28">
      <div className="mx-auto max-w-6xl">
        <p className="mb-4 text-xs tracking-[0.3em] text-gold">
          SOFTWARE ENGINEER
        </p>
        <h1 className="text-6xl leading-[0.95] font-bold tracking-tight text-white sm:text-7xl md:text-8xl lg:text-9xl">
          KEN
          <br />
          IIBOSHI
        </h1>

        <div className="mt-16 border-l-2 border-gold/60 pl-6 md:mt-24">
          <p className="font-serif text-xl text-muted italic md:text-2xl">
            &ldquo;Full stack, small team, fast delivery.&rdquo;
          </p>
        </div>
      </div>
    </section>
  );
}
