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
    <section className="container mx-auto px-4 py-8">
      <div className="mb-16 text-center max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold mb-6 md:text-4xl text-foreground">{title}</h2>
        <div className="h-1 w-20 bg-primary mx-auto mb-6"></div>
        <p className="text-muted-foreground text-lg">{description}</p>
      </div>
      {children}
    </section>
  );
}
