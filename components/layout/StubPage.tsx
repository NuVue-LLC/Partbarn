interface StubPageProps {
  title: string;
}

export default function StubPage({ title }: StubPageProps) {
  return (
    <div className="min-h-screen bg-bg-cream pt-40 pb-32">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <p className="eyebrow text-brand-accent text-sm mb-6">
          The ParT Barn
        </p>
        <h1 className="font-playfair text-5xl md:text-7xl font-light text-text-dark mb-8 leading-tight">
          {title}
        </h1>
        <div className="w-16 h-px bg-brand-accent mx-auto mb-8" />
        <p className="font-barlow text-text-dark/80 text-lg leading-relaxed">
          This page is being built. Check back soon.
        </p>
      </div>
    </div>
  );
}
