export function Footer() {
  return (
    <footer className="px-6 py-10 md:px-12">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-1 text-xs text-muted">
        <p>&copy; {new Date().getFullYear()} KEN IIBOSHI</p>
        <p className="tracking-wider">TOKYO &rarr; GLOBAL</p>
      </div>
    </footer>
  );
}
