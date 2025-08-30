export interface TextSection {
  type: "text";
  title?: string;
  content: string;
}

export interface ImageSection {
  type: "image";
  image: string[];
  title?: string;
}

export interface TextImageSection {
  type: "textImage";
  title?: string;
  content: string;
  image: string[];
  align?: "left" | "right";
}

export type ProjectSection = TextSection | ImageSection | TextImageSection;

export interface Project {
  slug: string;
  title: string;
  description: string;
  image: string;
  github: string;
  demo: string;
  techStack: string[];
  sections: ProjectSection[];
}
