import { InteractiveFolderGallery, type GalleryPhoto } from "@/components/InteractiveFolderGallery";

import trackPhoto1 from "@assets/2.png";
import trackPhoto2 from "@assets/8.png";
import trackPhoto3 from "@assets/9.png";
import trackPhoto4 from "@assets/10.png";
import trackPhoto5 from "@assets/13.png";

const archivePhotos: GalleryPhoto[] = [
  { id: 1, image: trackPhoto1 },
  { id: 2, image: trackPhoto2 },
  { id: 3, image: trackPhoto3 },
  { id: 4, image: trackPhoto4 },
  { id: 5, image: trackPhoto5 },
];

export function VisualArchiveSection() {
  return (
    <section
      id="archive"
      className="relative z-20 bg-[#f2f0eb] text-black overflow-hidden scroll-mt-24"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          <div className="space-y-6 lg:pr-8">
            <h2 className="text-[clamp(3rem,10vw,7rem)] font-black uppercase tracking-tighter leading-[0.9] text-black">
              Visual
              <br />
              Archive.
            </h2>
            <p className="text-neutral-600 text-base md:text-lg leading-relaxed max-w-md font-light">
              A collection of moments from the pits, the track, and the build floor.
              We believe in actions over static slides — every frame tells part of
              our story.
            </p>
          </div>

          <div className="flex justify-center lg:justify-end">
            <InteractiveFolderGallery
              photos={archivePhotos}
              folderName="Click_To_View.zip"
              dragHintText="Drag any photo down to close"
              className="py-8"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
