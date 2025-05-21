export interface ProjectCard {
    title: string
    description: string
    tags: string[]
    date: string
    image: string
}

export interface ProjectImage {
  src: string
  alt: string
}

export interface Project {
  id: string
  title: string
  shortDescription: string
  role: string
  thumbnail: string
  images: ProjectImage[]
  longDescription: string
  tags: string[]
}
