import { j as jsxRuntimeExports } from "../_libs/react.mjs";
import { P as PageHero, G as GoldButton, S as Section } from "./Section-BXon4VAY.mjs";
import { L as Layers, S as Shield, Z as Zap } from "../_libs/lucide-react.mjs";
function Swap() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(PageHero, { eyebrow: "MULTICHAIN", title: /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
      "House of Joshi ",
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "gold-text", children: "Swap" })
    ] }), subtitle: "Access secure multichain token swapping through the official House of Joshi ecosystem.", children: /* @__PURE__ */ jsxRuntimeExports.jsx(GoldButton, { href: "https://swap.thehouseofjoshi.com/", external: true, children: "Open Swap ↗" }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Section, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid lg:grid-cols-[1.1fr_1fr] gap-10 items-start", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative glass-strong rounded-3xl p-10 overflow-hidden", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute -top-20 -right-20 h-72 w-72 rounded-full", style: {
          background: "radial-gradient(circle, rgba(255,215,106,0.35), transparent 70%)"
        } }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[11px] tracking-[0.3em] text-primary mb-4", children: "SWAP PREVIEW" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-2xl bg-black/40 border border-primary/20 p-5", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-muted-foreground", children: "You pay" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-2 flex items-center justify-between", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-display text-3xl", children: "1.00" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "rounded-full border border-primary/40 px-3 py-1 text-xs", children: "ETH on Base" })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-10 w-10 rounded-full border border-primary/40 flex items-center justify-center text-primary", children: "↓" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-2xl bg-black/40 border border-primary/20 p-5", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-muted-foreground", children: "You receive" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-2 flex items-center justify-between", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-display text-3xl gold-text", children: "≈ 2,431.20" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "rounded-full border border-primary/40 px-3 py-1 text-xs", children: "USDC on Base" })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(GoldButton, { href: "https://swap.thehouseofjoshi.com/", external: true, children: "Continue on Joshi Swap ↗" })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-5", children: [{
        icon: Layers,
        t: "Multichain by design",
        d: "Trade across Ethereum, Base, Cronos, Shibarium and XRP from one sovereign portal."
      }, {
        icon: Shield,
        t: "Self-custody first",
        d: "Connect your own wallet. The Joshi protocol never holds your assets."
      }, {
        icon: Zap,
        t: "Optimized routing",
        d: "Best-execution routing across the leading DEX aggregators."
      }].map((f) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "glass rounded-2xl p-6 flex gap-5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-11 w-11 shrink-0 rounded-xl bg-primary/10 border border-primary/30 flex items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(f.icon, { size: 18, className: "text-primary" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-display text-lg", children: f.t }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm text-muted-foreground mt-1", children: f.d })
        ] })
      ] }, f.t)) })
    ] }) })
  ] });
}
export {
  Swap as component
};
