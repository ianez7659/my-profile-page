import { ProjectSection } from "@/types/project";
import ImageSlider from "./ImageSlider";

interface Props {
  section: ProjectSection;
}

export default function ProjectSectionRenderer({ section }: Props) {
  return (
    <div className="mb-12 md:px-20 text-white">
      {" "}
      {section.type === "text" && (
        <>
          {section.title && (
            <h2 className="text-2xl font-semibold mb-4">{section.title}</h2>
          )}
          {section.content.split("\n\n").map((para, idx) => (
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
      )}
      {section.type === "image" && (
        <div className="md:p-8 rounded-xl shadow-lg bg-blue-900">
          {section.title && (
            <h2 className="text-2xl font-semibold mb-4">{section.title}</h2>
          )}
          <ImageSlider images={section.image} />
        </div>
      )}
      {section.type === "textImage" && (
        <div
          className={`flex flex-col p-4 md:p-8 rounded-xl shadow-lg bg-blue-900 ${
            section.align === "left" ? "md:flex-row" : "md:flex-row-reverse"
          } items-center gap-6`}
        >
          <div className="w-full md:w-1/2">
            {section.title && (
              <h2 className="text-2xl font-semibold mb-4">{section.title}</h2>
            )}
            {section.content.split("\n\n").map((para, idx) => (
              <p key={idx} className="mb-4 text-lg leading-relaxed">
                {para.split("\n").map((line, lineIdx) => (
                  <span key={lineIdx}>
                    {line}
                    {lineIdx < para.split("\n").length - 1 && <br />}
                  </span>
                ))}
              </p>
            ))}
          </div>
          <div className="w-full md:w-1/2">
            <ImageSlider images={section.image} />
          </div>
        </div>
      )}
    </div>
  );
}
