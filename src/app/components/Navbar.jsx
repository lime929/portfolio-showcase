"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const links = [
  { href: "/projects", label: "PROJECTS" },
  { href: "/about", label: "ABOUT" },
  { href: "/contact", label: "CONTACT" },
  { href: "#", label: "RESUME", external: true },
];

export default function Navbar() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  function getLinkClass(href, mobile = false) {
    const active = pathname === href;
    return `${mobile ? "block w-full text-left text-2xl py-2" : "border-b-2 text-3xl pb-1"} font-five tracking-widest font-semibold transition-colors duration-300 ease-in-out ${
      active
        ? "border-darkest-purple text-dark-grey"
        : "border-transparent text-dark-grey hover:text-darkest-purple hover:border-darkest-purple"
    }`;
  }

  return (
    <nav className="sticky top-0 z-50 border-b-2 border-dark-grey-800 bg-light-purple">
      <div className="px-4 lg:px-6">
        <div className="relative flex h-[75px] items-center justify-between">
          <div className="flex flex-1 items-center justify-start">
            <Link
              href="/"
              className="flex flex-shrink-0 items-center gap-2 transition hover:opacity-85"
            >
              <span className="scale-y-120 text-xl font-one tracking-widest text-dark-grey sm:text-2xl lg:mr-9 lg:text-3xl">
                LILIANA MENDEZ
              </span>
            </Link>
          </div>

          <span className="absolute left-1/2 hidden -translate-x-1/2 text-3xl font-five font-semibold tracking-widest text-dark-grey xl:block">
            WEB DEVELOPER
          </span>

          <div className="hidden min-[769px]:block">
            <div className="flex space-x-4 font-five tracking-widest lg:space-x-6">
              {links.map(({ href, label, external }) => (
                <Link
                  key={label}
                  href={href}
                  className={getLinkClass(href)}
                  {...(external
                    ? { rel: "noopener noreferrer", target: "_blank" }
                    : {})}
                >
                  {label}
                </Link>
              ))}
            </div>
          </div>

          <button
            type="button"
            className="flex h-11 w-11 items-center justify-center rounded-md text-dark-grey transition hover:bg-dark-purple min-[769px]:hidden"
            aria-label={
              menuOpen ? "Close navigation menu" : "Open navigation menu"
            }
            aria-expanded={menuOpen}
            aria-controls="mobile-navigation"
            onClick={() => setMenuOpen((open) => !open)}
          >
            <svg
              aria-hidden="true"
              viewBox="0 0 24 24"
              className="h-7 w-7"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeWidth="2"
            >
              {menuOpen ? (
                <path d="M6 6l12 12M18 6L6 18" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {menuOpen && (
          <div
            id="mobile-navigation"
            className="border-t-3 border-dark-grey/40 py-2 min-[769px]:hidden"
          >
            {links.map(({ href, label, external }) => (
              <Link
                key={label}
                href={href}
                className={getLinkClass(href, true)}
                {...(external
                  ? { rel: "noopener noreferrer", target: "_blank" }
                  : {})}
                onClick={() => setMenuOpen(false)}
              >
                {label}
              </Link>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
}
