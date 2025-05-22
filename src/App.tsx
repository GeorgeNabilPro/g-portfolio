import './App.css';

import Section from './components/Section';

export default function App() {
  return (
    <section className="container mx-auto px-4 py-16">
      <div className="mb-16 text-center max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold mb-6 md:text-4xl text-foreground">George Nabil</h2>
        <div className="h-1 w-20 bg-primary mx-auto mb-6"></div>
        <p className="text-muted-foreground text-lg">
          Hi, I'm George Nabil, a passionate mechanical engineer
        </p>
        <img src="/projects/test.jpg" />
        <img src="projects/test.jpg" />
        <img src="./projects/test.jpg" />
        <img src="../projects/test.jpg" />
        <img src="/public/projects/test.jpg" />
        <img src="public/projects/test.jpg" />
        <img src="./public/projects/test.jpg" />
        <img src="../public/projects/test.jpg" />
        <img src="/g-portfolio/projects/test.jpg" />
        <img src="g-portfolio/projects/test.jpg" />
      </div>
      <Section
        title="Projects"
        description="Here are some of my projects that I have worked on."
        cards={['1-three-wheel', '2-trommel-screem', '8-hoist-mechanism', '7-jack-screw']}
      />
    </section>
  );
}
