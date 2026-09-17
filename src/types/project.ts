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
  demo?: string;
  /** Landing page slot. Lower comes first; omit to keep a project off the landing page. */
  featured?: number;
  techStack: string[];
  sections: ProjectSection[];
}
