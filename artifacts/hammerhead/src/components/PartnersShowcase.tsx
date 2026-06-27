import teamPhoto from "@assets/WhatsApp_Image_2025-06-13_at_20.11.20_1782231146053_1782316997099.jpeg";
import trackPhoto1 from "@assets/OMR05105_1782231093659_1782316997099.JPG";
import trackPhoto2 from "@assets/OMR05412_1782231091330_1782316997099.JPG";
import sem2021Photo from "@assets/1st_poition_SEM_2021_1782320797278.jpeg";
import latestPhoto from "@assets/WhatsApp_Image_2026-06-23_at_5.14.37_PM_1782320810993.jpeg";
import heroBg from "@assets/WhatsApp_Image_2025-10-14_at_12.59.14_PM_1782231125316_1782318583069.jpeg";

const partners = [
  {
    name: "GIKI",
    subtitle: "GIK Institute",
    description:
      "Ghulam Ishaq Khan Institute of Engineering Sciences & Technology",
    accent: "border-white/20",
    logoClass: "text-white font-rajdhani text-5xl font-black tracking-tight",
  },
  {
    name: "Shell",
    subtitle: "Shell",
    description: "Eco-Marathon Official Partner & Competition Host",
    accent: "border-[#FBCE07]/40",
    logoClass: "text-[#FBCE07] font-rajdhani text-5xl font-black italic",
  },
  {
    name: "Shell",
    subtitle: "Shell",
    description: "Eco-Marathon Official Partner & Competition Host",
    accent: "border-[#FBCE07]/40",
    logoClass: "text-[#FBCE07] font-rajdhani text-5xl font-black italic",
  },
  {
    name: "Shell",
    subtitle: "Shell",
    description: "Eco-Marathon Official Partner & Competition Host",
    accent: "border-[#FBCE07]/40",
    logoClass: "text-[#FBCE07] font-rajdhani text-5xl font-black italic",
  },
  {
    name: "Shell",
    subtitle: "Shell",
    description: "Eco-Marathon Official Partner & Competition Host",
    accent: "border-[#FBCE07]/40",
    logoClass: "text-[#FBCE07] font-rajdhani text-5xl font-black italic",
  },
  {
    name: "Shell",
    subtitle: "Shell",
    description: "Eco-Marathon Official Partner & Competition Host",
    accent: "border-[#FBCE07]/40",
    logoClass: "text-[#FBCE07] font-rajdhani text-5xl font-black italic",
  },
  {
    name: "Shell",
    subtitle: "Shell",
    description: "Eco-Marathon Official Partner & Competition Host",
    accent: "border-[#FBCE07]/40",
    logoClass: "text-[#FBCE07] font-rajdhani text-5xl font-black italic",
  },
  {
    name: "Your Brand",
    subtitle: "+ Your Brand",
    description:
      "Become a sponsor and support Pakistan's brightest engineering talent",
    accent: "border-primary/40",
    logoClass: "text-primary font-rajdhani text-4xl font-black",
  },
];

function PartnerCard({
  partner,
  className = "",
}: {
  partner: (typeof partners)[0];
  className?: string;
}) {
  return (
    <div
      className={`flex flex-col justify-between rounded-md border bg-black/60 backdrop-blur-sm p-8 ${partner.accent} ${className}`}
    >
      <div>
        <p className={partner.logoClass}>
          {partner.name === "Your Brand" ? "+" : partner.name}
        </p>
        {partner.name === "Your Brand" && (
          <p className="text-primary font-rajdhani text-3xl font-black mt-1">
            Your Brand
          </p>
        )}
        <p className="text-white/50 text-xs font-mono uppercase tracking-widest mt-4">
          {partner.subtitle}
        </p>
      </div>
      <p className="text-white/70 text-sm mt-6 leading-relaxed">
        {partner.description}
      </p>
    </div>
  );
}

const galleryImages = {
  left: [teamPhoto, trackPhoto1, sem2021Photo, trackPhoto2, latestPhoto],
  right: [sem2021Photo, trackPhoto2, teamPhoto, heroBg, trackPhoto1],
};

export function PartnersShowcase() {
  return (
    <section className="relative z-20 bg-slate-950 text-white">
      <div className="text-white h-screen w-full bg-slate-950 grid place-content-center sticky top-0 z-10">
        <div className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:54px_54px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
        <div className="relative z-10 text-center px-8">
          <p className="text-primary text-xs font-bold uppercase tracking-[0.3em] mb-4">
            Partners
          </p>
          <h2 className="font-rajdhani text-5xl md:text-7xl font-black uppercase tracking-tight leading-[120%]">
            Supported By
          </h2>
          <p className="mt-6 text-white/50 max-w-xl mx-auto">
            Our journey is made possible through the support of GIK Institute and
            our valued sponsors.
          </p>
          <p className="mt-8 text-white/30 text-sm uppercase tracking-widest">
            Scroll down ↓
          </p>
        </div>
      </div>

      <div className="text-white w-full bg-slate-950 relative z-20">
        <div className="grid grid-cols-12 gap-2 px-2">
          <div className="grid gap-2 col-span-4">
            {galleryImages.left.map((src, i) => (
              <figure key={i} className="w-full">
                <img
                  src={src}
                  alt=""
                  className="transition-all duration-300 w-full h-96 align-bottom object-cover rounded-md opacity-60"
                />
              </figure>
            ))}
          </div>

          <div className="sticky top-0 h-screen w-full col-span-4 gap-2 grid grid-rows-3 py-2">
            {partners.map((partner) => (
              <PartnerCard
                key={partner.name}
                partner={partner}
                className="h-full min-h-0"
              />
            ))}
          </div>

          <div className="grid gap-2 col-span-4">
            {galleryImages.right.map((src, i) => (
              <figure key={i} className="w-full">
                <img
                  src={src}
                  alt=""
                  className="transition-all duration-300 w-full h-96 align-bottom object-cover rounded-md opacity-60"
                />
              </figure>
            ))}
          </div>
        </div>
      </div>

      <div className="group bg-slate-950 relative z-20">
        <h3 className="text-[12vw] translate-y-16 leading-[100%] uppercase font-rajdhani font-black text-center bg-gradient-to-r from-gray-400 to-gray-800 bg-clip-text text-transparent">
          HAMMERHEAD
        </h3>
        <div className="bg-black h-32 relative z-10" />
      </div>
    </section>
  );
}
