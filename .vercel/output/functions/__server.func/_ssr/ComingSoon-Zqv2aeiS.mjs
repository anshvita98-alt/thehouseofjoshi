import { j as jsxRuntimeExports } from "../_libs/react.mjs";
import { P as PageHero, S as Section } from "./Section-BXon4VAY.mjs";
import { c as Crown } from "../_libs/lucide-react.mjs";
function ComingSoon({ eyebrow, title, subtitle, description }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(PageHero, { eyebrow, title, subtitle }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Section, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative max-w-3xl mx-auto text-center glass-strong rounded-3xl p-12 sm:p-16 overflow-hidden", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute -inset-px rounded-3xl pointer-events-none", style: { background: "radial-gradient(600px 200px at 50% 0%, rgba(255,215,106,0.18), transparent)" } }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Crown, { className: "relative mx-auto text-primary mb-5" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative text-[11px] tracking-[0.5em] text-primary mb-4", children: "COMING SOON" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "relative text-lg text-white/85 leading-relaxed", children: description }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative mt-8 inline-flex items-center gap-3 text-xs tracking-widest text-muted-foreground", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-2 w-2 rounded-full bg-primary animate-pulse" }),
        " IN DEVELOPMENT"
      ] })
    ] }) })
  ] });
}
export {
  ComingSoon as C
};
