import './App.css';

import Section from './components/Section';
import { HeroSection } from './components/Hero';
import { ProjectCardWithModal } from './components/ProjectCard';
import Tool from './components/Tool';
import Skill from './components/Skill';

// import Gears from '@/components/Gears';

import { PROJECTS } from './data/projects';
import { TOOLS } from './data/tools';
import { SKILLS_SOFT, SKILLS_TECHNICAL } from './data/skills';

export default function App() {
  return (
    <article className="container mx-auto pt-0 pb-10">
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
        <h3 className="text-2xl mt-4 mb-4 text-left font-bold text-foreground">Technical Skills</h3>
        <ul className="list-disc list-inside text-left">
          {SKILLS_TECHNICAL.map((skill) => (
            <Skill {...skill} key={skill.title} />
          ))}
        </ul>
        <h3 className="text-2xl mt-6 mb-4 text-left font-bold text-foreground">Soft Skills</h3>
        <ul className="list-disc list-inside text-left">
          {SKILLS_SOFT.map((skill) => (
            <Skill {...skill} key={skill.title} />
          ))}
        </ul>
      </Section>
      <Section
        title="Tools I Use"
        description="These are the tools I use to get my work done. I am always learning new tools and technologies."
      >
        <ul className="list-disc list-inside text-left grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl">
          {TOOLS.map((tool) => (
            <Tool {...tool} key={tool.title} />
          ))}
        </ul>
      </Section>
      {/* <div>
        <Gears />
      </div> */}
    </article>
  );
}
