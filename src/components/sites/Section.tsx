import type { ReactNode } from "react";

export function Section({ id, eyebrow, title, subtitle, children, className = "" }:
  { id?: string; eyebrow?: string; title?: ReactNode; subtitle?: ReactNode; children?: ReactNode; className?: string }) {
  return (
    <section id={id} className={`relative py-24 sm:py-32 ${className}`}>
      <div className="mx-auto max-w-7xl px-6">
        {(eyebrow || title || subtitle) && (
          <div className="max-w-3xl mb-16">
            {eyebrow && <div className="text-[11px] tracking-[0.4em] text-primary mb-4">{eyebrow}</div>}
            {title && <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl leading-tight">{title}</h2>}
            {subtitle && <p className="mt-5 text-base sm:text-lg text-muted-foreground max-w-2xl leading-relaxed">{subtitle}</p>}
          </div>
        )}
        {children}
      </div>
    </section>
  );
}

export function PageHero({ eyebrow, title, subtitle, children }: { eyebrow?: string; title: ReactNode; subtitle?: ReactNode; children?: ReactNode }) {
  return (
    <section className="relative pt-40 pb-16 sm:pt-48 sm:pb-24">
      <div className="absolute inset-x-0 top-24 mx-auto h-px max-w-3xl gold-divider" />
      <div className="mx-auto max-w-5xl px-6 text-center animate-fade-up">
        {eyebrow && <div className="text-[11px] tracking-[0.4em] text-primary mb-5">{eyebrow}</div>}
        <h1 className="font-display text-4xl sm:text-6xl lg:text-7xl leading-[1.05]">{title}</h1>
        {subtitle && <p className="mt-6 text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">{subtitle}</p>}
        {children && <div className="mt-10">{children}</div>}
      </div>
    </section>
  );
}

export function GoldButton({ href, to, children, external, onClick, variant = "solid", target, rel }:
  { href?: string; to?: string; children: ReactNode; external?: boolean; onClick?: () => void; variant?: "solid" | "outline"; target?: string; rel?: string }) {
  const cls = variant === "solid"
    ? "bg-gradient-to-r from-[#FFD76A] via-[#D4AF37] to-[#FFD76A] text-black hover:shadow-[0_0_40px_rgba(255,215,106,0.45)]"
    : "border border-primary/70 text-primary hover:bg-primary/10 hover:gold-glow";
  const base = `inline-flex items-center justify-center rounded-full px-7 py-3.5 text-sm tracking-wider font-medium transition-all duration-300 ${cls}`;
  if (href) return <a href={href} target={target || (external ? "_blank" : undefined)} rel={rel || (external ? "noreferrer noopener" : undefined)} className={base}>{children}</a>;
  if (onClick) return <button onClick={onClick} className={base}>{children}</button>;
  return <a href={to} className={base}>{children}</a>;
}
