import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { P as PageHero } from "./Section-BXon4VAY.mjs";
function LegalDoc({ eyebrow, title, sections }) {
  const [active, setActive] = reactExports.useState(sections[0].id);
  reactExports.useEffect(() => {
    const obs = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) setActive(e.target.id);
      });
    }, { rootMargin: "-30% 0px -60% 0px" });
    sections.forEach((s) => {
      const el = document.getElementById(s.id);
      if (el) obs.observe(el);
    });
    return () => obs.disconnect();
  }, [sections]);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(PageHero, { eyebrow, title }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl px-6 pb-32 grid lg:grid-cols-[260px_1fr] gap-12", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("aside", { className: "lg:sticky lg:top-28 self-start", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[11px] tracking-[0.3em] text-primary mb-4", children: "CONTENTS" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("nav", { className: "space-y-2 text-sm", children: sections.map((s) => /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: `#${s.id}`, className: `block py-1.5 border-l-2 pl-3 transition ${active === s.id ? "border-primary text-primary" : "border-white/10 text-muted-foreground hover:text-white"}`, children: s.title }, s.id)) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("article", { className: "space-y-16", children: sections.map((s, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { id: s.id, className: "scroll-mt-32 glass rounded-2xl p-8 sm:p-10", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-[11px] tracking-[0.4em] text-primary mb-3", children: [
          "SECTION 0",
          i + 1
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-2xl sm:text-3xl mb-4", children: s.title }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-base leading-[1.85] text-white/85 font-light", children: s.body }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "gold-divider mt-8" })
      ] }, s.id)) })
    ] })
  ] });
}
export {
  LegalDoc as L
};
