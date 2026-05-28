import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero, Section } from "@/components/sites/Section";
import { Shield, KeyRound, CheckCircle2, ShieldCheck, Globe, Lock, FileSignature } from "lucide-react";

function Principle({ icon: Icon, title, body }: { icon: any; title: string; body: string }) {
  return (
    <div className="glass-strong rounded-2xl p-7 border border-primary/15 hover:border-primary/40 transition">
      <div className="h-11 w-11 rounded-xl bg-primary/10 border border-primary/30 grid place-items-center text-primary mb-5">
        <Icon size={22} />
      </div>
      <h3 className="font-display text-xl mb-2">{title}</h3>
      <p className="text-sm text-white/75 leading-relaxed">{body}</p>
    </div>
  );
}

function Practice({ icon: Icon, title, body }: { icon: any; title: string; body: string }) {
  return (
    <div className="flex gap-4 p-5 rounded-xl glass border border-primary/10">
      <div className="h-10 w-10 shrink-0 rounded-lg bg-primary/10 border border-primary/25 grid place-items-center text-primary">
        <Icon size={18} />
      </div>
      <div>
        <div className="font-medium text-white/90 mb-1">{title}</div>
        <p className="text-sm text-white/70 leading-relaxed">{body}</p>
      </div>
    </div>
  );
}

function SecurityPage() {
  return (
    <>
      <PageHero
        eyebrow="SECURITY & TRUST"
        title={<>Protected by <span className="gold-text">Sovereign Protocol</span></>}
        subtitle="Your legacy deserves the highest standard of on-chain security. The House of Joshi is built on audited smart contracts, self-custody, and transparent verification."
      />

      <Section eyebrow="WHY YOUR LEGACY IS PROTECTED" title={<>Core security <span className="gold-text">principles</span></>} subtitle="The pillars of the sovereign kingdom.">
        <div className="grid md:grid-cols-3 gap-5">
          <Principle icon={KeyRound} title="Self-Custody Guaranteed" body="You own your private keys. No centralized entity can freeze or confiscate your heirlooms." />
          <Principle icon={CheckCircle2} title="On-Chain Verified" body="Every transaction is immutable, verifiable, and transparent. Full audit trail forever." />
          <Principle icon={ShieldCheck} title="Smart Contract Audited" body="All contracts security-audited. Protected by Sovereign Legacy Shield anti-scam protocols." />
        </div>
      </Section>

      <Section>
        <div className="relative max-w-5xl mx-auto glass-strong rounded-3xl p-10 sm:p-14 overflow-hidden border border-primary/20">
          <div className="absolute -inset-px rounded-3xl pointer-events-none" style={{ background: "radial-gradient(700px 240px at 50% 0%, rgba(255,215,106,0.18), transparent)" }} />
          <div className="relative">
            <div className="flex items-center gap-3 mb-4">
              <Shield className="text-primary" />
              <div className="text-[11px] tracking-[0.4em] text-primary">SOVEREIGN LEGACY SHIELD</div>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl mb-5">Built for long-term heritage preservation</h2>
            <p className="text-white/80 leading-relaxed mb-4">
              The House of Joshi deploys smart contracts designed for long-term heritage preservation. Protocol upgrades follow governance and transparency standards so the community understands every change.
            </p>
            <h3 className="font-display text-xl mt-8 mb-3 gold-text">How your assets are protected</h3>
            <p className="text-white/80 leading-relaxed mb-3">
              All smart contracts undergo security review before mainnet deployment. Assets live on immutable blockchains with cryptographic protection. You retain self-custody keys — only you can move your legacy.
            </p>
            <p className="text-white/80 leading-relaxed">
              We never take custody of your tokens or NFTs. Wallet connections are read/sign-only through your chosen provider (MetaMask, WalletConnect, and others).
            </p>
          </div>
        </div>
      </Section>

      <Section eyebrow="BEST PRACTICES" title={<>Stay <span className="gold-text">sovereign</span>, stay safe</>}>
        <div className="grid md:grid-cols-3 gap-4">
          <Practice icon={Globe} title="Verify URLs" body="Only connect on official House of Joshi domains. Bookmark the site you trust." />
          <Practice icon={Lock} title="Protect your seed phrase" body="Never share your recovery phrase. The House will never ask for it." />
          <Practice icon={FileSignature} title="Review transactions" body="Confirm contract addresses and amounts in your wallet before signing." />
        </div>
      </Section>

      <Section>
        <div className="max-w-4xl mx-auto glass rounded-2xl p-8 sm:p-10 border border-primary/15">
          <div className="text-[11px] tracking-[0.4em] text-primary mb-4">IMPORTANT DISCLAIMER</div>
          <h3 className="font-display text-2xl mb-4">Not financial advice</h3>
          <p className="text-white/75 leading-relaxed mb-5">
            The House of Joshi does not provide financial, investment, tax, or legal advice. Nothing on this site is a solicitation or offer to buy or sell any asset. You are solely responsible for your own decisions and due diligence.
          </p>
          <h3 className="font-display text-2xl mb-4">No liability for outcomes</h3>
          <p className="text-white/75 leading-relaxed">
            We are not responsible for any losses, gains, damages, or other outcomes arising from your use of this website, our apps, smart contracts, wallet connections, swaps, staking, minting, or any third-party services. Digital assets involve substantial risk, including total loss of funds. Past performance does not guarantee future results.
          </p>
          <div className="gold-divider my-8" />
          <p className="text-sm text-white/70">
            Questions? See our <Link to="/faq" className="text-primary hover:underline">FAQ</Link>, read the <Link to="/terms" className="text-primary hover:underline">Terms</Link>, or view the <Link to="/whitepaper" className="text-primary hover:underline">Whitepaper</Link>.
          </p>
        </div>
      </Section>
    </>
  );
}

export const Route = createFileRoute("/security")({
  head: () => ({
    meta: [
      { title: "Security & Trust — House of Joshi" },
      { name: "description", content: "How the House of Joshi protects your legacy: audited smart contracts, self-custody, and the Sovereign Legacy Shield." },
      { property: "og:title", content: "Security & Trust — House of Joshi" },
      { property: "og:description", content: "Audited smart contracts, self-custody, and Sovereign Legacy Shield protection." },
    ]
  }),
  component: SecurityPage,
});
