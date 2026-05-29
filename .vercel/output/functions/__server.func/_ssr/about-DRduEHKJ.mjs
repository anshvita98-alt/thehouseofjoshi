import { j as jsxRuntimeExports } from "../_libs/react.mjs";
import { P as PageHero, S as Section } from "./Section-BXon4VAY.mjs";
import { c as Crown, I as Infinity, H as Heart, i as Sparkles, S as Shield } from "../_libs/lucide-react.mjs";
const PRINCIPLES = [{
  icon: Crown,
  name: "Sovereignty",
  desc: "Self-custody and decentralization are non-negotiable foundations."
}, {
  icon: Infinity,
  name: "Permanence",
  desc: "We build for centuries, not cycles. Heritage that endures forever."
}, {
  icon: Heart,
  name: "Heritage",
  desc: "Stories, memories and culture preserved on immutable chains."
}, {
  icon: Sparkles,
  name: "Impact",
  desc: "Empowering creators and communities to shape the next paradigm."
}];
function About() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(PageHero, { eyebrow: "OUR STORY", title: /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
      "A New Paradigm in Legacy, Art, and ",
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "gold-text", children: "Blockchain Sovereignty" })
    ] }), subtitle: "We exist to preserve stories, empower creators, and make Web3 a place where heritage endures forever." }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Section, { eyebrow: "OUR PURPOSE", title: /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
      "Building a kingdom of ",
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "gold-text", children: "permanence" })
    ] }), subtitle: "The House of Joshi is not a product — it is a paradigm. A sovereign ecosystem where art, identity, and legacy are protected by the immutability of the blockchain.", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid md:grid-cols-2 gap-8", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "glass rounded-2xl p-8", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-2xl mb-3", children: "Our Origin" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground leading-relaxed", children: "Founded at the intersection of art, heritage, and blockchain, House of Joshi began as a vision — to build a Web3 ecosystem rooted in timeless values rather than fleeting trends. From this vision the Heirloom Protocol was born." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "glass rounded-2xl p-8", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-2xl mb-3", children: "Our Future" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground leading-relaxed", children: "A multichain sovereign empire — DAO governance, generational vaults, NFT launchpads, creative tooling, and educational realms — all designed to outlast generations." })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Section, { eyebrow: "OUR PRINCIPLES", title: /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
      "The ",
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "gold-text", children: "four pillars" })
    ] }), children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid sm:grid-cols-2 lg:grid-cols-4 gap-5", children: PRINCIPLES.map((p) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "glass rounded-2xl p-7 hover:gold-glow transition", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-12 w-12 rounded-xl bg-primary/10 border border-primary/30 flex items-center justify-center mb-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx(p.icon, { size: 20, className: "text-primary" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-display text-xl mb-2", children: p.name }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground leading-relaxed", children: p.desc })
    ] }, p.name)) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Section, { eyebrow: "LEADERSHIP", title: /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
      "The ",
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "gold-text", children: "sovereigns" })
    ] }), children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid md:grid-cols-2 gap-8", children: [{
      name: "Queen Joshi",
      role: "Founder & Creative Director",
      letter: "Q"
    }, {
      name: "King Joshi",
      role: "Co-Founder & Strategy Architect",
      letter: "K"
    }].map((p) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "glass rounded-2xl p-10 text-center hover:gold-glow-strong transition", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mx-auto h-28 w-28 rounded-full bg-gradient-to-br from-[#FFD76A] to-[#8a6f1f] flex items-center justify-center font-display text-5xl text-black animate-pulse-glow", children: p.letter }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "mt-6 font-display text-3xl", children: p.name }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-2 text-xs tracking-[0.3em] text-primary", children: p.role.toUpperCase() }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Shield, { size: 14, className: "mx-auto mt-5 text-muted-foreground" })
    ] }, p.name)) }) })
  ] });
}
export {
  About as component
};
