import type { ReactNode } from "react";
import { PageHero, Section } from "./Section";
import { Crown } from "lucide-react";

export function ComingSoon({ eyebrow, title, subtitle, description }: { eyebrow: string; title: ReactNode; subtitle: string; description: string }) {
  return (
    <>
      <PageHero eyebrow={eyebrow} title={title} subtitle={subtitle} />
      <Section>
        <div className="relative max-w-3xl mx-auto text-center glass-strong rounded-3xl p-12 sm:p-16 overflow-hidden">
          <div className="absolute -inset-px rounded-3xl pointer-events-none" style={{ background: "radial-gradient(600px 200px at 50% 0%, rgba(255,215,106,0.18), transparent)" }} />
          <Crown className="relative mx-auto text-primary mb-5" />
          <div className="relative text-[11px] tracking-[0.5em] text-primary mb-4">COMING SOON</div>
          <p className="relative text-lg text-white/85 leading-relaxed">{description}</p>
          <div className="relative mt-8 inline-flex items-center gap-3 text-xs tracking-widest text-muted-foreground">
            <span className="h-2 w-2 rounded-full bg-primary animate-pulse" /> IN DEVELOPMENT
          </div>
        </div>
      </Section>
    </>
  );
}
