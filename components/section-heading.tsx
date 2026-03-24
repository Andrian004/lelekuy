interface SectionHeadingProps {
  eyebrow: string;
  title: string;
  description: string;
}

export function SectionHeading({ eyebrow, title, description }: SectionHeadingProps) {
  return (
    <div className="mx-auto mb-12 max-w-3xl text-center">
      <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-emerald-300">{eyebrow}</p>
      <h2 className="text-3xl font-bold tracking-tight text-white md:text-4xl">{title}</h2>
      <p className="mt-4 text-cyan-100/80">{description}</p>
    </div>
  );
}
