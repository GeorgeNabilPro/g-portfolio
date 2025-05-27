export interface ProjectImage {
  src: string;
  alt: string;
}

export interface Project {
  title: string;
  description: string;
  role?: string;
  date?: string;
  tags?: string[];
  images?: string[][];
  team?: number;
  links?: string[] | string[][];
}
