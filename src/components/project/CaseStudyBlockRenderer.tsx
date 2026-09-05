import type { CaseStudyBlock } from "@/types/caseStudyBlock";
import { Container } from "@/components/ui/Container";
import { FullBleedShot } from "./blocks/FullBleedShot";
import { DetailCrop } from "./blocks/DetailCrop";
import { GalleryScroll } from "./blocks/GalleryScroll";
import { MaskedReveal } from "./blocks/MaskedReveal";
import { LayeredShots } from "./blocks/LayeredShots";
import { TypeOverImage } from "./blocks/TypeOverImage";
import { PhaseVisual } from "./blocks/PhaseVisual";
import { TextIntro } from "./blocks/TextIntro";
import { TextImageRow } from "./blocks/TextImageRow";
import { StatRow } from "./blocks/StatRow";
import { ProjectTechStack } from "./ProjectTechStack";
import { ProjectChallengeSolution } from "./ProjectChallengeSolution";
import type { Dictionary } from "@/i18n/getDictionary";

/**
 * Switches on `block.type` to render the matching visual component. Adding a
 * new presentation technique means one new case here — never a template
 * rewrite of the case-study page itself.
 */
export function CaseStudyBlockRenderer({
  blocks,
  dict,
}: {
  blocks: CaseStudyBlock[];
  dict: Dictionary;
}) {
  let rowIndex = 0;

  return (
    <div className="space-y-2">
      {blocks.map((block, index) => {
        switch (block.type) {
          case "full-bleed-shot":
            return <FullBleedShot key={index} block={block} />;
          case "detail-crop":
            return <DetailCrop key={index} block={block} />;
          case "gallery-scroll":
            return <GalleryScroll key={index} block={block} />;
          case "masked-reveal":
            return <MaskedReveal key={index} block={block} />;
          case "layered-shots":
            return <LayeredShots key={index} block={block} />;
          case "type-over-image":
            return <TypeOverImage key={index} block={block} />;
          case "phase-visual":
            return <PhaseVisual key={index} block={block} />;
          case "text-intro":
            return <TextIntro key={index} block={block} />;
          case "text-image-row":
            return (
              <TextImageRow key={index} block={block} reverse={rowIndex++ % 2 === 1} />
            );
          case "stat-row":
            return <StatRow key={index} block={block} />;
          case "tech-stack":
            return (
              <div key={index} className="border-t border-outer-space/20 py-16">
                <Container>
                  <span className="font-mono text-xs uppercase tracking-[0.3em] text-blue-gray">
                    {dict.caseStudy.stack}
                  </span>
                  <div className="mt-6">
                    <ProjectTechStack items={block.items} />
                  </div>
                </Container>
              </div>
            );
          case "challenge-solution":
            return (
              <div key={index} className="py-16">
                <Container>
                  <span className="font-mono text-xs uppercase tracking-[0.3em] text-blue-gray">
                    {dict.caseStudy.challenges}
                  </span>
                  <div className="mt-8">
                    <ProjectChallengeSolution items={block.items} dict={dict} />
                  </div>
                </Container>
              </div>
            );
          default:
            return null;
        }
      })}
    </div>
  );
}
