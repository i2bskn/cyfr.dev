const expertise = {
  languages: ["Go", "TypeScript"],
  frameworks: ["Next.js", "React", "React Native"],
  tools: ["AWS", "Vercel", "PostgreSQL"],
};

export function ExpertiseSection() {
  return (
    <section id="expertise" className="border-t border-border px-6 py-20 md:px-12 md:py-24">
      <div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-[200px_1fr] md:gap-20">
        <div>
          <p className="text-xs tracking-[0.3em] text-brand">
            TECHNICAL EXPERTISE
          </p>
        </div>
        <div className="grid grid-cols-2 gap-10 sm:grid-cols-3">
          <div>
            <h4 className="mb-4 text-xs font-semibold tracking-[0.15em] text-white/70">
              LANGUAGES
            </h4>
            <ul className="flex flex-col gap-2">
              {expertise.languages.map((item) => (
                <li key={item} className="text-sm text-muted">
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="mb-4 text-xs font-semibold tracking-[0.15em] text-white/70">
              FRAMEWORKS
            </h4>
            <ul className="flex flex-col gap-2">
              {expertise.frameworks.map((item) => (
                <li key={item} className="text-sm text-muted">
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="mb-4 text-xs font-semibold tracking-[0.15em] text-white/70">
              TOOLS
            </h4>
            <ul className="flex flex-col gap-2">
              {expertise.tools.map((item) => (
                <li key={item} className="text-sm text-muted">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
