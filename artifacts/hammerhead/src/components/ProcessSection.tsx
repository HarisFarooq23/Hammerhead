import { RollingTextList } from "@/components/RollingTextList";

import trackPhoto1 from "@assets/7.png";
import trackPhoto2 from "@assets/4.png";
import sem2021Photo from "@assets/1.png";
import latestPhoto from "@assets/5.png";

const processItems = [
  {
    id: 1,
    title: "ARC-04",
    category: "Engineering",
    src: trackPhoto1,
    alt: "Vehicle design at the track",
    color: "orange" as const,
  },
  {
    id: 2,
    title: "ARC-03",
    category: "Fabrication",
    src: trackPhoto2,
    alt: "Building the prototype",
    color: "orange" as const,
  },
  {
    id: 3,
    title: "ARC-02",
    category: "Competition",
    src: sem2021Photo,
    alt: "Racing at Shell Eco-Marathon",
    color: "orange" as const,
  },
  {
    id: 4,
    title: "ARC-01",
    category: "Achievement",
    src: latestPhoto,
    alt: "Team celebration",
    color: "orange" as const,
  },
];

export function ProcessSection() {
  return (
    <section id="Our Vehicles - Click to view" className="relative z-20 bg-[#F2F0EB] dark:bg-neutral-950 scroll-mt-24">
      <RollingTextList items={processItems} />
    </section>
  );
}
