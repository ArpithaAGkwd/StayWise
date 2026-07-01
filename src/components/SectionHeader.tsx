interface SectionHeaderProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
}

export function SectionHeader({
  eyebrow,
  title,
  subtitle,
}: SectionHeaderProps) {
  return (
    <header className="my-3 mb-6">
      {eyebrow ? (
        <p className="text-xs font-bold uppercase tracking-[0.08em] text-[#6f1d1b]">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="mt-1 text-[clamp(1.7rem,3.3vw,2.2rem)] font-semibold text-[#111827]">
        {title}
      </h2>
      {subtitle ? <p className="mt-1 text-[#6b7280]">{subtitle}</p> : null}
    </header>
  );
}
