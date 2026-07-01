import { motion } from "framer-motion";
import { Link } from "wouter";
import { ArcRevealHero } from "@/components/ArcRevealHero";
import { Carousel, Card } from "@/components/AppleCarousel";
import { Navbar } from "@/components/Navbar";
import { LocationMap } from "@/components/LocationMap";
import FlowArt, { FlowSection } from "@/components/StoryScroll";
import { Logos3 } from "@/components/Logos3";
import { SponsorUs } from "@/components/SponsorUs";
import { ContactScrollSection } from "@/components/ContactScrollSection";
import { VisualArchiveSection } from "@/components/VisualArchiveSection";
import { ProcessSection } from "@/components/ProcessSection";
import { ScrollRevealText } from "@/components/ScrollRevealText";

import heroBg from "@assets/WhatsApp_Image_2025-10-14_at_12.59.14_PM_1782231125316_1782318583069.jpeg";
import teamPhoto from "@assets/WhatsApp_Image_2025-06-13_at_20.11.20_1782231146053_1782316997099.jpeg";
import trackPhoto1 from "@assets/OMR05105_1782231093659_1782316997099.JPG";
import trackPhoto2 from "@assets/OMR05412_1782231091330_1782316997099.JPG";
import trackPhoto3 from "@assets/OMR05103.JPG";
import trackPhoto4 from "@assets/OMR04964.JPG";
import trackPhoto5 from "@assets/OMR05224.JPG";

// ─── Gallery cards ────────────────────────────────────────────────────────────
const cards = [
  {
    src: teamPhoto,
    title: "Shell Eco-Marathon 2025",
    category: "Competition",
    content: <p className="text-white/70">Team Hammerhead GIKI with their battery-electric prototype at Shell Eco-Marathon.</p>
    
  },
  {
    src: trackPhoto4,
    title: "Qatar Airways Circuit",
    category: "Racing",
    content: <p className="text-white/70">Hammerhead member soaking in the moment at the iconic Qatar circuit.</p>
  },
  {
    src: trackPhoto3,
    title: "Qatar Airways Circuit",
    category: "Racing",
    content: <p className="text-white/70">Hammerhead member soaking in the moment at the iconic Qatar circuit.</p>
  },

  {
    src: trackPhoto5,
    title: "Qatar Airways Circuit",
    category: "Racing",
    content: <p className="text-white/70">Hammerhead member soaking in the moment at the iconic Qatar circuit.</p>
  },
  {
    src: trackPhoto1,
    title: "At the Track",
    category: "Racing",
    content: <p className="text-white/70">Strategic planning ahead of the run at track.</p>
    
  },
  {
    src: trackPhoto2,
    title: "Qatar Airways Circuit",
    category: "Racing",
    content: <p className="text-white/70">Hammerhead member soaking in the moment at the iconic Qatar circuit.</p>
  },
];

