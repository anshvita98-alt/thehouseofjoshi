import { createFileRoute, Link } from "@tanstack/react-router";
import castle from "@/assets/castle-hero.jpg";
import { Section, GoldButton } from "@/components/sites/Section";

import { ArrowRight, ShieldCheck, Layers, Sparkles, Crown, Vault, Palette, Store, Baby, Coins, Orbit, ShoppingBag, Shirt } from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "House of Joshi — The Sovereign Web3 Ecosystem" },
      { name: "description", content: "A kingdom built on blockchain innovation. Launch, trade, create and own across chains." },
    ],
  }),
  component: Home,
});

const CHAINS = [
  { name: "Base", color: "#0052FF", logo: "/networks/base.svg" },
  { name: "Ethereum", color: "#627EEA", logo: "/networks/ethereum.svg" },
  { name: "Polygon", color: "#8247E5", logo: "/networks/polygon.svg" },
  { name: "BNB Chain", color: "#F3BA2F", logo: "/networks/binance-smart-chain.svg" },
  { name: "Arbitrum", color: "#28A0F0", logo: "/networks/arbitrum-one.svg" },
  { name: "Optimism", color: "#FF0420", logo: "/networks/optimism.svg" },
  { name: "Avalanche", color: "#E84142", logo: "/networks/avalanche.svg" },
  { name: "Unichain", color: "#F50DB4", logo: "/networks/unichain.svg" },
  { name: "Robinhood Chain", color: "#CCFF00", logo: "/networks/robinhood.svg" },
  { name: "Cronos", color: "#002D74", logo: "/networks/cronos.svg" },
  { name: "XRP", color: "#23292F", logo: "/networks/xrp.svg" },
];

const ECOSYSTEM = [
  { icon: Sparkles, name: "NFT Launchpad", to: "/nft-launchpad", desc: "Launch and mint sovereign collections through the official portal." },
  { icon: Layers, name: "Swap", to: "/swap", desc: "Multichain token swapping powered by the Joshi ecosystem." },
  { icon: ShoppingBag, name: "NFT Marketplace", to: "https://nftmarketplace.thehouseofjoshi.com/", external: true, desc: "Trade and discover exclusive NFT collections across the Joshi ecosystem." },
  { icon: Orbit, name: "Kingdom Within", to: "https://kingdomwithin.thehouseofjoshi.com/", external: true, desc: "Transform sacred text into verifiable frequency, color, and deterministic geometric form." },
  { icon: Vault, name: "Legacy Vault", to: "https://www.legacyvault.thehouseofjoshi.com/", external: true, desc: "Preserve heritage NFTs in a vault built for permanence." },
  { icon: Palette, name: "Dreamweaver", to: "/dreamweaver", desc: "Mint dreams as NFTs in a cinematic creative atmosphere." },
  { icon: Crown, name: "Treasury", to: "/treasury", desc: "Sovereign governance and on-chain treasury operations." },
  { icon: Baby, name: "Kids", to: "/kids", desc: "A safe educational realm to learn Web3 from the ground up." },
  { icon: Shirt, name: "Merch Store", to: "/merch", desc: "Cinematic luxury fashion designed for the sovereign kingdom." },
];

const TOKENS = [
  { name: "Queen Joshi", symbol: "$QUEENJOSHI", chain: "Base", url: "https://basescan.org/token/0x1f2f727f043e5f92371f853084242a3584c70aa5" },
  { name: "King Joshi", symbol: "$KINGJOSHI", chain: "Base", url: "https://basescan.org/token/0x8a668278adb0638df48411dc9971e1ad29516483" },
  { name: "KIND", symbol: "$KIND", chain: "Cronos", url: "https://explorer.cronos.org/address/0xb65e00ea8a113a819628a240d4c1702db5cc7aae" },
  { name: "NBAA", symbol: "$NBAA", chain: "Cronos", url: "https://explorer.cronos.org/address/0x190fd3e5172a41f8048d3f9d82e2ee2b2f8a29dd" },
];

