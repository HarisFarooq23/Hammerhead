import { cn } from "@/lib/utils";
import { ReactNode, useState } from "react";
import teamPhoto from "@assets/WhatsApp_Image_2025-06-13_at_20.11.20_1782231146053_1782316997099.jpeg";
import trackPhoto1 from "@assets/OMR05105_1782231093659_1782316997099.JPG";
import trackPhoto2 from "@assets/OMR05412_1782231091330_1782316997099.JPG";
import sem2021Photo from "@assets/1st_poition_SEM_2021_1782320797278.jpeg";
import latestPhoto from "@assets/WhatsApp_Image_2026-06-23_at_5.14.37_PM_1782320810993.jpeg";
import heroBg from "@assets/WhatsApp_Image_2025-10-14_at_12.59.14_PM_1782231125316_1782318583069.jpeg";
import imageExtra1 from "@assets/OMR05105_1782231093659_1782320797279.JPG";
import imageExtra2 from "@assets/OMR05412_1782231091330_1782320797280.JPG";

export const CONTACT_LINK = "https://example.com/contact";

interface MarqueeProps {
  children: ReactNode;
  pauseOnHover?: boolean;
  reverse?: boolean;
  className?: string;
  speed?: number;
}

function Marquee({
  children,
  pauseOnHover = false,
  reverse = false,
  className,
  speed = 40,
}: MarqueeProps) {
  return (
    <div
      className={cn(
        "group flex overflow-hidden [--gap:1rem] [gap:var(--gap)]",
        className,
      )}
      style={{ "--duration": `${speed}s` } as React.CSSProperties}
    >
      <div
        className={cn(
          "flex min-w-full shrink-0 items-center justify-around gap-[var(--gap)] animate-marquee",
          reverse && "[animation-direction:reverse]",
          pauseOnHover && "group-hover:[animation-play-state:paused]",
        )}
      >
        {children}
      </div>
      <div
        className={cn(
          "flex min-w-full shrink-0 items-center justify-around gap-[var(--gap)] animate-marquee",
          reverse && "[animation-direction:reverse]",
          pauseOnHover && "group-hover:[animation-play-state:paused]",
        )}
        aria-hidden="true"
      >
        {children}
      </div>
    </div>
  );
}

const images = [teamPhoto, trackPhoto1, sem2021Photo, latestPhoto];
const images2 = [trackPhoto2, heroBg, imageExtra1, imageExtra2];

function ScrambleButton({ href, label }: { href: string; label: string }) {
  const [displayText, setDisplayText] = useState(label);
  const [isScrambling, setIsScrambling] = useState(false);
  const chars =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*";

  const scramble = () => {
    if (isScrambling) return;
    setIsScrambling(true);

    let iteration = 0;
    const maxIterations = label.length;

    const interval = setInterval(() => {
      setDisplayText(
        label
          .split("")
          .map((letter, index) => {
            if (index < iteration) return label[index];
            return chars[Math.floor(Math.random() * chars.length)];
          })
          .join(""),
      );

      if (iteration >= maxIterations) {
        clearInterval(interval);
        setDisplayText(label);
        setIsScrambling(false);
      }

      iteration += 1 / 3;
    }, 30);
  };

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      onMouseEnter={scramble}
      className="inline-block px-8 py-3 bg-primary text-primary-foreground rounded-full font-semibold hover:bg-primary/90 transition-colors uppercase tracking-widest text-sm"
    >
      {displayText}
    </a>
  );
}

export function HeroWithMarquee() {
  return (
    <section
      id="contact"
      className="min-h-screen bg-black text-foreground flex items-center overflow-hidden relative z-20 scroll-mt-24 py-16 sm:py-20 lg:py-0"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-12 max-w-7xl w-full">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-12 items-center">
          <div className="space-y-4 sm:space-y-6 order-2 lg:order-1">
            <p className="text-primary text-xs font-bold uppercase tracking-[0.3em]">
              Contact
            </p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-white font-rajdhani uppercase">
              Get in Touch
            </h2>
            <div className="space-y-1 text-muted-foreground text-base sm:text-lg">
              <p>Team Hammerhead GIKI</p>
              <p>Est. 2009 — Swabi, Pakistan</p>
            </div>
            <p className="text-gray-400 max-w-md leading-relaxed text-sm sm:text-base">
              Sponsorships, media inquiries, and collaborations — reach out and
              join Pakistan&apos;s longest-running student EV team.
            </p>
            <ScrambleButton href={CONTACT_LINK} label="Get in Touch" />
          </div>

          <div className="space-y-3 sm:space-y-4 overflow-hidden order-1 lg:order-2 -mx-4 sm:mx-0">
            <Marquee speed={30} reverse className="[--gap:0.75rem] sm:[--gap:1rem]">
              {images.map((src, idx) => (
                <div
                  key={idx}
                  className="w-28 h-28 sm:w-36 sm:h-36 md:w-44 md:h-44 lg:w-48 lg:h-48 rounded-xl sm:rounded-2xl overflow-hidden shrink-0"
                >
                  <img
                    src={src}
                    alt={`Team moment ${idx + 1}`}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </Marquee>
            <Marquee speed={30} className="[--gap:0.75rem] sm:[--gap:1rem]">
              {images2.map((src, idx) => (
                <div
                  key={idx}
                  className="w-28 h-28 sm:w-36 sm:h-36 md:w-44 md:h-44 lg:w-48 lg:h-48 rounded-xl sm:rounded-2xl overflow-hidden shrink-0"
                >
                  <img
                    src={src}
                    alt={`Team moment ${idx + 5}`}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </Marquee>
          </div>
        </div>
      </div>
    </section>
  );
}
