export function HeroSection() {
  return (
    <section className="relative overflow-hidden px-6 pt-28 pb-20 md:px-12 md:pt-36 md:pb-28">
      <div className="relative mx-auto max-w-6xl">
        {/* Background decorative "KI" text */}
        <div
          className="pointer-events-none absolute top-1/2 right-0 -translate-y-1/2 select-none font-serif leading-none font-bold text-white/[0.04]"
          aria-hidden="true"
          style={{ fontSize: "clamp(16rem, 40vw, 32rem)" }}
        >
          KI
        </div>

        {/* Decorative frame lines */}
        <div
          className="pointer-events-none absolute inset-0"
          aria-hidden="true"
        >
          {/* Top-right corner */}
          <div className="absolute top-0 right-0 h-32 w-px bg-white/15 md:h-40" />
          <div className="absolute top-0 right-0 h-px w-32 bg-white/15 md:w-40" />
          {/* Bottom-left corner */}
          <div className="absolute bottom-0 left-0 h-32 w-px bg-white/15 md:h-40" />
          <div className="absolute bottom-0 left-0 h-px w-32 bg-white/15 md:w-40" />
        </div>

        {/* Vertical text on right side */}
        <div
          className="absolute top-1/2 right-4 hidden -translate-y-1/2 md:block"
          aria-hidden="true"
        >
          <p
            className="text-[10px] tracking-[0.3em] text-muted/50"
            style={{ writingMode: "vertical-rl" }}
          >
            DESIGN &amp; DEVELOPMENT
          </p>
        </div>

        {/* Main content */}
        <div className="relative z-10 py-8 md:py-16">
          <p className="mb-4 text-xs tracking-[0.3em] text-gold">
            SOFTWARE ENGINEER
          </p>
          <h1 className="text-6xl leading-[0.95] font-bold tracking-tight text-white sm:text-7xl md:text-8xl lg:text-9xl">
            KEN
            <br />
            IIBOSHI
          </h1>

          <div className="mt-12 border-l-2 border-gold/60 pl-6 md:mt-16">
            <p className="font-serif text-xl text-muted italic md:text-2xl">
              &ldquo;Full stack, small team, fast delivery.&rdquo;
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
