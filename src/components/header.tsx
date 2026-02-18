"use client";

import Image from "next/image";
import { useState } from "react";

const navItems = [
  { label: "SERVICES", href: "#services" },
  { label: "EXPERTISE", href: "#expertise" },
  { label: "CONTACT", href: "#contact" },
];

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-sm">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5 md:px-12">
        <a href="/" className="flex items-center">
          <Image src="/images/logo.svg" alt="Cyfr logo" width={120} height={24} />
        </a>

        {/* Desktop nav */}
        <nav className="hidden gap-8 md:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-xs tracking-[0.2em] text-muted transition-colors hover:text-white"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Mobile hamburger */}
        <button
          className="flex flex-col gap-1.5 md:hidden"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          <span
            className={`block h-px w-5 bg-white transition-transform ${isOpen ? "translate-y-[3.5px] rotate-45" : ""}`}
          />
          <span
            className={`block h-px w-5 bg-white transition-opacity ${isOpen ? "opacity-0" : ""}`}
          />
          <span
            className={`block h-px w-5 bg-white transition-transform ${isOpen ? "-translate-y-[3.5px] -rotate-45" : ""}`}
          />
        </button>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <nav className="flex flex-col gap-4 border-t border-border px-6 py-6 md:hidden">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-xs tracking-[0.2em] text-muted transition-colors hover:text-white"
              onClick={() => setIsOpen(false)}
            >
              {item.label}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
}
