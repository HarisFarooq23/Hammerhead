import React from "react";
import logoImg from "@assets/logo_1782316914888.png";
import { CONTACT_LINK } from "@/components/ContactScrollSection";

const AnimatedNavLink = ({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) => {
  return (
    <a
      href={href}
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
  const logoElement = (
    <a href="#home" className="flex items-center gap-2 shrink-0">
      <img
        src={logoImg}
        alt="Team Hammerhead GIKI"
        className="h-8 w-8 object-contain"
      />
    </a>
  );

  const instagramButton = (
    <a
      href="https://instagram.com/hammerheadgiki"
      target="_blank"
      rel="noopener noreferrer"
      className="px-3 py-2 text-sm border border-[#333] bg-[rgba(31,31,31,0.62)] text-gray-300 rounded-full hover:border-white/50 hover:text-white transition-colors duration-200 text-center"
    >
      Instagram
    </a>
  );

  const contactButton = (
    <div className="relative group">
      <div className="absolute inset-0 -m-2 rounded-full bg-primary/30 opacity-40 filter blur-lg pointer-events-none transition-all duration-300 ease-out group-hover:opacity-60 group-hover:blur-xl group-hover:-m-3" />
      <a
        href={CONTACT_LINK}
        className="relative z-10 block px-3 py-2 text-sm font-semibold text-black bg-gradient-to-br from-gray-100 to-gray-300 rounded-full hover:from-gray-200 hover:to-gray-400 transition-all duration-200 text-center"
      >
        Mail Us
      </a>
    </div>
  );

  return (
    <header
      className="hidden md:flex fixed top-6 left-1/2 -translate-x-1/2 z-50
                  flex-col items-center
                  pl-6 pr-6 py-3 backdrop-blur-sm rounded-full
                  border border-[#333] bg-[#1f1f1f57]
                  w-auto max-w-[calc(100vw-1.5rem)]"
    >
      <div className="flex items-center justify-between w-full gap-x-8 min-w-0">
        <div className="flex items-center shrink-0">{logoElement}</div>

        <nav className="flex items-center space-x-4 md:space-x-6 text-sm">
          {navLinksData.map((link) => (
            <AnimatedNavLink key={link.href} href={link.href}>
              {link.label}
            </AnimatedNavLink>
          ))}
          <AnimatedNavLink href="#contact">Contact</AnimatedNavLink>
        </nav>

        <div className="flex items-center gap-2 md:gap-3 shrink-0">
          {instagramButton}
          {contactButton}
        </div>
      </div>
    </header>
  );
}
