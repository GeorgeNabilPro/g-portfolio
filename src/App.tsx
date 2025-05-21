import './App.css';

import { useState } from 'react';
import Section from './components/Section';

export default function App() {
  const [selectedProject, setSelectedProject] = useState<string | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleProjectClick = (project: string) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <section className="container mx-auto px-4 py-16">
      <div className="mb-16 text-center max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold mb-6 md:text-4xl text-foreground">George Nabil</h2>
        <div className="h-1 w-20 bg-primary mx-auto mb-6"></div>
        <p className="text-muted-foreground text-lg">
          Hi, I'm George Nabil, a passionate mechanical engineer
        </p>
      </div>

      {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {PROJECTS.map((project) => (
          <div key={project} className="transform transition-all duration-300 hover:z-10">
            <ProjectCard projectPath={project} onClick={() => handleProjectClick(project)} />
          </div>
        ))}
      </div> */}
      <Section
        title="Projects"
        description="Here are some of my projects that I have worked on."
        cards={['project1', 'project2']}
      />

      {/* <ProjectModal project={selectedProject} isOpen={isModalOpen} onClose={handleCloseModal} /> */}
    </section>
  );
}
