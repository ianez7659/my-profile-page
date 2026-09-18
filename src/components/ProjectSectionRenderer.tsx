import { ProjectSection } from "@/types/project";
import ImageSlider from "./ImageSlider";
import LandingSection from "./LandingSection";
import SectionHeading from "./SectionHeading";

interface Props {
  section: ProjectSection;
  /** Sections alternate plain and band down the page, so the rhythm comes from position, not type. */
  index: number;
  /** Course marker, e.g. "02". Absent for a section that is a beat rather than a stage. */
  stage?: string;
}

function Paragraphs({ content }: { content: string }) {
  return (
    <>
      {content.split("\n\n").map((para, idx) => (
        <p key={idx} className="mb-4 text-lg leading-relaxed">
          {para.split("\n").map((line, lineIdx) => (
            <span key={lineIdx}>
              {line}
              {lineIdx < para.split("\n").length - 1 && <br />}
            </span>
          ))}
        </p>
      ))}
    </>
  );
}

export default function ProjectSectionRenderer({
  section,
  index,
  stage,
}: Props) {
  return (
    <LandingSection variant={index % 2 === 0 ? "plain" : "band"}>
      {section.title && (
        <SectionHeading index={stage}>{section.title}</SectionHeading>
      )}

      {section.type === "text" && (
        /* Prose keeps to the reading column even though the band runs full width. */
        <div className="max-w-3xl mx-auto">
          <Paragraphs content={section.content} />
        </div>
      )}

      {section.type === "image" && (
        /* A screenshot is not the page: hold it in from the full column so 16:9 stays readable. */
        <div className="max-w-4xl mx-auto">
          <ImageSlider images={section.image} />
        </div>
      )}

      {section.type === "textImage" && (
        <div
          className={`flex flex-col ${
            section.align === "left" ? "md:flex-row" : "md:flex-row-reverse"
          } items-center gap-6 md:gap-10`}
        >
          <div className="w-full md:w-1/2">
            <Paragraphs content={section.content} />
          </div>
          <div className="w-full md:w-1/2">
            <ImageSlider images={section.image} />
          </div>
        </div>
      )}
    </LandingSection>
  );
}
