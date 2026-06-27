import { LayeredText } from "@/components/LayeredText";

const SPONSORSHIP_LETTER_URL = "https://example.com/sponsorship-letter";

const sponsorLines = [
  { top: "\u00A0", bottom: "Contact" },
  { top: "Contact", bottom: "SUPPORT" },
  { top: "SUPPORT", bottom: "INNOVATE" },
  { top: "INNOVATE", bottom: "COLLAB" },
  { top: "COLLAB", bottom: "CONNECT" },
  { top: "CONNECT", bottom: "\u00A0" },
];

export function SponsorUs() {
  return (
    <section className="relative z-20 bg-[#FF5E1A] py-16 sm:py-20 overflow-hidden scroll-mt-24" id="sponsor">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <p className="text-black/50 text-xs font-bold uppercase tracking-[0.3em] mb-4">
          Partner With Us
        </p>
        <h2 className="font-rajdhani text-3xl sm:text-4xl md:text-6xl font-black uppercase text-black mb-4 sm:mb-6 px-4">
          Sponsor Us
        </h2>
        <p className="text-black/70 max-w-2xl mx-auto mb-8 sm:mb-10 text-base sm:text-lg px-4">
          Fuel Pakistan&apos;s brightest engineering talent. Your support powers our journey from GIKI to the global Shell Eco-Marathon stage.
        </p>
      </div>

      <LayeredText
        lines={sponsorLines}
        fontSize="clamp(48px, 8vw, 96px)"
        fontSizeMd="32px"
        lineHeight={70}
        lineHeightMd={40}
        className="text-black"
      />

      <div className="flex justify-center pb-16 px-6">
        <a
          href={SPONSORSHIP_LETTER_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center px-10 py-4 text-sm font-bold tracking-widest text-white bg-black hover:bg-black/80 rounded-full transition-all hover:scale-105 uppercase"
        >
          View Sponsorship Letter →
        </a>
      </div>
    </section>
  );
}
