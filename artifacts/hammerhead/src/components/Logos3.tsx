import AutoScroll from "embla-carousel-auto-scroll";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import logoImg from "@assets/logo_1782316914888.png";
import img1 from "@assets/Airblue-Logo.wine.svg";
import img2 from "@assets/image-removebg-preview (6).png";
import img3 from "@assets/redbull-logo-svgrepo-com (1).svg";
import img4 from "@assets/image-removebg-preview (4).png";
import img5 from "@assets/Screenshot 2026-06-28 204737.png";
import img6 from "@assets/image-removebg-preview (5).png";
import img7 from "@assets/Screenshot 2026-06-28 211200.png";

interface Logo {
  id: string;
  description: string;
  image: string;
  className?: string;
}

interface Logos3Props {
  heading?: string;
  logos?: Logo[];
  className?: string;
}

const gikiLogo =
  "data:image/svg+xml," +
  encodeURIComponent(
    `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 48"><text x="0" y="36" font-family="Arial Black, sans-serif" font-size="32" font-weight="900" fill="white">GIKI</text></svg>`,
  );

const shellLogo =
  "data:image/svg+xml," +
  encodeURIComponent(
    `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 48"><text x="0" y="36" font-family="Arial, sans-serif" font-size="32" font-weight="700" font-style="italic" fill="#FBCE07">Shell</text></svg>`,
  );

const yourBrandLogo =
  "data:image/svg+xml," +
  encodeURIComponent(
    `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 260 48"><text x="0" y="34" font-family="Arial, sans-serif" font-size="22" font-weight="700" fill="#FF5E1A">+ Your Brand</text></svg>`,
  );

const defaultLogos: Logo[] = [
  
 {
    id: "airblue",
    description: "Team Hammerhead GIKI",
    image: img1,
    className: "h-12 w-auto",
  },
 {
    id: "levis",
    description: "Team Hammerhead GIKI",
    image: img2,
    className: "h-12 w-auto",
  },
 {
    id: "redbull",
    description: "Team Hammerhead GIKI",
    image: img3,
    className: "h-12 w-auto",
  },
 {
    id: "toyota",
    description: "Team Hammerhead GIKI",
    image: img4,
    className: "h-12 w-auto",
  },
 {
    id: "indus",
    description: "Team Hammerhead GIKI",
    image: img5,
    className: "h-12 w-auto",
  },
 {
    id: "hancook",
    description: "Team Hammerhead GIKI",
    image: img6,
    className: "h-12 w-auto",
  },
 {
    id: "hum",
    description: "Team Hammerhead GIKI",
    image: img7,
    className: "h-12 w-auto",
  },
  
];

const Logos3 = ({
  heading = "Supported By",
  logos = defaultLogos,
  className,
}: Logos3Props) => {
  return (
    <section className={`py-16 sm:py-20 md:py-24 bg-[#F2F0EB] relative z-20 scroll-mt-24 ${className ?? ""}`} id="partners">
      <div className="container flex flex-col items-center text-center mx-auto px-6">
          
            <h2 className="text-[clamp(3rem,10vw,7rem)] font-black uppercase tracking-tighter leading-[0.9] text-black">
              Our Partners 
            </h2>
          <p className="text-gray-400 text-base md:text-lg leading-relaxed max-w-md">
                      Our valued sponsors over the past.
            </p>
      </div>
      <div className="pt-10 md:pt-16 lg:pt-20">
        <div className="relative mx-auto flex items-center justify-center lg:max-w-5xl">
          <Carousel
            opts={{ loop: true , dragFree: false, watchDrag: false, }}
            plugins={[AutoScroll({ playOnInit: true, speed: 1 ,stopOnInteraction: false, stopOnMouseEnter: false,}),]}
          >
            <CarouselContent className="ml-0">
              {logos.map((logo) => (
                <CarouselItem
                  key={logo.id}
                  className="flex basis-1/3 justify-center pl-0 sm:basis-1/4 md:basis-1/5 lg:basis-1/6"
                >
                  <div className="mx-10 flex shrink-0 items-center justify-center">
                    <img
                      src={logo.image}
                      alt={logo.description}
                      className={logo.className}
                      draggable={false}
                    />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
          <div className="absolute inset-y-0 left-0 w-12 bg-gradient-to-r from-[#F2F0EB] to-transparent pointer-events-none" />
          <div className="absolute inset-y-0 right-0 w-12 bg-gradient-to-l from-[#F2F0EB] to-transparent pointer-events-none" />
        </div>
      </div>
    </section>
  );
};

export { Logos3 };
