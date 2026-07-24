import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { PageHero } from "@/components/sites/Section";

export const Route = createFileRoute("/whitepaper")({
  head: () => ({ meta: [{ title: "Whitepaper — House of Joshi" }, { name: "description", content: "The institutional whitepaper for the House of Joshi sovereign protocol." }] }),
  component: Whitepaper,
});

const SECTIONS = [
  { id: "executive-summary", title: "Executive Summary", body: "House of Joshi is a decentralized protocol for preserving digital heirlooms across generations using blockchain technology, NFT ownership, distributed storage, and sovereign identity systems. We combine immutable on-chain records with permanent decentralized storage to ensure that culture, memory and creative work survive far beyond the platforms of today." },
  { id: "vision", title: "Vision & Problem Statement", body: "Centralized platforms decay. Files vanish, accounts disappear, services shut down. Heritage that was meant to last for generations is lost within a decade. The House of Joshi protocol replaces this fragility with a sovereign, multichain framework purpose-built for permanence." },
  { id: "pillars", title: "Three Pillars", body: "Sovereignty — self-custody by default, no platform lock-in. Permanence — multi-redundant decentralized storage with on-chain verification. Heritage — composable identity for individuals, families, and creative estates that persist across generations." },
  { id: "protocol", title: "Heirloom Protocol Specification", body: "The Heirloom Protocol defines a standard for inheritable NFTs: verifiable lineage, time-locked transfers, multi-signature guardianship, and provenance hashes anchored across multiple chains. Smart contracts coordinate with decentralized storage networks to guarantee that the asset and its metadata are mirrored, signed, and recoverable indefinitely." },
  { id: "kingdom-within", title: "Kingdom Within / Malkuta Protocol", body: "Kingdom Within is a deterministic scripture-geometry instrument. It maps canonical source text through a transparent protocol to reproducible harmonic frequency, color, and geometric form. Identical source text and protocol versions yield identical artifacts, enabling public verification, immutable provenance, and canonical minting on Base." },
  { id: "tokenomics", title: "Token Economics", body: "Native ecosystem tokens — including $QUEENJOSHI and $KINGJOSHI on Base, $KIND and $NBAA on Cronos — coordinate governance, staking rewards, and treasury operations. Supply is fixed, emissions are transparent, and protocol fees flow back to long-term participants." },
  { id: "infrastructure", title: "Multi-Chain Infrastructure", body: "The protocol operates across Ethereum, Base, Cronos, Shibarium and XRP, with USDC on Base as the canonical settlement asset. Cross-chain messaging enables a unified user experience while preserving the sovereignty of each underlying network." },
  { id: "governance", title: "Governance & Treasury", body: "A sovereign DAO governs treasury allocation, protocol upgrades, and ecosystem grants. On-chain proposals, weighted voting, and transparent reporting ensure that the kingdom is owned by its citizens." },
  { id: "security", title: "Security & Auditability", body: "All core contracts undergo independent audits. The protocol favors minimal, formally-verifiable code. Treasury holdings, contract upgrades, and key operations are observable on-chain at all times." },
  { id: "conclusion", title: "Conclusion", body: "House of Joshi is more than a Web3 project — it is a generational covenant. A sovereign ecosystem where blockchain technology serves the timeless values of legacy, art and heritage." },
];

function Whitepaper() {
  const [active, setActive] = useState(SECTIONS[0].id);
  useEffect(() => {
    const obs = new IntersectionObserver((entries) => {
      entries.forEach(e => { if (e.isIntersecting) setActive(e.target.id); });
    }, { rootMargin: "-30% 0px -60% 0px" });
    SECTIONS.forEach(s => { const el = document.getElementById(s.id); if (el) obs.observe(el); });
    return () => obs.disconnect();
  }, []);

  return (
    <>
      <PageHero eyebrow="INSTITUTIONAL DOCUMENT" title={<>The <span className="gold-text">Whitepaper</span></>}
        subtitle="A protocol for preserving digital heirlooms across generations." />
      <div className="mx-auto max-w-7xl px-6 pb-32 grid lg:grid-cols-[260px_1fr] gap-12">
        <aside className="lg:sticky lg:top-28 self-start">
          <div className="text-[11px] tracking-[0.3em] text-primary mb-4">CONTENTS</div>
          <nav className="space-y-2 text-sm">
            {SECTIONS.map((s, i) => (
              <a key={s.id} href={`#${s.id}`} className={`block py-1.5 border-l-2 pl-3 transition ${active === s.id ? "border-primary text-primary" : "border-white/10 text-muted-foreground hover:text-white"}`}>
                <span className="text-[10px] tracking-widest mr-2 opacity-60">0{i + 1}</span>{s.title}
              </a>
            ))}
          </nav>
        </aside>
        <article className="space-y-20">
          {SECTIONS.map((s, i) => (
            <section key={s.id} id={s.id} className="scroll-mt-32">
              <div className="text-[11px] tracking-[0.4em] text-primary mb-3">SECTION 0{i + 1}</div>
              <h2 className="font-display text-3xl sm:text-4xl mb-6">{s.title}</h2>
              <p className="text-base sm:text-lg leading-[1.85] text-white/85 font-light">{s.body}</p>
              <div className="gold-divider mt-12" />
            </section>
          ))}
        </article>
      </div>
    </>
  );
}
