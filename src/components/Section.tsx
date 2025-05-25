export default function Section({
  title,
  description,
  children,
}: {
  title: string;
  description: string;
  children: React.ReactNode;
}) {
  return (
    <section className="container mx-auto py-8 px-8">
      <div className="mb-8 mx-auto">
        <h2 className="text-3xl font-bold mb-4 md:text-4xl text-foreground">{title}</h2>
        <div className="h-1 w-20 bg-primary mb-6"></div>
        <p className="text-muted-foreground text-lg">{description}</p>
      </div>
      {children}
    </section>
  );
}
