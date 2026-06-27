import AutoScroll from "embla-carousel-auto-scroll";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import logoImg from "@assets/logo_1782316914888.png";

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
    id: "giki",
    description: "GIK Institute",
    image: gikiLogo,
    className: "h-8 w-auto",
  },
  {
    id: "shell",
    description: "Shell Eco-Marathon",
    image: shellLogo,
    className: "h-8 w-auto",
  },
  {
    id: "hammerhead",
    description: "Team Hammerhead GIKI",
    image: logoImg,
    className: "h-12 w-auto",
  },
  {
    id: "your-brand",
    description: "Become a Sponsor",
    image: yourBrandLogo,
    className: "h-7 w-auto",
  },
];

const Logos3 = ({
  heading = "Supported By",
  logos = defaultLogos,
  className,
}: Logos3Props) => {
  return (
    <section className={`py-16 sm:py-20 md:py-24 bg-neutral-950 relative z-20 scroll-mt-24 ${className ?? ""}`} id="partners">
      <div className="container flex flex-col items-center text-center mx-auto px-6">
        <p className="text-primary text-xs font-bold uppercase tracking-[0.3em] mb-4">
          Partners
        </p>
        <h2 className="my-4 text-2xl font-bold text-white font-rajdhani uppercase tracking-wider lg:text-4xl">
          {heading}
        </h2>
        <p className="text-white/50 max-w-xl text-sm">
          Our journey is made possible through the support of GIK Institute and
          our valued sponsors.
        </p>
      </div>
      <div className="pt-10 md:pt-16 lg:pt-20">
        <div className="relative mx-auto flex items-center justify-center lg:max-w-5xl">
          <Carousel
            opts={{ loop: true }}
            plugins={[AutoScroll({ playOnInit: true, speed: 1 })]}
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
                    />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
          <div className="absolute inset-y-0 left-0 w-12 bg-gradient-to-r from-neutral-950 to-transparent pointer-events-none" />
          <div className="absolute inset-y-0 right-0 w-12 bg-gradient-to-l from-neutral-950 to-transparent pointer-events-none" />
        </div>
      </div>
    </section>
  );
};

export { Logos3 };
