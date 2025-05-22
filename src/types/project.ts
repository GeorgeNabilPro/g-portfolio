export interface ProjectImage {
  src: string;
  alt: string;
}

export interface Project {
  title: string;
  description: string;
  role: string;
  tags?: string[];
  date: string;
  images?: string[][];
}
