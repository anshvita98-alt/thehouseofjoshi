// Updated swap preview
import { createFileRoute } from "@tanstack/react-router";
import { PageHero, Section, GoldButton } from "@/components/sites/Section";
import { Layers, Shield, Zap } from "lucide-react";

export const Route = createFileRoute("/swap")({
  head: () => ({ meta: [{ title: "Swap — House of Joshi" }, { name: "description", content: "Access secure multichain token swapping through the House of Joshi ecosystem." }] }),
  component: Swap,
});

function Swap() {
  return (
    <>
      <PageHero eyebrow="MULTICHAIN" title={<>House of Joshi <span className="gold-text">Swap</span></>}
        subtitle="Access secure multichain token swapping through the official House of Joshi ecosystem.">
        <GoldButton href="https://swap.thehouseofjoshi.com/" external>Open Swap ↗</GoldButton>
      </PageHero>

      <Section>
        <div className="grid lg:grid-cols-[1.1fr_1fr] gap-10 items-start">
          <div className="relative glass-strong rounded-3xl p-10 overflow-hidden">
            <div className="absolute -top-20 -right-20 h-72 w-72 rounded-full" style={{ background: "radial-gradient(circle, rgba(255,215,106,0.35), transparent 70%)" }} />
            <div className="relative">
              <div className="text-[11px] tracking-[0.3em] text-primary mb-4">🏆 JOSHI SWAP UPDATED 🏆</div>
              <div className="space-y-6">
                <div>
                  <div className="font-display text-3xl leading-snug">Trade tokens across chains — from one sovereign portal.</div>
                  <div className="mt-3 text-sm text-muted-foreground leading-relaxed">
                    Connect your wallet and swap instantly. Best-execution routing finds you the sharpest rate across leading DEX aggregators — no intermediaries, no custody.
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-3">
                  {[
                    { label: "Chains supported", value: "5+" },
                    { label: "Custody model", value: "Self" },
                    { label: "Routing", value: "Best-rate" },
                    { label: "Wallet required", value: "Yes" },
                  ].map(s => (
                    <div key={s.label} className="rounded-xl bg-black/40 border border-primary/20 p-4">
                      <div className="text-xs text-muted-foreground">{s.label}</div>
                      <div className="mt-1 font-display text-lg gold-text">{s.value}</div>
                    </div>
                  ))}
                </div>
                <GoldButton href="https://swap.thehouseofjoshi.com/" external>Open Joshi Swap ↗</GoldButton>
              </div>
            </div>
          </div>

          <div className="space-y-5">
            {[
              { icon: Layers, t: "Multichain by design", d: "Trade across Ethereum, Base, Cronos, Shibarium and XRP from one sovereign portal." },
              { icon: Shield, t: "Self-custody first", d: "Connect your own wallet. The Joshi protocol never holds your assets." },
              { icon: Zap, t: "Optimized routing", d: "Best-execution routing across the leading DEX aggregators." },
            ].map(f => (
              <div key={f.t} className="glass rounded-2xl p-6 flex gap-5">
                <div className="h-11 w-11 shrink-0 rounded-xl bg-primary/10 border border-primary/30 flex items-center justify-center"><f.icon size={18} className="text-primary" /></div>
                <div>
                  <div className="font-display text-lg">{f.t}</div>
                  <div className="text-sm text-muted-foreground mt-1">{f.d}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>
    </>
  );
}
