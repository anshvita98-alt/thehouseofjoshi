import { j as jsxRuntimeExports } from "../_libs/react.mjs";
import { G as GoldButton, S as Section } from "./Section-BXon4VAY.mjs";
const dream = "/assets/dreamweaver-B1E3RlPq.jpg";
function Dreamweaver() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "relative pt-32 pb-20 overflow-hidden", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: dream, alt: "", "aria-hidden": true, width: 1920, height: 1080, loading: "lazy", className: "absolute inset-0 w-full h-full object-cover opacity-60", style: {
        maskImage: "linear-gradient(180deg, transparent, black 30%, black 70%, transparent)",
        WebkitMaskImage: "linear-gradient(180deg, transparent, black 30%, black 70%, transparent)"
      } }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative mx-auto max-w-5xl px-6 text-center pt-24 pb-24 animate-fade-up", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[11px] tracking-[0.5em] text-primary mb-5", children: "CINEMATIC STORYTELLING" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "font-display text-5xl sm:text-7xl", children: [
          "Dream",
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "gold-text", children: "weaver" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-6 text-lg text-muted-foreground max-w-2xl mx-auto", children: "Mint the dreams as NFTs." }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-10", children: /* @__PURE__ */ jsxRuntimeExports.jsx(GoldButton, { href: "https://dreamweaver.thehouseofjoshi.com/", external: true, children: "Open Dreamweaver ↗" }) })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Section, { children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid md:grid-cols-3 gap-6", children: [{
      t: "Cinematic atmosphere",
      d: "An immersive creative space designed to feel like a waking dream."
    }, {
      t: "Mint your visions",
      d: "Capture and preserve dreams as sovereign on-chain NFTs."
    }, {
      t: "Built for storytellers",
      d: "A canvas for artists, poets and visionaries of the kingdom."
    }].map((f) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "glass rounded-2xl p-7", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-xl mb-2", children: f.t }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground leading-relaxed", children: f.d })
    ] }, f.t)) }) })
  ] });
}
export {
  Dreamweaver as component
};
