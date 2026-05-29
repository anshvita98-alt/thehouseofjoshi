import { j as jsxRuntimeExports } from "../_libs/react.mjs";
import { L as Link } from "../_libs/tanstack__react-router.mjs";
import { P as PageHero, S as Section } from "./Section-BXon4VAY.mjs";
import { K as KeyRound, a as CircleCheck, h as ShieldCheck, S as Shield, G as Globe, e as Lock, F as FilePenLine } from "../_libs/lucide-react.mjs";
import "../_libs/tanstack__router-core.mjs";
import "../_libs/tanstack__history.mjs";
import "../_libs/cookie-es.mjs";
import "../_libs/seroval.mjs";
import "../_libs/seroval-plugins.mjs";
import "node:stream/web";
import "node:stream";
import "../_libs/react-dom.mjs";
import "util";
import "crypto";
import "async_hooks";
import "stream";
import "../_libs/isbot.mjs";
function Principle({
  icon: Icon,
  title,
  body
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "glass-strong rounded-2xl p-7 border border-primary/15 hover:border-primary/40 transition", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-11 w-11 rounded-xl bg-primary/10 border border-primary/30 grid place-items-center text-primary mb-5", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { size: 22 }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-xl mb-2", children: title }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-white/75 leading-relaxed", children: body })
  ] });
}
function Practice({
  icon: Icon,
  title,
  body
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-4 p-5 rounded-xl glass border border-primary/10", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-10 w-10 shrink-0 rounded-lg bg-primary/10 border border-primary/25 grid place-items-center text-primary", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { size: 18 }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-medium text-white/90 mb-1", children: title }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-white/70 leading-relaxed", children: body })
    ] })
  ] });
}
function SecurityPage() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(PageHero, { eyebrow: "SECURITY & TRUST", title: /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
      "Protected by ",
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "gold-text", children: "Sovereign Protocol" })
    ] }), subtitle: "Your legacy deserves the highest standard of on-chain security. The House of Joshi is built on audited smart contracts, self-custody, and transparent verification." }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Section, { eyebrow: "WHY YOUR LEGACY IS PROTECTED", title: /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
      "Core security ",
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "gold-text", children: "principles" })
    ] }), subtitle: "The pillars of the sovereign kingdom.", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid md:grid-cols-3 gap-5", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Principle, { icon: KeyRound, title: "Self-Custody Guaranteed", body: "You own your private keys. No centralized entity can freeze or confiscate your heirlooms." }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Principle, { icon: CircleCheck, title: "On-Chain Verified", body: "Every transaction is immutable, verifiable, and transparent. Full audit trail forever." }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Principle, { icon: ShieldCheck, title: "Smart Contract Audited", body: "All contracts security-audited. Protected by Sovereign Legacy Shield anti-scam protocols." })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Section, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative max-w-5xl mx-auto glass-strong rounded-3xl p-10 sm:p-14 overflow-hidden border border-primary/20", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute -inset-px rounded-3xl pointer-events-none", style: {
        background: "radial-gradient(700px 240px at 50% 0%, rgba(255,215,106,0.18), transparent)"
      } }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 mb-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Shield, { className: "text-primary" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[11px] tracking-[0.4em] text-primary", children: "SOVEREIGN LEGACY SHIELD" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-3xl sm:text-4xl mb-5", children: "Built for long-term heritage preservation" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-white/80 leading-relaxed mb-4", children: "The House of Joshi deploys smart contracts designed for long-term heritage preservation. Protocol upgrades follow governance and transparency standards so the community understands every change." }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-xl mt-8 mb-3 gold-text", children: "How your assets are protected" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-white/80 leading-relaxed mb-3", children: "All smart contracts undergo security review before mainnet deployment. Assets live on immutable blockchains with cryptographic protection. You retain self-custody keys — only you can move your legacy." }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-white/80 leading-relaxed", children: "We never take custody of your tokens or NFTs. Wallet connections are read/sign-only through your chosen provider (MetaMask, WalletConnect, and others)." })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Section, { eyebrow: "BEST PRACTICES", title: /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
      "Stay ",
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "gold-text", children: "sovereign" }),
      ", stay safe"
    ] }), children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid md:grid-cols-3 gap-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Practice, { icon: Globe, title: "Verify URLs", body: "Only connect on official House of Joshi domains. Bookmark the site you trust." }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Practice, { icon: Lock, title: "Protect your seed phrase", body: "Never share your recovery phrase. The House will never ask for it." }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Practice, { icon: FilePenLine, title: "Review transactions", body: "Confirm contract addresses and amounts in your wallet before signing." })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Section, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-4xl mx-auto glass rounded-2xl p-8 sm:p-10 border border-primary/15", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[11px] tracking-[0.4em] text-primary mb-4", children: "IMPORTANT DISCLAIMER" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-2xl mb-4", children: "Not financial advice" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-white/75 leading-relaxed mb-5", children: "The House of Joshi does not provide financial, investment, tax, or legal advice. Nothing on this site is a solicitation or offer to buy or sell any asset. You are solely responsible for your own decisions and due diligence." }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-2xl mb-4", children: "No liability for outcomes" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-white/75 leading-relaxed", children: "We are not responsible for any losses, gains, damages, or other outcomes arising from your use of this website, our apps, smart contracts, wallet connections, swaps, staking, minting, or any third-party services. Digital assets involve substantial risk, including total loss of funds. Past performance does not guarantee future results." }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "gold-divider my-8" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-sm text-white/70", children: [
        "Questions? See our ",
        /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/faq", className: "text-primary hover:underline", children: "FAQ" }),
        ", read the ",
        /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/terms", className: "text-primary hover:underline", children: "Terms" }),
        ", or view the ",
        /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/whitepaper", className: "text-primary hover:underline", children: "Whitepaper" }),
        "."
      ] })
    ] }) })
  ] });
}
export {
  SecurityPage as component
};
