import './App.css';

import Section from './components/Section';
import { HeroSection } from './components/Hero';
import { ProjectCardWithModal } from './components/ProjectCard';
import Skill from './components/Skill';

import {
  SiAnsys,
  SiAutocad,
  SiDassaultsystemes,
  SiNumpy,
  SiSympy,
  SiPython,
  SiJavascript,
  SiNextdotjs,
  SiReact,
  SiTypescript,
  SiCss,
  SiVite,
  SiHtml5,
  SiTailwindcss,
  SiLatex,
  SiOverleaf,
  SiZotero,
  SiCplusplus,
  SiC,
  SiFigma,
  SiCanva,
  SiGithub,
  SiPayloadcms,
  SiMarkdown,
  SiMdx,
  SiObsidian,
  SiMermaid,
} from '@icons-pack/react-simple-icons';

// Anylogic
// MS word
// Illustrator
// MS Excel
// MS Powerpoint
// MS Visio
// VS Code
// Matplotlib

const PROJECTS = [
  '4-workshop',
  '1-three-wheel',
  '3-cfd-on-formula',
  '2-trommel-screem',
  '8-hoist-mechanism',
  '11-process-tree',
  '6-union-powder',
  '12-tccd',
  '10-hypercone',
  '9-pressure-vessel',
  '7-jack-screw',
];

const SKILLS = [
  {
    title: 'Python',
    description:
      'I use python to automate tasks and solve complex problems in everyday life and specially in engineering.',
    image: (
      <>
        <SiPython />
      </>
    ),
  },
  {
    title: 'Numpy, Sympy, Matplotlib',
    description: 'These are my favorite tools for engineering calculations and data visualization.',
    image: (
      <>
        <SiNumpy />
        <SiSympy />
        {/* <SiMatplotlib /> */}
      </>
    ),
  },
  {
    title: 'Web Development',
    description:
      'Web development is my hobby and a tool I use to showcase my work and do side projects.',
    image: (
      <>
        <SiNextdotjs />
        <SiTypescript />
        <SiJavascript />
        <SiCss />
        <SiHtml5 />
        <SiTailwindcss />
        <SiVite />
        <SiReact />
        <SiPayloadcms />
      </>
    ),
  },
  {
    title: '3D Modeling',
    description:
      'I use SOLIDOWRKS as my main CAD software to create 3D models and simulations for my engineering projects.',
    image: <SiDassaultsystemes />,
  },
  {
    title: 'Simulation',
    description: 'I use ANSYS for FEA and CFD simulations to analyze and optimize my designs.',
    image: <SiAnsys />,
  },
  {
    title: 'Technical Writing',
    description:
      'I use LaTeX and Overleaf to write technical documents and reports for my projects.',
    image: (
      <>
        <SiLatex />
        <SiOverleaf />
        <SiZotero />
      </>
    ),
  },
  {
    title: 'AutoCAD',
    description:
      'I use AutoCAD for 2D drafting and MEP designs. I also use it for simple 3D modeling in some cases.',
    image: <SiAutocad />,
  },
  {
    title: 'Git and GitHub',
    description:
      'I use Git and GitHub to manage my projects and collaborate with others. I also use it to showcase my work.',
    image: <SiGithub />,
  },
  {
    title: 'Professional Presentation',
    description:
      'I use Figma, Adobe Illustrator, and Microsoft Office to create professional presentations and documents.',
    image: (
      <>
        <SiFigma />
        <SiCanva />
        {/* <SiAdobeillustrator /> */}
        {/* <SiMicrosoftoffice /> */}
      </>
    ),
  },
  {
    title: 'Markdown and MDX',
    description:
      'I use Markdown and MDX to write fast and easy documentation for my projects. I also use it to write blog posts and content in my websites.',
    image: (
      <>
        <SiMarkdown />
        <SiMdx />
        <SiObsidian />
        <SiMermaid />
      </>
    ),
  },
  {
    title: 'C and C++',
    description:
      'I use C and C++ for other programming tasks and projects, and also I have some experience with embedded systems and embedded C',
    image: (
      <>
        <SiCplusplus />
        <SiC />
      </>
    ),
  },
];

export default function App() {
  return (
    <article className="container mx-auto px-4 pt-0 pb-10">
      <HeroSection />
      <Section title="Projects" description="Here are some of my projects that I have worked on.">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PROJECTS.map((project) => (
            <div key={project} className="transform transition-all duration-300 hover:z-10">
              <ProjectCardWithModal projectPath={project} />
            </div>
          ))}
        </div>
      </Section>
      <Section
        title="Skills"
        description="A diversified skill set that I have acquired over the years."
      >
        <ul></ul>
      </Section>
      <Section
        title="Tools I Use"
        description="These are the tools I use to get my work done. I am always learning new tools and technologies."
      >
        <ul className="list-disc list-inside text-left">
          {SKILLS.map((skill) => (
            <Skill {...skill} key={skill.title} />
          ))}
        </ul>
      </Section>
    </article>
  );
}
