import { useEffect, useState, type ReactNode } from "react";
import { PageHero } from "./Section";

type Sec = { id: string; title: string; body: string };

export function LegalDoc({ eyebrow, title, sections }: { eyebrow: string; title: ReactNode; sections: Sec[] }) {
  const [active, setActive] = useState(sections[0].id);
  useEffect(() => {
    const obs = new IntersectionObserver((entries) => {
      entries.forEach(e => { if (e.isIntersecting) setActive(e.target.id); });
    }, { rootMargin: "-30% 0px -60% 0px" });
    sections.forEach(s => { const el = document.getElementById(s.id); if (el) obs.observe(el); });
    return () => obs.disconnect();
  }, [sections]);

  return (
    <>
      <PageHero eyebrow={eyebrow} title={title} />
      <div className="mx-auto max-w-7xl px-6 pb-32 grid lg:grid-cols-[260px_1fr] gap-12">
        <aside className="lg:sticky lg:top-28 self-start">
          <div className="text-[11px] tracking-[0.3em] text-primary mb-4">CONTENTS</div>
          <nav className="space-y-2 text-sm">
            {sections.map(s => (
              <a key={s.id} href={`#${s.id}`} className={`block py-1.5 border-l-2 pl-3 transition ${active === s.id ? "border-primary text-primary" : "border-white/10 text-muted-foreground hover:text-white"}`}>{s.title}</a>
            ))}
          </nav>
        </aside>
        <article className="space-y-16">
          {sections.map((s, i) => (
            <section key={s.id} id={s.id} className="scroll-mt-32 glass rounded-2xl p-8 sm:p-10">
              <div className="text-[11px] tracking-[0.4em] text-primary mb-3">SECTION 0{i+1}</div>
              <h2 className="font-display text-2xl sm:text-3xl mb-4">{s.title}</h2>
              <p className="text-base leading-[1.85] text-white/85 font-light">{s.body}</p>
              <div className="gold-divider mt-8" />
            </section>
          ))}
        </article>
      </div>
    </>
  );
}
