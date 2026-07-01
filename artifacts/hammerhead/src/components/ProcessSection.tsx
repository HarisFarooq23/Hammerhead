import { RollingTextList } from "@/components/RollingTextList";

import trackPhoto1 from "@assets/OMR05105_1782231093659_1782316997099.JPG";
import trackPhoto2 from "@assets/OMR05412_1782231091330_1782316997099.JPG";
import sem2021Photo from "@assets/1st_poition_SEM_2021_1782320797278.jpeg";
import latestPhoto from "@assets/WhatsApp_Image_2026-06-23_at_5.14.37_PM_1782320810993.jpeg";

const processItems = [
  {
    id: 1,
    title: "Design",
    category: "Engineering",
    src: trackPhoto1,
    alt: "Vehicle design at the track",
    color: "orange" as const,
  },
  {
    id: 2,
    title: "Build",
    category: "Fabrication",
    src: trackPhoto2,
    alt: "Building the prototype",
    color: "orange" as const,
  },
  {
    id: 3,
    title: "Race",
    category: "Competition",
    src: sem2021Photo,
    alt: "Racing at Shell Eco-Marathon",
    color: "orange" as const,
  },
  {
    id: 4,
    title: "Win",
    category: "Achievement",
    src: latestPhoto,
    alt: "Team celebration",
    color: "orange" as const,
  },
];

export function ProcessSection() {
  return (
    <section id="process" className="relative z-20 bg-[#F2F0EB] dark:bg-neutral-950 scroll-mt-24">
      <RollingTextList items={processItems} />
    </section>
  );
}
