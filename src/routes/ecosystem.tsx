import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero, Section } from "@/components/sites/Section";
import { Sparkles, Layers, Vault, Palette, Crown, Baby, Store, ArrowRight } from "lucide-react";

export const Route = createFileRoute("/ecosystem")({
  head: () => ({ meta: [{ title: "Ecosystem — House of Joshi" }, { name: "description", content: "Every pillar of the House of Joshi sovereign Web3 ecosystem." }] }),
  component: Ecosystem,
});

const ITEMS = [
  { icon: Sparkles, name: "NFT Launchpad", to: "/nft-launchpad", desc: "The official portal for new Joshi NFT collections, drops and creator launches." },
  { icon: Layers, name: "Swap", to: "/swap", desc: "Secure multichain token swapping across the official Joshi ecosystem." },
  { icon: Vault, name: "Legacy Vault", to: "https://www.legacyvault.thehouseofjoshi.com/", external: true, desc: "A cinematic vault built for trust, permanence and future generations." },
  { icon: Palette, name: "Dreamweaver", to: "/dreamweaver", desc: "Mint the dreams as NFTs in an immersive creative atmosphere." },
  { icon: Crown, name: "Treasury / DAO", to: "/treasury", desc: "Sovereign governance, treasury operations and on-chain proposals." },
  { icon: Baby, name: "Kids", to: "/kids", desc: "A safe educational realm where the next generation learns Web3." },
  { icon: Store, name: "Merch Store", to: "/merch", desc: "Cinematic luxury fashion for citizens of the sovereign kingdom." },
];

function Ecosystem() {
  return (
    <>
      <PageHero eyebrow="THE ECOSYSTEM" title={<>One <span className="gold-text">sovereign empire</span>, many realms</>}
        subtitle="Every product in the House of Joshi ecosystem connects through a single sovereign identity." />
      <Section>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {ITEMS.map(e => (
            e.external ? (
              <a key={e.name} href={e.to} target="_blank" rel="noopener noreferrer" className="group glass rounded-2xl p-8 hover:-translate-y-1.5 hover:gold-glow-strong transition-all duration-500">
                <div className="h-14 w-14 rounded-xl bg-primary/10 border border-primary/30 flex items-center justify-center mb-5">
                  <e.icon size={22} className="text-primary" />
                </div>
                <h3 className="font-display text-2xl">{e.name}</h3>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{e.desc}</p>
                <div className="mt-6 text-xs tracking-widest text-primary flex items-center gap-2">ENTER <ArrowRight size={12} /></div>
              </a>
            ) : (
              <Link key={e.name} to={e.to} className="group glass rounded-2xl p-8 hover:-translate-y-1.5 hover:gold-glow-strong transition-all duration-500">
                <div className="h-14 w-14 rounded-xl bg-primary/10 border border-primary/30 flex items-center justify-center mb-5">
                  <e.icon size={22} className="text-primary" />
                </div>
                <h3 className="font-display text-2xl">{e.name}</h3>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{e.desc}</p>
                <div className="mt-6 text-xs tracking-widest text-primary flex items-center gap-2">ENTER <ArrowRight size={12} /></div>
              </Link>
            )
          ))}
        </div>
      </Section>
    </>
  );
}
