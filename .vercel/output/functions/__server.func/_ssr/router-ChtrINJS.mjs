import { Q as QueryClient } from "../_libs/tanstack__query-core.mjs";
import { Q as QueryClientProvider } from "../_libs/tanstack__react-query.mjs";
import { b as createRouter, a as createRootRouteWithContext, u as useRouter, L as Link, O as Outlet, H as HeadContent, S as Scripts, c as createFileRoute, l as lazyRouteComponent, d as useRouterState } from "../_libs/tanstack__react-router.mjs";
import { j as jsxRuntimeExports, r as reactExports } from "../_libs/react.mjs";
import { X, f as Menu } from "../_libs/lucide-react.mjs";
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
const logoCrest = "/assets/joshi-logo-O05UgQuM.png";
const NAV = [
  { to: "/", label: "Home" },
  { to: "/ecosystem", label: "Ecosystem" },
  { to: "/swap", label: "Swap" },
  { to: "/nft-launchpad", label: "NFT Launchpad" },
  { to: "/legacy-vault", label: "Legacy Vault" },
  { to: "/dreamweaver", label: "Dreamweaver" },
  { to: "/staking", label: "Staking" },
  { to: "/treasury", label: "Treasury" }
];
function Navbar() {
  const [scrolled, setScrolled] = reactExports.useState(false);
  const [open, setOpen] = reactExports.useState(false);
  const path = useRouterState({ select: (s) => s.location.pathname });
  reactExports.useEffect(() => {
    const on = () => setScrolled(window.scrollY > 12);
    on();
    window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("header", { className: `fixed top-0 inset-x-0 z-50 transition-all duration-500 ${scrolled ? "py-2" : "py-3"}`, children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mx-auto max-w-7xl px-3 sm:px-6", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "div",
      {
        className: "relative flex items-center justify-between gap-3 rounded-2xl px-3 sm:px-5 py-2.5 backdrop-blur-xl",
        style: {
          background: "linear-gradient(180deg, rgba(5,5,5,0.78), rgba(11,11,15,0.6))",
          borderBottom: "1px solid rgba(212,175,55,0.35)",
          boxShadow: scrolled ? "0 10px 40px rgba(0,0,0,0.55), 0 0 0 1px rgba(212,175,55,0.12)" : "none"
        },
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/", className: "flex items-center gap-2.5 shrink-0 group", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "img",
              {
                src: logoCrest,
                alt: "House of Joshi",
                width: 40,
                height: 40,
                className: "h-9 w-9 sm:h-10 sm:w-10 object-contain animate-pulse-glow drop-shadow-[0_0_18px_rgba(212,175,55,0.55)]"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "hidden sm:block leading-tight", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "block font-display text-[13px] tracking-[0.18em] gold-text", children: "HOUSE OF JOSHI" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "block text-[9px] tracking-[0.32em] text-muted-foreground", children: "SOVEREIGN WEB3" })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("nav", { className: "hidden lg:flex items-center gap-0.5 min-w-0", children: NAV.map((n) => {
            const active = path === n.to;
            return /* @__PURE__ */ jsxRuntimeExports.jsx(
              Link,
              {
                to: n.to,
                className: `px-2.5 py-2 text-[11.5px] tracking-wide rounded-md whitespace-nowrap transition-all ${active ? "text-primary" : "text-white/75 hover:text-primary"}`,
                style: active ? { textShadow: "0 0 18px rgba(255,215,106,0.6)" } : void 0,
                children: n.label
              },
              n.to
            );
          }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center gap-2 shrink-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => setOpen((v) => !v), className: "lg:hidden p-2 -mr-1 text-primary", "aria-label": "Menu", children: open ? /* @__PURE__ */ jsxRuntimeExports.jsx(X, { size: 22 }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Menu, { size: 22 }) }) })
        ]
      }
    ) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `fixed inset-0 z-40 lg:hidden transition-all ${open ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"}`, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-black/80 backdrop-blur-md", onClick: () => setOpen(false) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `absolute right-0 top-0 h-full w-[88%] max-w-sm glass-strong p-6 pt-24 overflow-y-auto transition-transform duration-500 ${open ? "translate-x-0" : "translate-x-full"}`, children: /* @__PURE__ */ jsxRuntimeExports.jsx("nav", { className: "flex flex-col gap-1", children: NAV.map((n) => /* @__PURE__ */ jsxRuntimeExports.jsx(
        Link,
        {
          to: n.to,
          onClick: () => setOpen(false),
          className: `px-3 py-3 text-sm rounded-md ${path === n.to ? "text-primary bg-primary/10" : "text-white/85 hover:text-primary hover:bg-primary/5"}`,
          children: n.label
        },
        n.to
      )) }) })
    ] })
  ] });
}
function Footer() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "footer",
    {
      className: "relative z-10 mt-32 border-t border-primary/15 pt-20 pb-10",
      style: { background: "linear-gradient(180deg, transparent, rgba(11,11,15,0.9))" },
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl px-6 grid gap-12 md:grid-cols-2 lg:grid-cols-5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "lg:col-span-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/", className: "flex items-center gap-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: logoCrest, alt: "House of Joshi", width: 48, height: 48, className: "h-12 w-12", loading: "lazy" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-display text-lg gold-text", children: "HOUSE OF JOSHI" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] tracking-[0.3em] text-muted-foreground", children: "THE SOVEREIGN WEB3 ECOSYSTEM" })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-5 text-sm text-muted-foreground max-w-sm leading-relaxed", children: "A kingdom built on blockchain innovation. Preserving stories, empowering creators, and shaping a sovereign decentralized future." }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { onSubmit: (e) => {
              e.preventDefault();
            }, className: "mt-6 flex gap-2 max-w-sm", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "email", required: true, placeholder: "Your royal email", className: "flex-1 rounded-full bg-white/5 border border-primary/30 px-4 py-2.5 text-sm placeholder:text-muted-foreground/60 focus:outline-none focus:border-primary" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "rounded-full border border-primary/70 px-4 py-2.5 text-xs tracking-wider text-primary hover:bg-primary/10", children: "JOIN" })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(FooterCol, { title: "Ecosystem", links: [
            ["Ecosystem", "/ecosystem"],
            ["Swap", "/swap"],
            ["NFT Launchpad", "/nft-launchpad"],
            ["Legacy Vault", "/legacy-vault"],
            ["Dreamweaver", "/dreamweaver"],
            ["Staking", "/staking"],
            ["Treasury / DAO", "/treasury"]
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(FooterCol, { title: "Discover", links: [
            ["About", "/about"],
            ["Whitepaper", "/whitepaper"],
            ["Kids", "/kids"],
            ["Merch Store", "/merch"],
            ["FAQ", "/faq"],
            ["Security", "/security"],
            ["Contact", "/contact"]
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(FooterCol, { title: "Community", links: [], external: [
            ["X (Twitter)", "https://x.com/thehouseofjoshi"],
            ["Discord", "https://discord.com/invite/uH9zVeAwDu"],
            ["Instagram", "https://www.instagram.com/thehouseofjoshi/"],
            ["Email", "mailto:support@thehouseofjoshi.com"]
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl px-6 mt-14", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "gold-divider mb-6" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-muted-foreground", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: "© House of Joshi. All rights reserved." }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-5", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/terms", className: "hover:text-primary", children: "Terms & Conditions" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/privacy", className: "hover:text-primary", children: "Privacy Policy" })
            ] })
          ] })
        ] })
      ]
    }
  );
}
function FooterCol({ title, links, external }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[11px] tracking-[0.3em] text-primary mb-4", children: title.toUpperCase() }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "space-y-2.5 text-sm", children: [
      links.map(([l, h]) => /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: h, className: "text-white/75 hover:text-primary transition", children: l }) }, h)),
      external?.map(([l, h]) => /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: h, target: "_blank", rel: "noreferrer noopener", className: "text-white/75 hover:text-primary transition", children: [
        l,
        " ↗"
      ] }) }, h))
    ] })
  ] });
}
const Ctx = reactExports.createContext(null);
function WalletProvider({ children }) {
  const [address, setAddress] = reactExports.useState(null);
  const [kind, setKind] = reactExports.useState(null);
  const [isOpen, setOpen] = reactExports.useState(false);
  const [connecting, setConnecting] = reactExports.useState(null);
  const [error, setError] = reactExports.useState(null);
  reactExports.useEffect(() => {
    try {
      const saved = localStorage.getItem("hoj.wallet");
      if (saved) {
        const p = JSON.parse(saved);
        setAddress(p.address);
        setKind(p.kind);
      }
    } catch {
    }
  }, []);
  const persist = (a, k) => {
    if (a && k) localStorage.setItem("hoj.wallet", JSON.stringify({ address: a, kind: k }));
    else localStorage.removeItem("hoj.wallet");
  };
  const connect = reactExports.useCallback(async (k) => {
    setError(null);
    setConnecting(k);
    try {
      if (k === "metamask") {
        const eth = typeof window !== "undefined" ? window.ethereum : null;
        if (!eth) throw new Error("MetaMask not detected. Please install the MetaMask extension.");
        const accounts = await eth.request({ method: "eth_requestAccounts" });
        const addr = accounts?.[0];
        if (!addr) throw new Error("No account returned");
        setAddress(addr);
        setKind("metamask");
        persist(addr, "metamask");
      } else if (k === "coinbase") {
        const eth = typeof window !== "undefined" ? window.ethereum : null;
        if (eth?.isCoinbaseWallet) {
          const accounts = await eth.request({ method: "eth_requestAccounts" });
          const addr = accounts?.[0];
          if (addr) {
            setAddress(addr);
            setKind("coinbase");
            persist(addr, "coinbase");
          }
        } else {
          throw new Error("Coinbase Wallet not detected. Install the Coinbase Wallet extension or open in the Coinbase app.");
        }
      } else if (k === "walletconnect") {
        throw new Error("WalletConnect requires the full SDK. Please connect via MetaMask Mobile or scan from a WalletConnect-compatible wallet (coming soon).");
      }
      setOpen(false);
    } catch (e) {
      setError(e?.message ?? "Connection failed");
    } finally {
      setConnecting(null);
    }
  }, []);
  const disconnect = reactExports.useCallback(() => {
    setAddress(null);
    setKind(null);
    persist(null, null);
  }, []);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Ctx.Provider, { value: { address, kind, isOpen, open: () => setOpen(true), close: () => setOpen(false), connect, disconnect, connecting, error }, children });
}
function StarField() {
  const stars = reactExports.useMemo(
    () => Array.from({ length: 90 }, () => ({
      top: Math.random() * 100,
      left: Math.random() * 100,
      size: Math.random() * 2 + 0.5,
      delay: Math.random() * 6,
      duration: 3 + Math.random() * 5,
      opacity: 0.3 + Math.random() * 0.6
    })),
    []
  );
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { "aria-hidden": true, className: "pointer-events-none fixed inset-0 z-0 overflow-hidden", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0", style: {
      background: "radial-gradient(800px 500px at 20% 10%, rgba(212,175,55,0.07), transparent 60%), radial-gradient(700px 500px at 80% 90%, rgba(255,215,106,0.06), transparent 60%)"
    } }),
    stars.map((s, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
      "span",
      {
        className: "absolute rounded-full bg-[#FFD76A]",
        style: {
          top: `${s.top}%`,
          left: `${s.left}%`,
          width: `${s.size}px`,
          height: `${s.size}px`,
          opacity: s.opacity,
          boxShadow: `0 0 ${s.size * 4}px rgba(255,215,106,0.7)`,
          animation: `twinkle ${s.duration}s ease-in-out ${s.delay}s infinite`
        }
      },
      i
    ))
  ] });
}
function LoadingScreen({ onComplete }) {
  const [progress, setProgress] = reactExports.useState(0);
  const [exiting, setExiting] = reactExports.useState(false);
  const [hidden, setHidden] = reactExports.useState(false);
  const startTime = reactExports.useRef(Date.now());
  reactExports.useEffect(() => {
    const duration = 2800;
    const interval = setInterval(() => {
      const elapsed = Date.now() - startTime.current;
      const pct = Math.min(elapsed / duration * 100, 100);
      setProgress(pct);
      if (elapsed >= duration) {
        clearInterval(interval);
        setExiting(true);
        setTimeout(() => {
          setHidden(true);
          onComplete();
        }, 900);
      }
    }, 40);
    return () => clearInterval(interval);
  }, [onComplete]);
  if (hidden) return null;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "div",
    {
      className: `fixed inset-0 z-[9999] flex flex-col items-center justify-center transition-all duration-900 ease-[cubic-bezier(.16,1,.3,1)] ${exiting ? "opacity-0 scale-[1.04]" : "opacity-100 scale-100"}`,
      style: {
        background: "radial-gradient(1200px 800px at 50% -200px, rgba(212,175,55,0.12), transparent 70%), radial-gradient(900px 600px at 90% 110%, rgba(212,175,55,0.06), transparent 70%), #050505"
      },
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "pointer-events-none absolute inset-0 overflow-hidden", children: Array.from({ length: 20 }).map((_, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
          "span",
          {
            className: "absolute block rounded-full",
            style: {
              width: Math.random() * 3 + 1 + "px",
              height: Math.random() * 3 + 1 + "px",
              top: Math.random() * 100 + "%",
              left: Math.random() * 100 + "%",
              background: "rgba(212,175,55,0.5)",
              animation: `twinkle ${2 + Math.random() * 3}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 2}s`,
              opacity: 0
            }
          },
          i
        )) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            className: "relative mb-8 flex items-center justify-center",
            style: { filter: "drop-shadow(0 0 40px rgba(212,175,55,0.4))" },
            children: /* @__PURE__ */ jsxRuntimeExports.jsx(
              "img",
              {
                src: logoCrest,
                alt: "House of Joshi",
                className: "h-28 w-auto object-contain md:h-36 lg:h-44",
                style: {
                  animation: "pulse-glow 3s ease-in-out infinite"
                }
              }
            )
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "h1",
          {
            className: "mb-2 text-center font-display text-2xl font-semibold tracking-wide md:text-3xl lg:text-4xl",
            style: {
              background: "linear-gradient(135deg, #FFD76A 0%, #D4AF37 40%, #8a6f1f 70%, #FFD76A 100%)",
              WebkitBackgroundClip: "text",
              backgroundClip: "text",
              color: "transparent",
              textShadow: "0 0 60px rgba(255,215,106,0.25)"
            },
            children: "House of Joshi"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mb-10 text-center text-xs font-medium uppercase tracking-[0.35em] text-white/40 md:text-sm", children: "Entering the Kingdom" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative w-64 overflow-hidden rounded-full md:w-80", style: { height: "2px", background: "rgba(255,255,255,0.06)" }, children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            className: "h-full rounded-full transition-all duration-300 ease-out",
            style: {
              width: `${progress}%`,
              background: "linear-gradient(90deg, #8a6f1f, #D4AF37, #FFD76A, #D4AF37, #8a6f1f)",
              backgroundSize: "200% 100%",
              animation: "shimmer 2.5s linear infinite",
              boxShadow: "0 0 20px rgba(212,175,55,0.5), 0 0 40px rgba(212,175,55,0.2)"
            }
          }
        ) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "mt-4 text-[10px] font-medium uppercase tracking-[0.3em] text-white/20 md:text-xs", children: [
          Math.round(progress),
          "%"
        ] })
      ]
    }
  );
}
const appCss = "/assets/styles-CjxCcPoW.css";
function NotFoundComponent() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex min-h-screen items-center justify-center px-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-md text-center", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-8xl font-display gold-text", children: "404" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-4 text-xl font-display", children: "Page not found" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm text-muted-foreground", children: "This path leads beyond the kingdom." }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-6", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/", className: "inline-flex items-center justify-center rounded-md border border-primary/60 px-5 py-2.5 text-sm font-medium text-primary hover:bg-primary/10 transition", children: "Return Home" }) })
  ] }) });
}
function ErrorComponent({ error, reset }) {
  console.error(error);
  const router = useRouter();
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex min-h-screen items-center justify-center px-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-md text-center", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-xl font-display", children: "This page didn't load" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm text-muted-foreground", children: "Something went wrong. Try again." }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-6 flex flex-wrap justify-center gap-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => {
        router.invalidate();
        reset();
      }, className: "rounded-md border border-primary/60 px-4 py-2 text-sm text-primary hover:bg-primary/10", children: "Try again" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "/", className: "rounded-md border border-white/15 px-4 py-2 text-sm hover:bg-white/5", children: "Go home" })
    ] })
  ] }) });
}
const Route$h = createRootRouteWithContext()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "House of Joshi — The Sovereign Web3 Ecosystem" },
      { name: "description", content: "A kingdom built on blockchain innovation. Launch, trade, create and own across chains with the House of Joshi ecosystem." },
      { name: "author", content: "House of Joshi" },
      { property: "og:title", content: "House of Joshi — The Sovereign Web3 Ecosystem" },
      { property: "og:description", content: "A kingdom built on blockchain innovation. Powering the next generation of digital ownership." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:site", content: "@thehouseofjoshi" }
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700;800&family=Inter:wght@300;400;500;600;700&display=swap" }
    ]
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent
});
function RootShell({ children }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("html", { lang: "en", className: "dark", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("head", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(HeadContent, {}) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("body", { children: [
      children,
      /* @__PURE__ */ jsxRuntimeExports.jsx(Scripts, {})
    ] })
  ] });
}
function RootComponent() {
  const { queryClient } = Route$h.useRouteContext();
  const [loaded, setLoaded] = reactExports.useState(false);
  const handleLoadComplete = reactExports.useCallback(() => {
    setLoaded(true);
  }, []);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    !loaded && /* @__PURE__ */ jsxRuntimeExports.jsx(LoadingScreen, { onComplete: handleLoadComplete }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `transition-opacity duration-700 ${loaded ? "opacity-100" : "opacity-0"}`, children: /* @__PURE__ */ jsxRuntimeExports.jsx(QueryClientProvider, { client: queryClient, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(WalletProvider, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(StarField, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Navbar, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx("main", { className: "relative z-10", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Outlet, {}) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Footer, {})
    ] }) }) })
  ] });
}
const $$splitComponentImporter$g = () => import("./whitepaper-DULvlQvK.mjs");
const Route$g = createFileRoute("/whitepaper")({
  head: () => ({
    meta: [{
      title: "Whitepaper — House of Joshi"
    }, {
      name: "description",
      content: "The institutional whitepaper for the House of Joshi sovereign protocol."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$g, "component")
});
const $$splitComponentImporter$f = () => import("./treasury-aiD9BP7p.mjs");
const Route$f = createFileRoute("/treasury")({
  head: () => ({
    meta: [{
      title: "Treasury / DAO — House of Joshi"
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$f, "component")
});
const $$splitComponentImporter$e = () => import("./terms-BLisLNEW.mjs");
const Route$e = createFileRoute("/terms")({
  head: () => ({
    meta: [{
      title: "Terms & Conditions — House of Joshi"
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$e, "component")
});
const $$splitComponentImporter$d = () => import("./swap-D_r-2zzc.mjs");
const Route$d = createFileRoute("/swap")({
  head: () => ({
    meta: [{
      title: "Swap — House of Joshi"
    }, {
      name: "description",
      content: "Access secure multichain token swapping through the House of Joshi ecosystem."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$d, "component")
});
const $$splitComponentImporter$c = () => import("./staking-dOT74owR.mjs");
const Route$c = createFileRoute("/staking")({
  head: () => ({
    meta: [{
      title: "Staking — House of Joshi"
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$c, "component")
});
const $$splitComponentImporter$b = () => import("./security-XxLRe43U.mjs");
const Route$b = createFileRoute("/security")({
  head: () => ({
    meta: [{
      title: "Security & Trust — House of Joshi"
    }, {
      name: "description",
      content: "How the House of Joshi protects your legacy: audited smart contracts, self-custody, and the Sovereign Legacy Shield."
    }, {
      property: "og:title",
      content: "Security & Trust — House of Joshi"
    }, {
      property: "og:description",
      content: "Audited smart contracts, self-custody, and Sovereign Legacy Shield protection."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$b, "component")
});
const $$splitComponentImporter$a = () => import("./privacy-C_FVBC7M.mjs");
const Route$a = createFileRoute("/privacy")({
  head: () => ({
    meta: [{
      title: "Privacy Policy — House of Joshi"
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$a, "component")
});
const $$splitComponentImporter$9 = () => import("./nft-launchpad-C4YufXyj.mjs");
const Route$9 = createFileRoute("/nft-launchpad")({
  head: () => ({
    meta: [{
      title: "NFT Launchpad — House of Joshi"
    }, {
      name: "description",
      content: "Access the official Joshi NFT Launchpad."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$9, "component")
});
const $$splitComponentImporter$8 = () => import("./merch-C7fSsADa.mjs");
const Route$8 = createFileRoute("/merch")({
  head: () => ({
    meta: [{
      title: "Merch Store — House of Joshi"
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$8, "component")
});
const $$splitComponentImporter$7 = () => import("./legacy-vault-7zk2DUiz.mjs");
const Route$7 = createFileRoute("/legacy-vault")({
  head: () => ({
    meta: [{
      title: "Legacy Vault — House of Joshi"
    }, {
      name: "description",
      content: "Preserve what matters forever."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$7, "component")
});
const $$splitComponentImporter$6 = () => import("./kids-D2hdVsEf.mjs");
const Route$6 = createFileRoute("/kids")({
  head: () => ({
    meta: [{
      title: "Kids — House of Joshi"
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$6, "component")
});
const $$splitComponentImporter$5 = () => import("./faq-DzcN3944.mjs");
const Route$5 = createFileRoute("/faq")({
  head: () => ({
    meta: [{
      title: "FAQ — House of Joshi"
    }, {
      name: "description",
      content: "Answers to common questions about the House of Joshi sovereign Web3 ecosystem on Base."
    }, {
      property: "og:title",
      content: "FAQ — House of Joshi"
    }, {
      property: "og:description",
      content: "Answers to common questions about the House of Joshi sovereign Web3 ecosystem on Base."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$5, "component")
});
const $$splitComponentImporter$4 = () => import("./ecosystem-BdrwnDnH.mjs");
const Route$4 = createFileRoute("/ecosystem")({
  head: () => ({
    meta: [{
      title: "Ecosystem — House of Joshi"
    }, {
      name: "description",
      content: "Every pillar of the House of Joshi sovereign Web3 ecosystem."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$4, "component")
});
const $$splitComponentImporter$3 = () => import("./dreamweaver-CYewhKQ9.mjs");
const Route$3 = createFileRoute("/dreamweaver")({
  head: () => ({
    meta: [{
      title: "Dreamweaver — House of Joshi"
    }, {
      name: "description",
      content: "Mint the dreams as NFTs."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$3, "component")
});
const $$splitComponentImporter$2 = () => import("./contact-gN01qCPn.mjs");
const Route$2 = createFileRoute("/contact")({
  head: () => ({
    meta: [{
      title: "Contact — House of Joshi"
    }, {
      name: "description",
      content: "Reach the House of Joshi community and team."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$2, "component")
});
const $$splitComponentImporter$1 = () => import("./about-DRduEHKJ.mjs");
const Route$1 = createFileRoute("/about")({
  head: () => ({
    meta: [{
      title: "About — House of Joshi"
    }, {
      name: "description",
      content: "A new paradigm in legacy, art and blockchain sovereignty."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$1, "component")
});
const $$splitComponentImporter = () => import("./index-BR_X251j.mjs");
const Route = createFileRoute("/")({
  head: () => ({
    meta: [{
      title: "House of Joshi — The Sovereign Web3 Ecosystem"
    }, {
      name: "description",
      content: "A kingdom built on blockchain innovation. Launch, trade, create and own across chains."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter, "component")
});
const WhitepaperRoute = Route$g.update({
  id: "/whitepaper",
  path: "/whitepaper",
  getParentRoute: () => Route$h
});
const TreasuryRoute = Route$f.update({
  id: "/treasury",
  path: "/treasury",
  getParentRoute: () => Route$h
});
const TermsRoute = Route$e.update({
  id: "/terms",
  path: "/terms",
  getParentRoute: () => Route$h
});
const SwapRoute = Route$d.update({
  id: "/swap",
  path: "/swap",
  getParentRoute: () => Route$h
});
const StakingRoute = Route$c.update({
  id: "/staking",
  path: "/staking",
  getParentRoute: () => Route$h
});
const SecurityRoute = Route$b.update({
  id: "/security",
  path: "/security",
  getParentRoute: () => Route$h
});
const PrivacyRoute = Route$a.update({
  id: "/privacy",
  path: "/privacy",
  getParentRoute: () => Route$h
});
const NftLaunchpadRoute = Route$9.update({
  id: "/nft-launchpad",
  path: "/nft-launchpad",
  getParentRoute: () => Route$h
});
const MerchRoute = Route$8.update({
  id: "/merch",
  path: "/merch",
  getParentRoute: () => Route$h
});
const LegacyVaultRoute = Route$7.update({
  id: "/legacy-vault",
  path: "/legacy-vault",
  getParentRoute: () => Route$h
});
const KidsRoute = Route$6.update({
  id: "/kids",
  path: "/kids",
  getParentRoute: () => Route$h
});
const FaqRoute = Route$5.update({
  id: "/faq",
  path: "/faq",
  getParentRoute: () => Route$h
});
const EcosystemRoute = Route$4.update({
  id: "/ecosystem",
  path: "/ecosystem",
  getParentRoute: () => Route$h
});
const DreamweaverRoute = Route$3.update({
  id: "/dreamweaver",
  path: "/dreamweaver",
  getParentRoute: () => Route$h
});
const ContactRoute = Route$2.update({
  id: "/contact",
  path: "/contact",
  getParentRoute: () => Route$h
});
const AboutRoute = Route$1.update({
  id: "/about",
  path: "/about",
  getParentRoute: () => Route$h
});
const IndexRoute = Route.update({
  id: "/",
  path: "/",
  getParentRoute: () => Route$h
});
const rootRouteChildren = {
  IndexRoute,
  AboutRoute,
  ContactRoute,
  DreamweaverRoute,
  EcosystemRoute,
  FaqRoute,
  KidsRoute,
  LegacyVaultRoute,
  MerchRoute,
  NftLaunchpadRoute,
  PrivacyRoute,
  SecurityRoute,
  StakingRoute,
  SwapRoute,
  TermsRoute,
  TreasuryRoute,
  WhitepaperRoute
};
const routeTree = Route$h._addFileChildren(rootRouteChildren)._addFileTypes();
const getRouter = () => {
  const queryClient = new QueryClient();
  const router = createRouter({
    routeTree,
    context: { queryClient },
    scrollRestoration: true,
    defaultPreloadStaleTime: 0
  });
  return router;
};
export {
  getRouter
};
