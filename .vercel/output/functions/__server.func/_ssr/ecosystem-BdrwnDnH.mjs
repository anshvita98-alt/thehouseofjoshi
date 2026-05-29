import { j as jsxRuntimeExports } from "../_libs/react.mjs";
import { L as Link } from "../_libs/tanstack__react-router.mjs";
import { P as PageHero, S as Section } from "./Section-BXon4VAY.mjs";
import { i as Sparkles, L as Layers, V as Vault, P as Palette, c as Crown, B as Baby, j as Store, A as ArrowRight } from "../_libs/lucide-react.mjs";
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
const ITEMS = [{
  icon: Sparkles,
  name: "NFT Launchpad",
  to: "/nft-launchpad",
  desc: "The official portal for new Joshi NFT collections, drops and creator launches."
}, {
  icon: Layers,
  name: "Swap",
  to: "/swap",
  desc: "Secure multichain token swapping across the official Joshi ecosystem."
}, {
  icon: Vault,
  name: "Legacy Vault",
  to: "/legacy-vault",
  desc: "A cinematic vault built for trust, permanence and future generations."
}, {
  icon: Palette,
  name: "Dreamweaver",
  to: "/dreamweaver",
  desc: "Mint the dreams as NFTs in an immersive creative atmosphere."
}, {
  icon: Crown,
  name: "Treasury / DAO",
  to: "/treasury",
  desc: "Sovereign governance, treasury operations and on-chain proposals."
}, {
  icon: Baby,
  name: "Kids",
  to: "/kids",
  desc: "A safe educational realm where the next generation learns Web3."
}, {
  icon: Store,
  name: "Merch Store",
  to: "/merch",
  desc: "Cinematic luxury fashion for citizens of the sovereign kingdom."
}];
function Ecosystem() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(PageHero, { eyebrow: "THE ECOSYSTEM", title: /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
      "One ",
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "gold-text", children: "sovereign empire" }),
      ", many realms"
    ] }), subtitle: "Every product in the House of Joshi ecosystem connects through a single sovereign identity." }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Section, { children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6", children: ITEMS.map((e) => /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: e.to, className: "group glass rounded-2xl p-8 hover:-translate-y-1.5 hover:gold-glow-strong transition-all duration-500", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-14 w-14 rounded-xl bg-primary/10 border border-primary/30 flex items-center justify-center mb-5", children: /* @__PURE__ */ jsxRuntimeExports.jsx(e.icon, { size: 22, className: "text-primary" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-2xl", children: e.name }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-3 text-sm text-muted-foreground leading-relaxed", children: e.desc }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-6 text-xs tracking-widest text-primary flex items-center gap-2", children: [
        "ENTER ",
        /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { size: 12 })
      ] })
    ] }, e.name)) }) })
  ] });
}
export {
  Ecosystem as component
};
