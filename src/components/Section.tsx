import { ProjectCardWithModal } from '@/components/ProjectCard';

export default function Section({
  title,
  description,
  cards,
}: {
  title: string;
  description: string;
  cards: string[];
}) {
  return (
    <section className="container mx-auto px-4 py-16">
      <div className="mb-16 text-center max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold mb-6 md:text-4xl text-foreground">{title}</h2>
        <div className="h-1 w-20 bg-primary mx-auto mb-6"></div>
        <p className="text-muted-foreground text-lg">{description}</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {cards.map((card) => (
          <div key={card} className="transform transition-all duration-300 hover:z-10">
            <ProjectCardWithModal projectPath={card} />
          </div>
        ))}
      </div>
    </section>
  );
}
