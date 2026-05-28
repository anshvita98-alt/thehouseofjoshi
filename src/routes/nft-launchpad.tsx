import { createFileRoute } from "@tanstack/react-router";
import { PageHero, Section, GoldButton } from "@/components/sites/Section";

export const Route = createFileRoute("/nft-launchpad")({
  head: () => ({ meta: [{ title: "NFT Launchpad — House of Joshi" }, { name: "description", content: "Access the official Joshi NFT Launchpad." }] }),
  component: Launchpad,
});

function Launchpad() {
  return (
    <>
      <PageHero eyebrow="OFFICIAL PORTAL" title={<>House of Joshi <span className="gold-text">Launchpad</span></>}
        subtitle="Access the official Joshi NFT Launchpad.">
        <GoldButton href="https://www.nftlaunchpad.thehouseofjoshi.com/" external>Open Launchpad ↗</GoldButton>
      </PageHero>

      <Section>
        <div className="max-w-3xl mx-auto text-center mb-12">
          <p className="text-lg text-muted-foreground leading-relaxed">
            Explore, launch, and mint new collections through our dedicated launchpad platform.
          </p>
        </div>
        <div className="glass-strong rounded-3xl p-10 sm:p-14 max-w-3xl mx-auto">
          <div className="text-[11px] tracking-[0.4em] text-primary mb-4">LAUNCHPAD ACCESS</div>
          <h2 className="font-display text-3xl sm:text-4xl mb-6">A dedicated portal for sovereign creators</h2>
          <p className="text-muted-foreground leading-relaxed">
            Visit the House of Joshi NFT Launchpad to discover featured drops, manage launches, and connect with the NFT ecosystem.
          </p>
          <ul className="mt-6 space-y-3 text-sm">
            <li className="flex gap-3"><span className="text-primary">◆</span>Official launchpad portal for new collections</li>
            <li className="flex gap-3"><span className="text-primary">◆</span>Secure access via the House of Joshi domain</li>
            <li className="flex gap-3"><span className="text-primary">◆</span>Designed for creators, collectors, and community members</li>
          </ul>
          <div className="gold-divider my-8" />
          <div className="text-[11px] tracking-[0.4em] text-primary mb-3">HOW TO USE</div>
          <p className="text-sm text-muted-foreground leading-relaxed">
            Click the button above to open the launchpad in a new tab. If you need support, return to the House of Joshi site for guides, FAQs, and tools.
          </p>
          <div className="mt-8">
            <GoldButton href="https://www.nftlaunchpad.thehouseofjoshi.com/" external>Open Launchpad ↗</GoldButton>
          </div>
        </div>
      </Section>
    </>
  );
}
