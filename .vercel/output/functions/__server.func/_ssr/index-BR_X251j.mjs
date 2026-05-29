import { j as jsxRuntimeExports } from "../_libs/react.mjs";
import { L as Link } from "../_libs/tanstack__react-router.mjs";
import { G as GoldButton, S as Section } from "./Section-BXon4VAY.mjs";
import { A as ArrowRight, i as Sparkles, L as Layers, V as Vault, P as Palette, c as Crown, B as Baby, j as Store, b as Coins, h as ShieldCheck } from "../_libs/lucide-react.mjs";
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
const castle = "/assets/castle-hero-DzOu8vRJ.jpg";
const baseLogo = "/assets/base-logo-Ccy3ZpLf.png";
const CHAINS = [{
  name: "Ethereum",
  color: "#627EEA",
  logo: "https://cryptologos.cc/logos/ethereum-eth-logo.png"
}, {
  name: "Base",
  color: "#0052FF",
  logo: baseLogo
}, {
  name: "Cronos",
  color: "#002D74",
  logo: "https://cryptologos.cc/logos/cronos-cro-logo.png"
}, {
  name: "Shibarium",
  color: "#FF7A1A",
  logo: "https://cryptologos.cc/logos/shiba-inu-shib-logo.png"
}, {
  name: "XRP",
  color: "#23292F",
  logo: "https://cryptologos.cc/logos/xrp-xrp-logo.png"
}, {
  name: "USDC on Base",
  color: "#2775CA",
  logo: "https://cryptologos.cc/logos/usd-coin-usdc-logo.png"
}];
const ECOSYSTEM = [{
  icon: Sparkles,
  name: "NFT Launchpad",
  to: "/nft-launchpad",
  desc: "Launch and mint sovereign collections through the official portal."
}, {
  icon: Layers,
  name: "Swap",
  to: "/swap",
  desc: "Multichain token swapping powered by the Joshi ecosystem."
}, {
  icon: Vault,
  name: "Legacy Vault",
  to: "/legacy-vault",
  desc: "Preserve heritage NFTs in a vault built for permanence."
}, {
  icon: Palette,
  name: "Dreamweaver",
  to: "/dreamweaver",
  desc: "Mint dreams as NFTs in a cinematic creative atmosphere."
}, {
  icon: Crown,
  name: "Treasury",
  to: "/treasury",
  desc: "Sovereign governance and on-chain treasury operations."
}, {
  icon: Baby,
  name: "Kids",
  to: "/kids",
  desc: "A safe educational realm to learn Web3 from the ground up."
}, {
  icon: Store,
  name: "Merch Store",
  to: "/merch",
  desc: "Cinematic luxury fashion designed for the sovereign kingdom."
}];
const TOKENS = [{
  name: "Queen Joshi",
  symbol: "$QUEENJOSHI",
  chain: "Base",
  url: "https://basescan.org/token/0x1f2f727f043e5f92371f853084242a3584c70aa5"
}, {
  name: "King Joshi",
  symbol: "$KINGJOSHI",
  chain: "Base",
  url: "https://basescan.org/token/0x8a668278adb0638df48411dc9971e1ad29516483"
}, {
  name: "KIND",
  symbol: "$KIND",
  chain: "Cronos",
  url: "https://explorer.cronos.org/address/0xb65e00ea8a113a819628a240d4c1702db5cc7aae"
}, {
  name: "NBAA",
  symbol: "$NBAA",
  chain: "Cronos",
  url: "https://explorer.cronos.org/address/0x190fd3e5172a41f8048d3f9d82e2ee2b2f8a29dd"
}];
function Home() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "relative min-h-screen overflow-hidden", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { "aria-hidden": true, className: "absolute inset-0", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: castle, alt: "", width: 1920, height: 1280, className: "absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-[42%] w-[140%] max-w-none opacity-90 select-none pointer-events-none animate-float", style: {
          maskImage: "radial-gradient(ellipse 70% 60% at 50% 55%, black 30%, transparent 80%)",
          WebkitMaskImage: "radial-gradient(ellipse 70% 60% at 50% 55%, black 30%, transparent 80%)"
        } }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute left-1/2 top-[55%] -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] rounded-full", style: {
          background: "radial-gradient(circle, rgba(255,215,106,0.25), rgba(212,175,55,0.08) 40%, transparent 70%)",
          filter: "blur(20px)"
        } }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-x-0 bottom-0 h-[40vh]", style: {
          background: "linear-gradient(180deg, transparent, #050505 80%)"
        } }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-x-0 top-0 h-[30vh]", style: {
          background: "linear-gradient(180deg, #050505, transparent)"
        } })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative z-10 mx-auto max-w-6xl px-6 pt-44 sm:pt-56 pb-32 text-center", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[11px] tracking-[0.5em] text-primary mb-6 animate-fade-up", children: "WELCOME TO" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "font-display text-5xl sm:text-7xl lg:text-[88px] leading-[1.02] animate-fade-up", style: {
          animationDelay: "0.1s"
        }, children: [
          "THE SOVEREIGN",
          /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "gold-text", children: "WEB3 ECOSYSTEM" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "mt-8 text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed animate-fade-up", style: {
          animationDelay: "0.2s"
        }, children: [
          "A kingdom built on blockchain innovation.",
          /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
          "Launch, trade, create and own across chains.",
          /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
          "Powering the next generation of digital ownership."
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-12 flex flex-wrap items-center justify-center gap-4 animate-fade-up", style: {
          animationDelay: "0.3s"
        }, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(GoldButton, { to: "/ecosystem", children: [
          "Explore Ecosystem ",
          /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { size: 16, className: "ml-2" })
        ] }) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute bottom-8 left-1/2 -translate-x-1/2 text-[10px] tracking-[0.4em] text-muted-foreground animate-pulse", children: "SCROLL TO ENTER" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Section, { eyebrow: "MULTICHAIN INFRASTRUCTURE", title: /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
      "Built across ",
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "gold-text", children: "sovereign networks" })
    ] }), subtitle: "The Joshi ecosystem spans the most established and emerging chains in the decentralized economy.", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-5", children: CHAINS.map((c) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "group relative glass rounded-2xl p-6 flex flex-col items-center text-center transition-all duration-500 hover:-translate-y-1 hover:gold-glow", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative h-16 w-16 rounded-full flex items-center justify-center mb-4", style: {
        background: `radial-gradient(circle, ${c.color}55, transparent 70%)`
      }, children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-14 w-14 rounded-full bg-white/95 flex items-center justify-center p-2", style: {
        boxShadow: `0 0 24px ${c.color}66`
      }, children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: c.logo, alt: `${c.name} logo`, loading: "lazy", className: "h-full w-full object-contain", onError: (e) => {
        e.currentTarget.style.display = "none";
      } }) }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm font-medium", children: c.name })
    ] }, c.name)) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Section, { eyebrow: "THE KINGDOM", title: /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
      "Witness the ",
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "gold-text", children: "House of Joshi" })
    ] }), subtitle: "A cinematic glimpse into the sovereign Web3 empire.", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative mx-auto max-w-5xl", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative glass-strong rounded-3xl overflow-hidden border border-primary/20 gold-glow", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("video", { src: "/house-of-joshi.mov", autoPlay: true, muted: true, loop: true, playsInline: true, preload: "metadata", className: "block w-full h-auto aspect-video object-cover" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "pointer-events-none absolute inset-0 rounded-3xl ring-1 ring-inset ring-primary/15" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "pointer-events-none absolute inset-x-0 bottom-0 h-24", style: {
        background: "linear-gradient(180deg, transparent, rgba(5,5,5,0.6))"
      } })
    ] }) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Section, { eyebrow: "THE ECOSYSTEM", title: /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
      "A complete ",
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "gold-text", children: "decentralized kingdom" })
    ] }), subtitle: "Every pillar of the Joshi protocol — designed with luxury, built for permanence.", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6", children: ECOSYSTEM.map((e, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: e.to, className: "group relative glass rounded-2xl p-7 transition-all duration-500 hover:-translate-y-1.5 hover:gold-glow-strong", style: {
      animationDelay: `${i * 60}ms`
    }, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition", style: {
        background: "radial-gradient(400px 200px at 50% 0%, rgba(212,175,55,0.12), transparent)"
      } }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-12 w-12 rounded-xl flex items-center justify-center bg-primary/10 border border-primary/30 mb-5", children: /* @__PURE__ */ jsxRuntimeExports.jsx(e.icon, { size: 20, className: "text-primary" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-2xl mb-2", children: e.name }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground leading-relaxed", children: e.desc }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-5 text-xs tracking-widest text-primary flex items-center gap-2 opacity-70 group-hover:opacity-100 transition", children: [
          "ENTER ",
          /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { size: 12 })
        ] })
      ] })
    ] }, e.name)) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Section, { eyebrow: "TOKEN SHOWCASE", title: /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
      "The ",
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "gold-text", children: "sovereign assets" })
    ] }), subtitle: "Verified on-chain. Owned by community. Powered by the Joshi protocol.", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5", children: TOKENS.map((t) => /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: t.url, target: "_blank", rel: "noreferrer noopener", className: "group glass rounded-2xl p-6 transition-all hover:-translate-y-1 hover:gold-glow", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-14 w-14 rounded-full bg-gradient-to-br from-[#FFD76A] to-[#8a6f1f] flex items-center justify-center mb-4 group-hover:animate-pulse-glow", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Coins, { size: 22, className: "text-black" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-display text-lg", children: t.name }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs tracking-widest text-primary mt-1", children: t.symbol }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-xs text-muted-foreground mt-3", children: [
        "Network: ",
        t.chain
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-4 text-[11px] tracking-widest text-muted-foreground group-hover:text-primary transition", children: "VIEW ON EXPLORER ↗" })
    ] }, t.symbol)) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Section, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative overflow-hidden rounded-3xl glass-strong p-12 sm:p-20 text-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute -inset-1 opacity-50 pointer-events-none", style: {
        background: "radial-gradient(600px 300px at 50% 0%, rgba(255,215,106,0.2), transparent)"
      } }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(ShieldCheck, { className: "mx-auto text-primary mb-6" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "font-display text-3xl sm:text-5xl", children: [
          "Enter the ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "gold-text", children: "sovereign kingdom" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 text-muted-foreground max-w-xl mx-auto", children: "Your wallet is your crown. Connect to step into the House of Joshi." }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-8 flex flex-wrap items-center justify-center gap-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx(GoldButton, { variant: "outline", to: "/whitepaper", children: "Read Whitepaper" }) })
      ] })
    ] }) })
  ] });
}
export {
  Home as component
};
