import { j as jsxRuntimeExports } from "../_libs/react.mjs";
function Section({ id, eyebrow, title, subtitle, children, className = "" }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { id, className: `relative py-24 sm:py-32 ${className}`, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl px-6", children: [
    (eyebrow || title || subtitle) && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-3xl mb-16", children: [
      eyebrow && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[11px] tracking-[0.4em] text-primary mb-4", children: eyebrow }),
      title && /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-4xl sm:text-5xl lg:text-6xl leading-tight", children: title }),
      subtitle && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-5 text-base sm:text-lg text-muted-foreground max-w-2xl leading-relaxed", children: subtitle })
    ] }),
    children
  ] }) });
}
function PageHero({ eyebrow, title, subtitle, children }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "relative pt-40 pb-16 sm:pt-48 sm:pb-24", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-x-0 top-24 mx-auto h-px max-w-3xl gold-divider" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-5xl px-6 text-center animate-fade-up", children: [
      eyebrow && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[11px] tracking-[0.4em] text-primary mb-5", children: eyebrow }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "font-display text-4xl sm:text-6xl lg:text-7xl leading-[1.05]", children: title }),
      subtitle && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-6 text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed", children: subtitle }),
      children && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-10", children })
    ] })
  ] });
}
function GoldButton({ href, to, children, external, onClick, variant = "solid" }) {
  const cls = variant === "solid" ? "bg-gradient-to-r from-[#FFD76A] via-[#D4AF37] to-[#FFD76A] text-black hover:shadow-[0_0_40px_rgba(255,215,106,0.45)]" : "border border-primary/70 text-primary hover:bg-primary/10 hover:gold-glow";
  const base = `inline-flex items-center justify-center rounded-full px-7 py-3.5 text-sm tracking-wider font-medium transition-all duration-300 ${cls}`;
  if (href) return /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href, target: external ? "_blank" : void 0, rel: external ? "noreferrer noopener" : void 0, className: base, children });
  if (onClick) return /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick, className: base, children });
  return /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: to, className: base, children });
}
export {
  GoldButton as G,
  PageHero as P,
  Section as S
};