function Home() {
  return (
    <>
      {/* HERO — castle blends seamlessly, no card/frame */}
      <section className="relative min-h-screen overflow-hidden">
        {/* Castle backdrop — not in a frame */}
        <div aria-hidden className="absolute inset-0">
          <img src={castle} alt="" width={1920} height={1280}
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-[42%] w-[140%] max-w-none opacity-90 select-none pointer-events-none animate-float"
            style={{
              maskImage: "radial-gradient(ellipse 70% 60% at 50% 55%, black 30%, transparent 80%)",
              WebkitMaskImage: "radial-gradient(ellipse 70% 60% at 50% 55%, black 30%, transparent 80%)",
            }} />
          {/* Gold aura */}
          <div className="absolute left-1/2 top-[55%] -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] rounded-full"
            style={{ background: "radial-gradient(circle, rgba(255,215,106,0.25), rgba(212,175,55,0.08) 40%, transparent 70%)", filter: "blur(20px)" }} />
          {/* Fog gradients */}
          <div className="absolute inset-x-0 bottom-0 h-[40vh]" style={{ background: "linear-gradient(180deg, transparent, #050505 80%)" }} />
          <div className="absolute inset-x-0 top-0 h-[30vh]" style={{ background: "linear-gradient(180deg, #050505, transparent)" }} />
        </div>

        <div className="relative z-10 mx-auto max-w-6xl px-6 pt-44 sm:pt-56 pb-32 text-center">
          <div className="text-[11px] tracking-[0.5em] text-primary mb-6 animate-fade-up">WELCOME TO</div>
          <h1 className="font-display text-5xl sm:text-7xl lg:text-[88px] leading-[1.02] animate-fade-up" style={{ animationDelay: "0.1s" }}>
            THE SOVEREIGN<br />
            <span className="gold-text">WEB3 ECOSYSTEM</span>
          </h1>
          <p className="mt-8 text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed animate-fade-up" style={{ animationDelay: "0.2s" }}>
            A kingdom built on blockchain innovation.<br />
            Launch, trade, create and own across chains.<br />
            Powering the next generation of digital ownership.
          </p>
          <div className="mt-12 flex flex-wrap items-center justify-center gap-4 animate-fade-up" style={{ animationDelay: "0.3s" }}>
            <GoldButton to="/ecosystem">Explore Ecosystem <ArrowRight size={16} className="ml-2" /></GoldButton>
          </div>
        </div>

        {/* Scroll cue */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-[10px] tracking-[0.4em] text-muted-foreground animate-pulse">SCROLL TO ENTER</div>
      </section>

      {/* CHAINS */}
      <Section eyebrow="MULTICHAIN INFRASTRUCTURE" title={<>Built across <span className="gold-text">sovereign networks</span></>}
        subtitle="The Joshi ecosystem spans the most established and emerging chains in the decentralized economy.">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-5">
          {CHAINS.map(c => (
            <div key={c.name} className="group relative glass rounded-2xl p-6 flex flex-col items-center text-center transition-all duration-500 hover:-translate-y-1 hover:gold-glow">
              <div className="relative h-16 w-16 rounded-full flex items-center justify-center mb-4"
                style={{ background: `radial-gradient(circle, ${c.color}55, transparent 70%)` }}>
                <div className="h-14 w-14 rounded-full overflow-hidden bg-white/95 flex items-center justify-center p-2"
                  style={{ boxShadow: `0 0 24px ${c.color}66` }}>
                  <img src={c.logo} alt={`${c.name} logo`} loading="lazy" className="h-full w-full object-contain" />
                </div>
              </div>
              <div className="text-sm font-medium">{c.name}</div>
            </div>
          ))}
        </div>
      </Section>

      {/* CINEMATIC TRAILER */}
      <Section eyebrow="THE KINGDOM" title={<>Witness the <span className="gold-text">House of Joshi</span></>}
        subtitle="A cinematic glimpse into the sovereign Web3 empire.">
        <div className="relative mx-auto max-w-5xl">
          <div className="relative glass-strong rounded-3xl overflow-hidden border border-primary/20 gold-glow">
            <video
              src="/house-of-joshi.mov"
              autoPlay muted loop playsInline preload="metadata"
              className="block w-full h-auto aspect-video object-cover"
            />
            <div className="pointer-events-none absolute inset-0 rounded-3xl ring-1 ring-inset ring-primary/15" />
            <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24" style={{ background: "linear-gradient(180deg, transparent, rgba(5,5,5,0.6))" }} />
          </div>
        </div>

      </Section>

      {/* ECOSYSTEM */}
      <Section eyebrow="THE ECOSYSTEM" title={<>A complete <span className="gold-text">decentralized kingdom</span></>}
        subtitle="Every pillar of the Joshi protocol — designed with luxury, built for permanence.">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {ECOSYSTEM.map((e, i) => (
            e.external ? (
              <a key={e.name} href={e.to} target="_blank" rel="noopener noreferrer" className="group relative glass rounded-2xl p-7 transition-all duration-500 hover:-translate-y-1.5 hover:gold-glow-strong"
                style={{ animationDelay: `${i * 60}ms` }}>
                <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition" style={{
                  background: "radial-gradient(400px 200px at 50% 0%, rgba(212,175,55,0.12), transparent)"
                }} />
                <div className="relative">
                  <div className="h-12 w-12 rounded-xl flex items-center justify-center bg-primary/10 border border-primary/30 mb-5">
                    <e.icon size={20} className="text-primary" />
                  </div>
                  <h3 className="font-display text-2xl mb-2">{e.name}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{e.desc}</p>
                  <div className="mt-5 text-xs tracking-widest text-primary flex items-center gap-2 opacity-70 group-hover:opacity-100 transition">ENTER <ArrowRight size={12} /></div>
                </div>
              </a>
            ) : (
              <Link key={e.name} to={e.to} className="group relative glass rounded-2xl p-7 transition-all duration-500 hover:-translate-y-1.5 hover:gold-glow-strong"
                style={{ animationDelay: `${i * 60}ms` }}>
                <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition" style={{
                  background: "radial-gradient(400px 200px at 50% 0%, rgba(212,175,55,0.12), transparent)"
                }} />
                <div className="relative">
                  <div className="h-12 w-12 rounded-xl flex items-center justify-center bg-primary/10 border border-primary/30 mb-5">
                    <e.icon size={20} className="text-primary" />
                  </div>
                  <h3 className="font-display text-2xl mb-2">{e.name}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{e.desc}</p>
                  <div className="mt-5 text-xs tracking-widest text-primary flex items-center gap-2 opacity-70 group-hover:opacity-100 transition">ENTER <ArrowRight size={12} /></div>
                </div>
              </Link>
            )
          ))}
        </div>
      </Section>

      {/* TOKEN SHOWCASE */}
      <Section eyebrow="TOKEN SHOWCASE" title={<>The <span className="gold-text">sovereign assets</span></>}
        subtitle="Verified on-chain. Owned by community. Powered by the Joshi protocol.">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {TOKENS.map(t => (
            <a key={t.symbol} href={t.url} target="_blank" rel="noreferrer noopener" className="group glass rounded-2xl p-6 transition-all hover:-translate-y-1 hover:gold-glow">
              <div className="h-14 w-14 rounded-full bg-gradient-to-br from-[#FFD76A] to-[#8a6f1f] flex items-center justify-center mb-4 group-hover:animate-pulse-glow">
                <Coins size={22} className="text-black" />
              </div>
              <div className="font-display text-lg">{t.name}</div>
              <div className="text-xs tracking-widest text-primary mt-1">{t.symbol}</div>
              <div className="text-xs text-muted-foreground mt-3">Network: {t.chain}</div>
              <div className="mt-4 text-[11px] tracking-widest text-muted-foreground group-hover:text-primary transition">VIEW ON EXPLORER ↗</div>
            </a>
          ))}
        </div>
      </Section>

      {/* CTA */}
      <Section>
        <div className="relative overflow-hidden rounded-3xl glass-strong p-12 sm:p-20 text-center">
          <div className="absolute -inset-1 opacity-50 pointer-events-none" style={{ background: "radial-gradient(600px 300px at 50% 0%, rgba(255,215,106,0.2), transparent)" }} />
          <div className="relative">
            <ShieldCheck className="mx-auto text-primary mb-6" />
            <h2 className="font-display text-3xl sm:text-5xl">Enter the <span className="gold-text">sovereign kingdom</span></h2>
            <p className="mt-4 text-muted-foreground max-w-xl mx-auto">Your wallet is your crown. Connect to step into the House of Joshi.</p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <GoldButton variant="outline" to="/whitepaper">Read Whitepaper</GoldButton>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}
