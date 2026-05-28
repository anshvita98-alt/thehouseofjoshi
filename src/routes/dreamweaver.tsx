import { createFileRoute } from "@tanstack/react-router";
import { PageHero, Section, GoldButton } from "@/components/sites/Section";
import dream from "@/assets/dreamweaver.jpg";

export const Route = createFileRoute("/dreamweaver")({
  head: () => ({ meta: [{ title: "Dreamweaver — House of Joshi" }, { name: "description", content: "Mint the dreams as NFTs." }] }),
  component: Dreamweaver,
});

function Dreamweaver() {
  return (
    <>
      <section className="relative pt-32 pb-20 overflow-hidden">
        <img src={dream} alt="" aria-hidden width={1920} height={1080} loading="lazy"
          className="absolute inset-0 w-full h-full object-cover opacity-60"
          style={{ maskImage: "linear-gradient(180deg, transparent, black 30%, black 70%, transparent)", WebkitMaskImage: "linear-gradient(180deg, transparent, black 30%, black 70%, transparent)" }} />
        <div className="relative mx-auto max-w-5xl px-6 text-center pt-24 pb-24 animate-fade-up">
          <div className="text-[11px] tracking-[0.5em] text-primary mb-5">CINEMATIC STORYTELLING</div>
          <h1 className="font-display text-5xl sm:text-7xl">Dream<span className="gold-text">weaver</span></h1>
          <p className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto">Mint the dreams as NFTs.</p>
          <div className="mt-10">
            <GoldButton href="https://dreamweaver.thehouseofjoshi.com/" external>Open Dreamweaver ↗</GoldButton>
          </div>
        </div>
      </section>

      <Section>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            { t: "Cinematic atmosphere", d: "An immersive creative space designed to feel like a waking dream." },
            { t: "Mint your visions", d: "Capture and preserve dreams as sovereign on-chain NFTs." },
            { t: "Built for storytellers", d: "A canvas for artists, poets and visionaries of the kingdom." },
          ].map(f => (
            <div key={f.t} className="glass rounded-2xl p-7">
              <h3 className="font-display text-xl mb-2">{f.t}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{f.d}</p>
            </div>
          ))}
        </div>
      </Section>
    </>
  );
}
