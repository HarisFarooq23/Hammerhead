import { ContainerScroll } from "@/components/ContainerScroll";
import teamPhoto from "@assets/WhatsApp_Image_2025-06-13_at_20.11.20_1782231146053_1782316997099.jpeg";

export const INSTAGRAM_LINK = "https://instagram.com/hammerheadgiki";
export const CONTACT_LINK = "#contact";

export function ContactScrollSection() {
  return (
    <section id="contact" className="relative z-20 bg-[#F2F0EB] scroll-mt-24">
      <ContainerScroll
        titleComponent={
          <div className="space-y-4 px-4">
            <p className="text-primary text-xs font-medium uppercase tracking-[0.3em]">
              Collaborate
            </p>
            <h2 className="text-3xl md:text-5xl font-light text-black tracking-tight leading-tight">
              Let&apos;s collaborate
              <br />
              <span className="font-normal text-black/80">and build together.</span>
            </h2>
            <p className="text-gray-400 text-sm md:text-base max-w-lg mx-auto font-light leading-relaxed">
              Sponsorships, media inquiries, and partnerships — join Pakistan&apos;s
              longest-running student EV team on the global stage.
            </p>
            <a
              href={INSTAGRAM_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-4 px-8 py-3 text-sm font-medium tracking-wide text-white bg-black rounded-full hover:bg-orange/90 transition-colors"
            >
              Follow on Instagram
            </a>
          </div>
        }
      >
        <img
          src={teamPhoto}
          alt="Team Hammerhead GIKI"
          className="h-full w-full object-cover rounded-xl"
          draggable={false}
        />
      </ContainerScroll>
    </section>
  );
}
