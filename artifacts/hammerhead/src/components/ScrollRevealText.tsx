import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

interface CharProps {
  char: string;
  index: number;
  centerIndex: number;
  scrollYProgress: ReturnType<typeof useScroll>["scrollYProgress"];
}

function Char({ char, index, centerIndex, scrollYProgress }: CharProps) {
  const isSpace = char === " ";
  const dist = index - centerIndex;
  const x = useTransform(scrollYProgress, [0, 0.55], [dist * 60, 0]);
  const rotateX = useTransform(scrollYProgress, [0, 0.55], [dist * 60, 0]);
  const opacity = useTransform(scrollYProgress, [0, 0.25], [0, 1]);

  if (isSpace) return <span className="inline-block w-6 md:w-10" />;

  return (
    <motion.span
      className="inline-block text-primary"
      style={{ x, rotateX, opacity }}
    >
      {char}
    </motion.span>
  );
}

interface ScrollRevealTextProps {
  text: string;
  label?: string;
}

export function ScrollRevealText({ text, label }: ScrollRevealTextProps) {
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: targetRef, offset: ["start end", "end start"] });

  const chars = text.split("");
  const centerIndex = Math.floor(chars.length / 2);

  // Parallax for the whole block
  const y = useTransform(scrollYProgress, [0, 1], ["10%", "-10%"]);

  return (
    <div
      ref={targetRef}
      className="relative flex h-[80vh] items-center justify-center overflow-hidden bg-black"
    >
      <motion.div className="text-center px-4 max-w-screen-xl" style={{ y }}>
        {label && (
          <p className="text-white/30 text-xs font-bold uppercase tracking-[0.3em] mb-6">
            {label}
          </p>
        )}
        <div
          className="text-[clamp(2.5rem,8vw,7rem)] font-black uppercase tracking-tight leading-[0.9]"
          style={{ perspective: "600px" }}
        >
          {chars.map((char, i) => (
            <Char
              key={i}
              char={char}
              index={i}
              centerIndex={centerIndex}
              scrollYProgress={scrollYProgress}
            />
          ))}
        </div>
      </motion.div>
    </div>
  );
}
