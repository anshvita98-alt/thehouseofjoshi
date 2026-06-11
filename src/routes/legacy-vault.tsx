import { createFileRoute } from "@tanstack/react-router";
import { PageHero, Section, GoldButton } from "@/components/sites/Section";
import vault from "@/assets/vault.jpg";

export const Route = createFileRoute("/legacy-vault")({
  head: () => ({ meta: [{ title: "Legacy Vault — House of Joshi" }, { name: "description", content: "Preserve what matters forever." }] }),
  component: LegacyVault,
});

function LegacyVault() {
  return (
    <>
      <PageHero eyebrow="THE ARCHIVE" title={<>Legacy <span className="gold-text">Vault</span></>}
        subtitle="Preserve what matters forever.">
        <GoldButton href="https://www.legacyvault.thehouseofjoshi.com/" external>Open Legacy Vault ↗</GoldButton>
      </PageHero>

      <section className="relative">
        <div className="relative h-[60vh] sm:h-[80vh] overflow-hidden">
          <img src={vault} alt="Cinematic gold vault door" width={1920} height={1080} loading="lazy"
            className="absolute inset-0 w-full h-full object-cover opacity-90"
            style={{
              maskImage: "radial-gradient(ellipse 70% 80% at 50% 50%, black 40%, transparent 90%)",
              WebkitMaskImage: "radial-gradient(ellipse 70% 80% at 50% 50%, black 40%, transparent 90%)",
            }} />
          <div className="absolute inset-x-0 bottom-0 h-40" style={{ background: "linear-gradient(180deg, transparent, #050505)" }} />
        </div>
      </section>

      <Section>
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-display text-3xl sm:text-5xl">A vault built for <span className="gold-text">generations</span></h2>
          <p className="mt-5 text-muted-foreground leading-relaxed">
            Store your heritage NFTs in a beautifully designed vault built for trust, permanence and future generations. Anchored on-chain, mirrored across decentralized storage, and protected by sovereign keys.
          </p>
          <div className="mt-8">
            <GoldButton href="https://www.legacyvault.thehouseofjoshi.com/" external>Enter the Vault ↗</GoldButton>
          </div>
        </div>
      </Section>
    </>
  );
}
