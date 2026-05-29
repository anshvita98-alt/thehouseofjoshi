import { j as jsxRuntimeExports } from "../_libs/react.mjs";
import { P as PageHero, G as GoldButton, S as Section } from "./Section-BXon4VAY.mjs";
const vault = "/assets/vault-ujBRRF2O.jpg";
function LegacyVault() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(PageHero, { eyebrow: "THE ARCHIVE", title: /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
      "Legacy ",
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "gold-text", children: "Vault" })
    ] }), subtitle: "Preserve what matters forever.", children: /* @__PURE__ */ jsxRuntimeExports.jsx(GoldButton, { href: "https://legacyvault.thehouseofjoshi.com/", external: true, children: "Open Legacy Vault ↗" }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "relative", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative h-[60vh] sm:h-[80vh] overflow-hidden", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: vault, alt: "Cinematic gold vault door", width: 1920, height: 1080, loading: "lazy", className: "absolute inset-0 w-full h-full object-cover opacity-90", style: {
        maskImage: "radial-gradient(ellipse 70% 80% at 50% 50%, black 40%, transparent 90%)",
        WebkitMaskImage: "radial-gradient(ellipse 70% 80% at 50% 50%, black 40%, transparent 90%)"
      } }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-x-0 bottom-0 h-40", style: {
        background: "linear-gradient(180deg, transparent, #050505)"
      } })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Section, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-3xl mx-auto text-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "font-display text-3xl sm:text-5xl", children: [
        "A vault built for ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "gold-text", children: "generations" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-5 text-muted-foreground leading-relaxed", children: "Store your heritage NFTs in a beautifully designed vault built for trust, permanence and future generations. Anchored on-chain, mirrored across decentralized storage, and protected by sovereign keys." }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-8", children: /* @__PURE__ */ jsxRuntimeExports.jsx(GoldButton, { href: "https://legacyvault.thehouseofjoshi.com/", external: true, children: "Enter the Vault ↗" }) })
    ] }) })
  ] });
}
export {
  LegacyVault as component
};
