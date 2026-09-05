import Image from "next/image";
import type { GalleryScrollBlock } from "@/types/caseStudyBlock";

/**
 * Native horizontal scroll strip — no pinned/scroll-jacked height. A pinned
 * version was tried and dropped: it force-cropped landscape screenshots into
 * tall portrait frames and multiplied page height per image for little
 * payoff. Plain touch/trackpad scrolling is simpler and reliable.
 */
export function GalleryScroll({ block }: { block: GalleryScrollBlock }) {
  return (
    <div className="flex gap-6 overflow-x-auto px-6 py-10 md:px-10">
      {block.images.map((image, index) => (
        <div
          key={index}
          className="relative aspect-video w-[85vw] shrink-0 overflow-hidden rounded-2xl border border-outer-space/30 md:w-[55vw]"
        >
          <Image
            src={image.src}
            alt={image.alt}
            fill
            sizes="(min-width: 768px) 55vw, 85vw"
            className="object-cover object-top"
          />
        </div>
      ))}
    </div>
  );
}
