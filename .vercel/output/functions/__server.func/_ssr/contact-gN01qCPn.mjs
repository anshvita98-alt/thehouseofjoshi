import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { P as PageHero, S as Section } from "./Section-BXon4VAY.mjs";
import { M as Mail, T as Twitter, g as MessageCircle, d as Instagram } from "../_libs/lucide-react.mjs";
function Contact() {
  const [sent, setSent] = reactExports.useState(false);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(PageHero, { eyebrow: "GET IN TOUCH", title: /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
      "Speak with the ",
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "gold-text", children: "kingdom" })
    ] }), subtitle: "Reach our team, join the community, or send a sovereign message." }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Section, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid lg:grid-cols-[1.2fr_1fr] gap-10", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { onSubmit: (e) => {
        e.preventDefault();
        setSent(true);
      }, className: "glass-strong rounded-3xl p-8 sm:p-10 space-y-5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[11px] tracking-[0.4em] text-primary", children: "SEND A MESSAGE" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-3xl", children: "Compose your royal letter" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid sm:grid-cols-2 gap-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Name", type: "text" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Email", type: "email" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Subject", type: "text" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "text-xs tracking-widest text-muted-foreground", children: "MESSAGE" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("textarea", { required: true, rows: 6, className: "mt-2 w-full bg-black/40 border border-primary/25 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-primary transition" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "rounded-full bg-gradient-to-r from-[#FFD76A] via-[#D4AF37] to-[#FFD76A] text-black px-7 py-3 text-sm tracking-wider font-medium hover:shadow-[0_0_40px_rgba(255,215,106,0.45)] transition", children: sent ? "MESSAGE SENT ✓" : "DISPATCH MESSAGE" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: "mailto:support@thehouseofjoshi.com", className: "glass rounded-2xl p-6 flex items-center gap-4 hover:gold-glow transition", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Mail, { size: 18 }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-display text-lg", children: "Email" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm text-muted-foreground", children: "support@thehouseofjoshi.com" })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: "https://x.com/thehouseofjoshi", target: "_blank", rel: "noreferrer noopener", className: "glass rounded-2xl p-6 flex items-center gap-4 hover:gold-glow transition", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Twitter, { size: 18 }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-display text-lg", children: "X" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm text-muted-foreground", children: "@thehouseofjoshi" })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: "https://discord.com/invite/uH9zVeAwDu", target: "_blank", rel: "noreferrer noopener", className: "glass rounded-2xl p-6 flex items-center gap-4 hover:gold-glow transition", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(MessageCircle, { size: 18 }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-display text-lg", children: "Discord" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm text-muted-foreground", children: "Join the community" })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: "https://www.instagram.com/thehouseofjoshi/", target: "_blank", rel: "noreferrer noopener", className: "glass rounded-2xl p-6 flex items-center gap-4 hover:gold-glow transition", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Instagram, { size: 18 }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-display text-lg", children: "Instagram" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm text-muted-foreground", children: "@thehouseofjoshi" })
          ] })
        ] })
      ] })
    ] }) })
  ] });
}
function Icon({
  children
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-11 w-11 rounded-xl bg-primary/10 border border-primary/30 flex items-center justify-center text-primary animate-pulse-glow", children });
}
function Field({
  label,
  type
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "text-xs tracking-widest text-muted-foreground", children: label.toUpperCase() }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("input", { required: true, type, className: "mt-2 w-full bg-black/40 border border-primary/25 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-primary transition" })
  ] });
}
export {
  Contact as component
};
