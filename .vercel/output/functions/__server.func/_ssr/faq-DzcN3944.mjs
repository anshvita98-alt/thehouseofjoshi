import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { P as PageHero, S as Section } from "./Section-BXon4VAY.mjs";
import { C as ChevronDown } from "../_libs/lucide-react.mjs";
const FAQS = [{
  q: "What is House of Joshi?",
  a: "House of Joshi is a sovereign Web3 ecosystem on Base — combining a swap, NFT launchpad, Legacy Vault, Dreamweaver, staking and DAO treasury into one heritage-driven kingdom."
}, {
  q: "Which chain is the ecosystem built on?",
  a: "The House of Joshi is deployed on Base, an Ethereum L2 secured by Optimism rollup technology. All contracts and assets live on-chain."
}, {
  q: "Do I need to create an account?",
  a: "No. The ecosystem is fully non-custodial. You connect your own wallet (MetaMask, WalletConnect, etc.) and sign transactions yourself — there are no usernames or passwords."
}, {
  q: "Is the House of Joshi custodial?",
  a: "Never. We do not hold your tokens, NFTs or keys. Self-custody is guaranteed by design."
}, {
  q: "Are the smart contracts audited?",
  a: "All core contracts undergo security review before mainnet deployment and are protected by the Sovereign Legacy Shield protocols."
}, {
  q: "What is the Legacy Vault?",
  a: "A long-term on-chain vault for preserving stories, heirlooms and digital legacies across generations, secured by immutable smart contracts."
}, {
  q: "How do I stake?",
  a: "Visit the Staking page, connect your wallet on Base, choose an amount and confirm in your wallet. Rewards accrue on-chain and can be claimed at any time."
}, {
  q: "Is this financial advice?",
  a: "No. Nothing on this site is financial, investment, tax or legal advice. Digital assets carry risk including total loss. Always do your own research."
}, {
  q: "Where can I read the Whitepaper?",
  a: "The full Whitepaper is available from the footer or directly at /whitepaper. It outlines the vision, tokenomics and governance of the kingdom."
}, {
  q: "How do I contact the team?",
  a: "Through the Contact page, our official Discord, X (Twitter), or by emailing support@thehouseofjoshi.com."
}];
function Item({
  q,
  a,
  open,
  onToggle
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "glass rounded-2xl border border-primary/15 overflow-hidden", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick: onToggle, className: "w-full flex items-center justify-between gap-4 px-6 py-5 text-left", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-display text-base sm:text-lg text-white/90", children: q }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronDown, { className: `shrink-0 text-primary transition-transform ${open ? "rotate-180" : ""}`, size: 20 })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `grid transition-all duration-300 ${open ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`, children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "px-6 pb-6 text-sm sm:text-base text-white/75 leading-relaxed", children: a }) }) })
  ] });
}
function FaqPage() {
  const [open, setOpen] = reactExports.useState(0);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(PageHero, { eyebrow: "SUPPORT", title: /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
      "Frequently Asked ",
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "gold-text", children: "Questions" })
    ] }), subtitle: "Everything you need to know about the House of Joshi — security, ecosystem, and how to participate." }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Section, { children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "max-w-3xl mx-auto space-y-3", children: FAQS.map((f, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(Item, { q: f.q, a: f.a, open: open === i, onToggle: () => setOpen(open === i ? null : i) }, i)) }) })
  ] });
}
export {
  FaqPage as component
};
