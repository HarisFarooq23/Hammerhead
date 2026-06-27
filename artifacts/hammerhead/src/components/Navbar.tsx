import React, { useState, useEffect, useRef } from "react";
import logoImg from "@assets/logo_1782316914888.png";
import { CONTACT_LINK } from "@/components/HeroWithMarquee";

const AnimatedNavLink = ({
  href,
  children,
  onClick,
}: {
  href: string;
  children: React.ReactNode;
  onClick?: () => void;
}) => {
  return (
    <a
      href={href}
      onClick={onClick}
      className="group relative inline-block overflow-hidden h-5 flex items-center text-sm"
    >
      <div className="flex flex-col transition-transform duration-[400ms] ease-out transform group-hover:-translate-y-1/2">
        <span className="text-gray-300">{children}</span>
        <span className="text-white">{children}</span>
      </div>
    </a>
  );
};

const navLinksData = [
  { label: "Story", href: "#story" },
  { label: "Partners", href: "#partners" },
  { label: "Sponsor", href: "#sponsor" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [headerShapeClass, setHeaderShapeClass] = useState("rounded-full");
  const shapeTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const closeMenu = () => setIsOpen(false);

  const toggleMenu = () => {
    setIsOpen((open) => !open);
  };

  useEffect(() => {
    if (shapeTimeoutRef.current) {
      clearTimeout(shapeTimeoutRef.current);
    }

    if (isOpen) {
      setHeaderShapeClass("rounded-xl");
    } else {
      shapeTimeoutRef.current = setTimeout(() => {
        setHeaderShapeClass("rounded-full");
      }, 300);
    }

    return () => {
      if (shapeTimeoutRef.current) {
        clearTimeout(shapeTimeoutRef.current);
      }
    };
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen) return;
    const onResize = () => {
      if (window.innerWidth >= 640) setIsOpen(false);
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, [isOpen]);

  const logoElement = (
    <a href="#home" className="flex items-center gap-2 shrink-0" onClick={closeMenu}>
      <img
        src={logoImg}
        alt="Team Hammerhead GIKI"
        className="h-7 w-7 sm:h-8 sm:w-8 object-contain"
      />
    </a>
  );

  const instagramButton = (
    <a
      href="https://instagram.com/hammerheadgiki"
      target="_blank"
      rel="noopener noreferrer"
      className="px-4 py-2 sm:px-3 text-xs sm:text-sm border border-[#333] bg-[rgba(31,31,31,0.62)] text-gray-300 rounded-full hover:border-white/50 hover:text-white transition-colors duration-200 w-full sm:w-auto text-center"
    >
      Instagram
    </a>
  );

  const contactButton = (
    <div className="relative group w-full sm:w-auto">
      <div
        className="absolute inset-0 -m-2 rounded-full hidden sm:block bg-primary/30 opacity-40 filter blur-lg pointer-events-none transition-all duration-300 ease-out group-hover:opacity-60 group-hover:blur-xl group-hover:-m-3"
      />
      <a
        href={CONTACT_LINK}
        target="_blank"
        rel="noopener noreferrer"
        className="relative z-10 block px-4 py-2 sm:px-3 text-xs sm:text-sm font-semibold text-black bg-gradient-to-br from-gray-100 to-gray-300 rounded-full hover:from-gray-200 hover:to-gray-400 transition-all duration-200 w-full sm:w-auto text-center"
      >
        Contact
      </a>
    </div>
  );

  return (
    <header
      className={`fixed top-4 sm:top-6 left-1/2 -translate-x-1/2 z-50
                  flex flex-col items-center
                  pl-4 pr-4 sm:pl-6 sm:pr-6 py-3 backdrop-blur-sm
                  ${headerShapeClass}
                  border border-[#333] bg-[#1f1f1f57]
                  w-[calc(100%-1.5rem)] sm:w-auto max-w-[calc(100vw-1.5rem)]
                  transition-[border-radius] duration-0 ease-in-out`}
    >
      <div className="flex items-center justify-between w-full gap-x-4 sm:gap-x-8 min-w-0">
        <div className="flex items-center shrink-0">{logoElement}</div>

        <nav className="hidden sm:flex items-center space-x-4 md:space-x-6 text-sm">
          {navLinksData.map((link) => (
            <AnimatedNavLink key={link.href} href={link.href}>
              {link.label}
            </AnimatedNavLink>
          ))}
          <AnimatedNavLink href="#contact">Contact</AnimatedNavLink>
        </nav>

        <div className="hidden sm:flex items-center gap-2 md:gap-3 shrink-0">
          {instagramButton}
          {contactButton}
        </div>

        <button
          type="button"
          className="sm:hidden flex items-center justify-center w-8 h-8 text-gray-300 focus:outline-none shrink-0"
          onClick={toggleMenu}
          aria-label={isOpen ? "Close Menu" : "Open Menu"}
          aria-expanded={isOpen}
        >
          {isOpen ? (
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              aria-hidden
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              aria-hidden
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </button>
      </div>

      <div
        className={`sm:hidden flex flex-col items-center w-full transition-all ease-in-out duration-300 overflow-hidden
                    ${isOpen ? "max-h-[1000px] opacity-100 pt-4" : "max-h-0 opacity-0 pt-0 pointer-events-none"}`}
      >
        <nav className="flex flex-col items-center space-y-4 text-base w-full">
          {[...navLinksData, { label: "Contact", href: "#contact" }].map(
            (link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={closeMenu}
                className="text-gray-300 hover:text-white transition-colors w-full text-center py-1"
              >
                {link.label}
              </a>
            ),
          )}
        </nav>
        <div className="flex flex-col items-stretch space-y-3 mt-4 w-full max-w-xs">
          {instagramButton}
          {contactButton}
        </div>
      </div>
    </header>
  );
}
