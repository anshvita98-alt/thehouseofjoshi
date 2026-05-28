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
              <div className="text-[11px] tracking-[0.3em] text-primary mb-4">SWAP PREVIEW</div>
              <div className="space-y-4">
                <div className="rounded-2xl bg-black/40 border border-primary/20 p-5">
                  <div className="text-xs text-muted-foreground">You pay</div>
                  <div className="mt-2 flex items-center justify-between">
                    <div className="font-display text-3xl">1.00</div>
                    <div className="rounded-full border border-primary/40 px-3 py-1 text-xs">ETH on Base</div>
                  </div>
                </div>
                <div className="flex justify-center"><div className="h-10 w-10 rounded-full border border-primary/40 flex items-center justify-center text-primary">↓</div></div>
                <div className="rounded-2xl bg-black/40 border border-primary/20 p-5">
                  <div className="text-xs text-muted-foreground">You receive</div>
                  <div className="mt-2 flex items-center justify-between">
                    <div className="font-display text-3xl gold-text">≈ 2,431.20</div>
                    <div className="rounded-full border border-primary/40 px-3 py-1 text-xs">USDC on Base</div>
                  </div>
                </div>
                <GoldButton href="https://swap.thehouseofjoshi.com/" external>Continue on Joshi Swap ↗</GoldButton>
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
