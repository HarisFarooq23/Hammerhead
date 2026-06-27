import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

interface PhotoCardProps {
  src: string;
  alt: string;
  index: number;
  centerIndex: number;
  scrollYProgress: ReturnType<typeof useScroll>["scrollYProgress"];
}

function PhotoCard({ src, alt, index, centerIndex, scrollYProgress }: PhotoCardProps) {
  const dist = index - centerIndex;
  const x = useTransform(scrollYProgress, [0, 0.65], [dist * 320, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.65], [0.65, 1]);
  const y = useTransform(scrollYProgress, [0, 0.65], [Math.abs(dist) * 80, 0]);
  const rotate = useTransform(scrollYProgress, [0, 0.65], [dist * 15, 0]);
  const opacity = useTransform(scrollYProgress, [0, 0.2], [0, 1]);

  return (
    <motion.div
      className="shrink-0 w-56 md:w-72 h-36 md:h-48 rounded-2xl overflow-hidden shadow-2xl will-change-transform"
      style={{ x, scale, y, rotate, opacity }}
    >
      <img src={src} alt={alt} className="w-full h-full object-cover" />
    </motion.div>
  );
}

interface TeamPhotosScrollProps {
  photos: { src: string; alt: string }[];
}

export function TeamPhotosScroll({ photos }: TeamPhotosScrollProps) {
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: targetRef, offset: ["start end", "end start"] });
  const centerIndex = Math.floor(photos.length / 2);

  return (
    <div
      ref={targetRef}
      className="relative flex h-[90vh] items-center justify-center overflow-hidden bg-neutral-950 px-4"
    >
      <div className="flex items-center justify-center gap-4 md:gap-6" style={{ perspective: "800px" }}>
        {photos.map((photo, i) => (
          <PhotoCard
            key={i}
            src={photo.src}
            alt={photo.alt}
            index={i}
            centerIndex={centerIndex}
            scrollYProgress={scrollYProgress}
          />
        ))}
      </div>
    </div>
  );
}
