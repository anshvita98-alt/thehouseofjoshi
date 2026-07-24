import { createFileRoute } from "@tanstack/react-router";
import { PageHero, Section } from "@/components/sites/Section";
import { Crown, Sparkles, Shield, Infinity as Inf, Heart } from "lucide-react";

export const Route = createFileRoute("/about")({
  head: () => ({ meta: [{ title: "About — House of Joshi" }, { name: "description", content: "A new paradigm in legacy, art and blockchain sovereignty." }] }),
  component: About,
});

const PRINCIPLES = [
  { icon: Crown, name: "Sovereignty", desc: "Self-custody and decentralization are non-negotiable foundations." },
  { icon: Inf, name: "Permanence", desc: "We build for centuries, not cycles. Heritage that endures forever." },
  { icon: Heart, name: "Heritage", desc: "Stories, memories and culture preserved on immutable chains." },
  { icon: Sparkles, name: "Impact", desc: "Empowering creators and communities to shape the next paradigm." },
];

function About() {
  return (
    <>
      <PageHero eyebrow="OUR STORY" title={<>A New Paradigm in Legacy, Art, and <span className="gold-text">Blockchain Sovereignty</span></>}
        subtitle="We exist to preserve stories, empower creators, and make Web3 a place where heritage endures forever." />

      <Section eyebrow="OUR PURPOSE" title={<>Building a kingdom of <span className="gold-text">permanence</span></>}
        subtitle="The House of Joshi is not a product — it is a paradigm. A sovereign ecosystem where art, identity, and legacy are protected by the immutability of the blockchain.">
        <div className="grid md:grid-cols-2 gap-8">
          <div className="glass rounded-2xl p-8">
            <h3 className="font-display text-2xl mb-3">Our Origin</h3>
            <p className="text-muted-foreground leading-relaxed">Founded at the intersection of art, heritage, and blockchain, House of Joshi began as a vision — to build a Web3 ecosystem rooted in timeless values rather than fleeting trends. From this vision the Heirloom Protocol was born.</p>
          </div>
          <div className="glass rounded-2xl p-8">
            <h3 className="font-display text-2xl mb-3">Our Future</h3>
            <p className="text-muted-foreground leading-relaxed">A multichain sovereign empire — DAO governance, generational vaults, NFT launchpads, creative tooling, educational realms, and Kingdom Within's deterministic scripture geometry — all designed to outlast generations.</p>
          </div>
        </div>
      </Section>

      <Section eyebrow="OUR PRINCIPLES" title={<>The <span className="gold-text">four pillars</span></>}>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {PRINCIPLES.map(p => (
            <div key={p.name} className="glass rounded-2xl p-7 hover:gold-glow transition">
              <div className="h-12 w-12 rounded-xl bg-primary/10 border border-primary/30 flex items-center justify-center mb-4">
                <p.icon size={20} className="text-primary" />
              </div>
              <h4 className="font-display text-xl mb-2">{p.name}</h4>
              <p className="text-sm text-muted-foreground leading-relaxed">{p.desc}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section eyebrow="LEADERSHIP" title={<>The <span className="gold-text">sovereigns</span></>}>
        <div className="grid md:grid-cols-2 gap-8">
          {[
            { name: "Queen Joshi", role: "Founder & Creative Director", letter: "Q" },
            { name: "King Joshi", role: "Co-Founder & Strategy Architect", letter: "K" },
          ].map(p => (
            <div key={p.name} className="glass rounded-2xl p-10 text-center hover:gold-glow-strong transition">
              <div className="mx-auto h-28 w-28 rounded-full bg-gradient-to-br from-[#FFD76A] to-[#8a6f1f] flex items-center justify-center font-display text-5xl text-black animate-pulse-glow">{p.letter}</div>
              <h3 className="mt-6 font-display text-3xl">{p.name}</h3>
              <div className="mt-2 text-xs tracking-[0.3em] text-primary">{p.role.toUpperCase()}</div>
              <Shield size={14} className="mx-auto mt-5 text-muted-foreground" />
            </div>
          ))}
        </div>
      </Section>
    </>
  );
}