// ─── Scroll-in wrapper ────────────────────────────────────────────────────────
function SectionReveal({ children, className = "", delay = 0 }: {
  children: React.ReactNode; className?: string; delay?: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 70 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.9, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────
export function Home() {
  const greetings = [
    { text: "Precision." },
    { text: "Speed." },
    { text: "Innovation." },
    { text: "Pakistan." }
  ];

  return (
    <ArcRevealHero
      greetings={greetings}
      storageKey="hammerhead-intro"
      introClassName="bg-[#F2F0EB]"
      greetingClassName=""
      greetingStyle={{ color: '#111111' }}
      revealColor="#000000"
    >
      <div className="min-h-screen bg-black text-foreground selection:bg-primary selection:text-primary-foreground font-sans">
        <Navbar />

        {/* ── Hero ── */}
        <main id="home" className="relative min-h-[100dvh] flex flex-col justify-center overflow-hidden">
          <img src={heroBg} alt="Hammerhead driver at the cockpit" className="absolute inset-0 w-full h-full object-cover object-center z-0" />
          <div className="absolute inset-0 bg-black/55 z-0 pointer-events-none" />
          <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-center">
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }} className="max-w-3xl pt-24 sm:pt-28 md:pt-32">
              <p className="text-white/50 text-xs sm:text-sm font-light tracking-wide mb-6">Est. 2009 — GIK Institute, Pakistan</p>
              <h1 className="text-white text-sm sm:text-base font-light tracking-[0.2em] mb-3 uppercase">Team Hammerhead</h1>
              <h2 className="text-white text-[clamp(3.5rem,18vw,12rem)] leading-[0.9] font-light tracking-tight mb-6">GIKI</h2>
              <p className="text-white/70 text-sm sm:text-base font-light mb-8 max-w-md leading-relaxed">Engineering ultra-efficient battery-electric prototypes for Shell Eco-Marathon. Representing Pakistan on the global stage.</p>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 items-stretch sm:items-center">
                <Link href="/vehicles" className="inline-flex items-center justify-center px-6 py-2.5 text-sm font-normal text-white border border-white/40 hover:bg-white/10 rounded-full transition-colors text-center">Our vehicles</Link>
                <a href="https://instagram.com/hammerheadgiki" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center px-6 py-2.5 text-sm font-normal text-white/70 hover:text-white transition-colors text-center">Instagram</a>
              </div>
            </motion.div>
          </div>
        </main>

        {/* ── Gallery ── */}
        <section id="gallery" className="bg-[#F2F0EB] py-16 sm:py-20 md:py-24 relative z-20">
          <SectionReveal className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-10">
            <h3 className="text-3xl md:text-5xl font-bold text-black tracking-wider font-rajdhani uppercase">From the Pits</h3>
            <p className="mt-4 text-black text-lg">Behind the scenes of our journey.</p>
          </SectionReveal>
          <div className="w-full">
            <Carousel items={cards.map((card, index) => <Card key={card.title} card={card} index={index} />)} />
          </div>
        </section>

        {/* ── Collaborate ── */}
        <ContactScrollSection />

        {/* ── Visual Archive ── */}
        <VisualArchiveSection />

        {/* ── Process ── */}
        <ProcessSection />

        {/* ── Location ── */}
        <section className="bg-black py-16 sm:py-24 md:py-28 relative z-20 overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
            <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
              <SectionReveal>
                <p className="text-primary text-xs font-bold uppercase tracking-[0.3em] mb-4">Base of Operations</p>
                <h2 className="text-white font-rajdhani text-[clamp(3.5rem,10vw,8rem)] font-black uppercase leading-[0.85] tracking-tighter mb-6">
                  GIKI<br />SWABI<br /><span className="text-primary">PAK</span>
                </h2>
                <p className="text-gray-400 text-base md:text-lg leading-relaxed max-w-md">
                  Ghulam Ishaq Khan Institute of Engineering Sciences & Technology — nestled in the mountains of Khyber Pakhtunkhwa. Our home since 2009.
                </p>
                {/* Stats row */}
                <div className="mt-8 sm:mt-10 grid grid-cols-3 gap-3 sm:gap-6 border-t border-white/10 pt-6 sm:pt-8">
                  {[
                    { val: "12+", label: "Years at SEM" },
                    { val: "331", label: "km/kWh peak" },
                    { val: "1st", label: "National champion" },
                  ].map(({ val, label }, i) => (
                    <SectionReveal key={i} delay={0.1 * i}>
                      <div className="text-primary font-rajdhani text-3xl sm:text-4xl md:text-5xl font-black leading-none">{val}</div>
                      <div className="text-gray-500 text-[10px] sm:text-xs uppercase tracking-widest mt-1">{label}</div>
                    </SectionReveal>
                  ))}
                </div>
              </SectionReveal>

              <SectionReveal delay={0.2} className="flex justify-center lg:justify-end mt-8 lg:mt-0">
                <LocationMap
                  location="GIKI, Swabi, Pakistan"
                  coordinates="34.1688° N, 72.6857° E"
                  className="scale-100 sm:scale-110 md:scale-125 lg:scale-150"
                />
              </SectionReveal>
            </div>
          </div>
        </section>

        {/* ── FlowArt sections ── */}
        <div id="story" className="relative z-20 scroll-mt-24">
          <FlowArt aria-label="Hammerhead Story">

            {/* 01 — Mission (BLACK) */}
            <FlowSection aria-label="Our Mission" style={{ backgroundColor: '#0a0a0a', color: '#fff' }}>
              <p className="text-xs font-bold uppercase tracking-[0.25em] text-white/40">01 — Our Mission</p>
              <hr className="border-none border-t border-white/10" style={{ margin: '2vw 0' }} />
              <div>
                <h2 className="font-rajdhani text-[clamp(3.5rem,11vw,12rem)] font-black leading-[0.85] uppercase tracking-tight">
                  Pioneering<br />Clean<br />Mobility
                </h2>
              </div>
              <hr className="border-none border-t border-white/10" style={{ margin: '2vw 0' }} />
              <p className="max-w-[52ch] text-[clamp(1rem,2.2vw,1.7rem)] font-normal leading-relaxed text-white/80">
                Founded in 2009, Team Hammerhead GIKI is Pakistan's longest-running and most decorated student EV design team — bringing together engineers from across disciplines to solve the real challenges of sustainable transportation.
              </p>
              <hr className="border-none border-t border-white/10" style={{ margin: '2vw 0' }} />
              <div className="flex flex-wrap gap-[3vw]">
                <div className="min-w-[180px] flex-1">
                  <p className="mb-2 text-sm font-bold uppercase tracking-wider text-primary">Zero-Emission Engineering</p>
                  <p className="text-[clamp(0.85rem,1.3vw,1.05rem)] leading-relaxed opacity-60">Developing battery-electric systems to accelerate the global transition to green energy.</p>
                </div>
                <div className="min-w-[180px] flex-1">
                  <p className="mb-2 text-sm font-bold uppercase tracking-wider text-primary">Student Innovation Lab</p>
                  <p className="text-[clamp(0.85rem,1.3vw,1.05rem)] leading-relaxed opacity-60">Applying classroom theory to solve aerodynamics, composite fabrication, and power electronics challenges.</p>
                </div>
              </div>
            </FlowSection>

            {/* 02 — Engineering (ORANGE) */}
            <FlowSection aria-label="Engineering Pillars" style={{ backgroundColor: '#FF5E1A', color: '#000' }}>
              <p className="text-xs font-bold uppercase tracking-[0.25em] text-black/40">02 — Engineering</p>
              <hr className="border-none border-t border-black/20" style={{ margin: '2vw 0' }} />
              <div>
                <h2 className="font-rajdhani text-[clamp(3.5rem,11vw,12rem)] font-black leading-[0.85] uppercase tracking-tight">
                  Built<br />From<br />Scratch
                </h2>
              </div>
              <hr className="border-none border-t border-black/20" style={{ margin: '2vw 0' }} />
              <p className="max-w-[52ch] text-[clamp(1rem,2.2vw,1.7rem)] font-normal leading-relaxed opacity-80">
                Our Core Competencies — every subsystem designed, simulated, and fabricated in-house by student engineers.
              </p>
              <hr className="border-none border-t border-black/20" style={{ margin: '2vw 0' }} />
              <div className="flex flex-wrap gap-[3vw]">
                {[
                  { title: "Composite Chassis", body: "Aerodynamic carbon-fiber shells and ultra-lightweight space frames engineered in SOLIDWORKS and simulated in ANSYS for minimum drag." },
                  { title: "Power Electronics", body: "Custom MOSFET driver boards, regenerative braking circuitry, and optimized throttle control systems." },
                  { title: "Smart BMS", body: "Lithium-Ion cell management with active temperature sensors, over-current cutoff relays, and live cell balancing protocols." },
                  { title: "IoT Telemetry", body: "Sensor data transmitted via CAN bus and LoRa to pit lane monitors, enabling real-time driving strategy optimization." },
                ].map(({ title, body }) => (
                  <div key={title} className="min-w-[180px] flex-1">
                    <p className="mb-2 text-sm font-bold uppercase tracking-wider">{title}</p>
                    <p className="text-[clamp(0.85rem,1.3vw,1.05rem)] leading-relaxed opacity-70">{body}</p>
                  </div>
                ))}
              </div>
            </FlowSection>

            {/* 03 — Achievements (BLACK) */}
            <FlowSection aria-label="Achievements" style={{ backgroundColor: '#0a0a0a', color: '#fff' }}>
              <p className="text-xs font-bold uppercase tracking-[0.25em] text-white/40">03 — Achievements</p>
              <hr className="border-none border-t border-white/10" style={{ margin: '2vw 0' }} />
              <div>
                <h2 className="font-rajdhani text-[clamp(3.5rem,11vw,12rem)] font-black leading-[0.85] uppercase tracking-tight">
                  Raising<br />The<br />Flag
                </h2>
              </div>
              <hr className="border-none border-t border-white/10" style={{ margin: '2vw 0' }} />
              <p className="max-w-[52ch] text-[clamp(1rem,2.2vw,1.7rem)] font-normal leading-relaxed text-white/80">
                A legacy of excellence at Shell Eco-Marathon — from national champions to top performers on the international stage.
              </p>
              <hr className="border-none border-t border-white/10" style={{ margin: '2vw 0' }} />
              <div className="flex flex-wrap gap-[3vw]">
                {[
                  { year: "2026", badge: "🏆 Spirit Award", detail: "Spirit of Shell Eco-Marathon at SEM Asia, Lusail Stadium, Qatar — recognizing passion and team spirit on the global stage." },
                  { year: "2022", badge: "4th Worldwide", detail: "4th place globally in Shell's Pitch the Future competition, showcasing our vision for sustainable mobility." },
                  { year: "2021", badge: "🥇 No. 1 National", detail: "Won the Battery Electric Prototype category at Shell Eco-Marathon Pakistan, defeating NUST and all competitors." },
                  { year: "2014 & 2017", badge: "6th Asia", detail: "6th position on the Asia leaderboard at Shell Eco-Marathon, achieving a peak efficiency of 331 km/kWh." },
                ].map(({ year, badge, detail }) => (
                  <div key={year} className="min-w-[180px] flex-1">
                    <p className="mb-1 text-xs font-bold uppercase tracking-wider text-primary">{year}</p>
                    <p className="mb-2 text-sm font-bold uppercase tracking-wider">{badge}</p>
                    <p className="text-[clamp(0.85rem,1.3vw,1.05rem)] leading-relaxed opacity-60">{detail}</p>
                  </div>
                ))}
              </div>
            </FlowSection>

            {/* 04 — Team (ORANGE) */}
            <FlowSection aria-label="Our Team" style={{ backgroundColor: '#FF5E1A', color: '#000' }}>
              <p className="text-xs font-bold uppercase tracking-[0.25em] text-black/40">04 — Our Team</p>
              <hr className="border-none border-t border-black/20" style={{ margin: '2vw 0' }} />
              <div>
                <h2 className="font-rajdhani text-[clamp(3.5rem,11vw,12rem)] font-black leading-[0.85] uppercase tracking-tight">
                  One<br />Team
                </h2>
              </div>
              <hr className="border-none border-t border-black/20" style={{ margin: '2vw 0' }} />
              <p className="max-w-[52ch] text-[clamp(1rem,2.2vw,1.7rem)] font-normal leading-relaxed opacity-80">
                A multidisciplinary team of GIKI students — mechanical, electrical, and software engineers united by one mission. Developing eco-friendly automotive solutions since 2009.
              </p>
              <hr className="border-none border-t border-black/20" style={{ margin: '2vw 0' }} />
              <div className="flex flex-wrap gap-[3vw]">
                {[
                  { dept: "Electrical", sub: "Power, Control & Telemetry", body: "Designing custom battery management boards, power distribution units, MOSFET control modules, and low-voltage harness wiring." },
                  { dept: "Mechanical", sub: "Chassis, Suspension & Aero", body: "Optimizing chassis dynamics, aerodynamic profiles, carbon-fiber layups, suspension geometries, and steering linkages." },
                  { dept: "Autonomous", sub: "AI Pathing & Sensor Fusion", body: "Developing computer vision algorithms, real-time path planning, navigation controllers, and sensor fusion modules." },
                  { dept: "Operations", sub: "Strategy & Logistics", body: "Managing project timelines, race strategy, resource allocations, and international competition preparation." },
                  { dept: "Sponsorships", sub: "Corporate Partnerships", body: "Securing corporate partnerships, managing sponsor relationships, pitching to tech leaders." },
                  { dept: "Comms & PR", sub: "Brand & Media", body: "Leading public relations, brand marketing campaigns, media outreach, and representing the team globally." },
                ].map(({ dept, sub, body }) => (
                  <div key={dept} className="min-w-[160px] flex-1">
                    <p className="mb-1 text-sm font-black uppercase tracking-wider">{dept}</p>
                    <p className="mb-2 text-xs font-bold uppercase tracking-wider opacity-60">{sub}</p>
                    <p className="text-[clamp(0.8rem,1.2vw,1rem)] leading-relaxed opacity-70">{body}</p>
                  </div>
                ))}
              </div>
              <hr className="border-none border-t border-black/20" style={{ margin: '2vw 0' }} />
              <p className="mt-auto text-right max-w-[40ch] ml-auto text-[clamp(1rem,2vw,1.5rem)] font-normal leading-relaxed opacity-80">
                Supported by GIK Institute and Shell Eco-Marathon — Pakistan's brightest engineering talent.
              </p>
            </FlowSection>

          </FlowArt>
        </div>

        {/* ── Scroll reveal text ── */}
        <div className="relative z-20">
          <ScrollRevealText
            text="TRACK READY"
            label="One mission. Relentless drive."
          />
        </div>

        {/* ── Partners ── */}
        <Logos3 />

        {/* ── Sponsor Us ── */}
        <SponsorUs />
        
        {/* ── Footer ── */}
        <footer className="bg-[#FF5E1A] py-12 border-t border-white/10 relative z-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center justify-center gap-6">
            <p className="text-black-500 text-sm tracking-widest uppercase">
              © {new Date().getFullYear()} Team Hammerhead GIKI. All rights reserved.
            </p>
          </div>
        </footer>
      </div>
    </ArcRevealHero>
  );
}
