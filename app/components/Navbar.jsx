"use client";

import Image from "next/image";

export default function Navbar() {
  return (
    <nav
      id="site-nav"
      className="fixed inset-x-0 top-0 z-50 text-white transition-colors duration-300"
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6 md:h-[72px]">
        <a href="#home" className="flex items-center gap-3">
          <Image
            src="/media/container.png"
            alt="EXPRESS Logo"
            width={40}
            height={40}
            className="h-9 w-auto rounded-lg bg-white/95 p-1 md:h-10"
          />
          <span className="text-lg font-extrabold tracking-tight md:text-xl">
            EXPRESS
          </span>
        </a>

        <div className="hidden items-center gap-8 lg:flex">
          <a
            href="#about"
            className="nav-link text-sm font-medium opacity-80 transition hover:opacity-100"
          >
            About
          </a>
          <a
            href="#services"
            className="nav-link text-sm font-medium opacity-80 transition hover:opacity-100"
          >
            Services
          </a>
          <a
            href="#advantages"
            className="nav-link text-sm font-medium opacity-80 transition hover:opacity-100"
          >
            Advantages
          </a>
          <a
            href="#process"
            className="nav-link text-sm font-medium opacity-80 transition hover:opacity-100"
          >
            Process
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-full bg-brand px-5 py-2.5 text-sm font-medium text-white transition hover:bg-brand-dark active:scale-[0.98]"
          >
            Contact Us
          </a>
        </div>

        <button
          id="menu-btn"
          aria-label="Open menu"
          aria-expanded="false"
          className="grid size-11 place-items-center rounded-full text-2xl lg:hidden"
        >
          <i className="ph ph-list" id="icon-open" />
          <i className="ph ph-x hidden" id="icon-close" />
        </button>
      </div>
    </nav>
  );
}
