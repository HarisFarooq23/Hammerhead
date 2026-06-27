import * as React from "react";
import { animate, AnimatePresence, motion, useMotionValue, useReducedMotion, useTransform } from "framer-motion";

export type ArcRevealGreeting = { text: string; lang?: string; };
export interface ArcRevealHeroProps {
  greetings?: ArcRevealGreeting[];
  greetingHold?: number;
  revealDuration?: number;
  skipIntro?: boolean;
  className?: string;
  introClassName?: string;
  greetingClassName?: string;
  greetingStyle?: React.CSSProperties;
  revealClassName?: string;
  revealColor?: string;
  storageKey?: string;
  children?: React.ReactNode;
}

type Phase = "intro" | "reveal" | "done";

export function ArcRevealHero({
  greetings = [],
  greetingHold = 550,
  revealDuration = 1400,
  skipIntro = false,
  className,
  introClassName,
  greetingClassName,
  greetingStyle,
  revealClassName,
  revealColor = "#000000",
  storageKey,
  children,
}: ArcRevealHeroProps) {
  const prefersReducedMotion = useReducedMotion();
  const [phase, setPhase] = React.useState<Phase>(skipIntro ? "done" : "intro");
  const [index, setIndex] = React.useState(0);

  const progress = useMotionValue(0);
  const arcPath = useTransform(progress, (p: number) => {
    const edge = 110 - p * 140;
    const control = edge + 25;
    return `M 0 ${edge} Q 50 ${control} 100 ${edge} L 100 110 L 0 110 Z`;
  });

  React.useEffect(() => {
    if (prefersReducedMotion) { setPhase("done"); return; }
    if (storageKey && typeof window !== "undefined") {
      try { if (window.sessionStorage.getItem(storageKey) === "done") setPhase("done"); } catch {}
    }
  }, [prefersReducedMotion, storageKey]);

  React.useEffect(() => {
    if (phase !== "intro") return;
    const isLast = index >= greetings.length - 1;
    if (isLast) {
      const t = window.setTimeout(() => setPhase("reveal"), greetingHold + 220);
      return () => window.clearTimeout(t);
    }
    const t = window.setTimeout(() => setIndex((i) => i + 1), greetingHold);
    return () => window.clearTimeout(t);
  }, [phase, index, greetingHold, greetings.length]);

  React.useEffect(() => {
    if (phase !== "reveal") return;
    const controls = animate(progress, 1, {
      duration: revealDuration / 1000,
      ease: [0.85, 0, 0.15, 1],
      onComplete: () => {
        if (storageKey && typeof window !== "undefined") {
          try { window.sessionStorage.setItem(storageKey, "done"); } catch {}
        }
        setPhase("done");
      },
    });
    return () => controls.stop();
  }, [phase, progress, revealDuration, storageKey]);

  const showOverlay = phase !== "done";
  const current = greetings[Math.min(index, greetings.length - 1)];

  return (
    <section aria-label="Hero" className={`relative isolate min-h-screen w-full overflow-hidden ${className ?? ""}`}>
      <div className={`relative z-0 ${revealClassName ?? ""}`}>{children}</div>
      <AnimatePresence>
        {showOverlay && (
          <motion.div
            key="arc-reveal-overlay"
            initial={{ opacity: 1 }}
            exit={{ y: "-100%", opacity: 1 }}
            transition={{ duration: 0.9, ease: [0.76, 0, 0.24, 1] }}
            className={`absolute inset-x-0 top-0 z-30 h-screen overflow-hidden ${introClassName ?? ""}`}
          >
            <div className="absolute inset-0 flex items-center justify-center">
              <AnimatePresence mode="wait">
                {phase === "intro" && current && (
                  <motion.span
                    key={`${index}-${current.text}`}
                    lang={current.lang}
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    transition={{ duration: 0.42, ease: [0.22, 1, 0.36, 1] }}
                    className={`select-none px-6 text-center text-5xl font-black tracking-widest uppercase ${greetingClassName ?? ""}`}
                    style={greetingStyle}
                  >
                    {current.text}
                  </motion.span>
                )}
              </AnimatePresence>
            </div>
            <svg className="pointer-events-none absolute inset-0 h-full w-full" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden>
              <motion.path d={arcPath} fill={revealColor} />
            </svg>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

export default ArcRevealHero;