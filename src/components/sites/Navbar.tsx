import { Link, useRouterState } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { ArrowUpRight, Menu, Sparkles, X } from "lucide-react";
import logo from "@/assets/joshi-logo.png";

const NAV = [
  { to: "/", label: "Home" },
  { to: "/ecosystem", label: "Ecosystem" },
  { href: "https://kingdomwithin.thehouseofjoshi.com/", label: "Kingdom Within" },
  { to: "/swap", label: "Swap" },
  { href: "https://nftmarketplace.thehouseofjoshi.com/", label: "NFT Marketplace" },
  { to: "/nft-launchpad", label: "NFT Launchpad" },
  { to: "/legacy-vault", label: "Legacy Vault" },
  { to: "/dreamweaver", label: "Dreamweaver" },
  { to: "/staking", label: "Staking" },
  { to: "/treasury", label: "Treasury" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  
  const path = useRouterState({ select: s => s.location.pathname });

  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 12);
    on(); window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);

  

  return (
    <>
      <header className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${scrolled ? "py-2" : "py-3"}`}>
        <div className="mx-auto max-w-7xl px-3 sm:px-6">
          <a href="https://kingdomwithin.thehouseofjoshi.com/" target="_blank" rel="noopener noreferrer"
             className="group mb-2 flex min-h-8 items-center justify-center gap-2 overflow-hidden rounded-full border border-primary/30 px-3 py-1.5 text-center text-[9px] sm:text-[10px] tracking-[0.14em] sm:tracking-[0.22em] uppercase transition-all hover:border-primary/70 hover:gold-glow"
             style={{ background: "linear-gradient(90deg, rgba(212,175,55,0.08), rgba(255,215,106,0.18), rgba(212,175,55,0.08))" }}>
            <Sparkles size={12} className="shrink-0 text-primary animate-pulse" />
            <span className="text-white/80">Kingdom Within is live</span>
            <span className="hidden sm:inline text-primary/50">•</span>
            <span className="gold-text font-semibold">Generate &amp; Mint Now</span>
            <ArrowUpRight size={12} className="shrink-0 text-primary transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </a>
          <div className="relative flex items-center justify-between gap-3 rounded-2xl px-3 sm:px-5 py-2.5 backdrop-blur-xl"
               style={{
                 background: "linear-gradient(180deg, rgba(5,5,5,0.78), rgba(11,11,15,0.6))",
                 borderBottom: "1px solid rgba(212,175,55,0.35)",
                 boxShadow: scrolled ? "0 10px 40px rgba(0,0,0,0.55), 0 0 0 1px rgba(212,175,55,0.12)" : "none",
               }}>
            <Link to="/" className="flex items-center gap-2.5 shrink-0 group">
              <img src={logo} alt="House of Joshi" width={40} height={40}
                   className="h-9 w-9 sm:h-10 sm:w-10 object-contain animate-pulse-glow drop-shadow-[0_0_18px_rgba(212,175,55,0.55)]" />
              <span className="hidden sm:block leading-tight">
                <span className="block font-display text-[13px] tracking-[0.18em] gold-text">HOUSE OF JOSHI</span>
                <span className="block text-[9px] tracking-[0.32em] text-muted-foreground">SOVEREIGN WEB3</span>
              </span>
            </Link>

            <nav className="hidden lg:flex items-center gap-0.5 min-w-0">
              {NAV.map(n => {
                if ("href" in n) {
                  return (
                    <a key={n.href} href={n.href} target="_blank" rel="noopener noreferrer"
                       className="px-2.5 py-2 text-[11.5px] tracking-wide rounded-md whitespace-nowrap text-white/75 hover:text-primary transition-all">
                      {n.label}
                    </a>
                  );
                }

                const active = path === n.to;
                return (
                  <Link key={n.to} to={n.to}
                        className={`px-2.5 py-2 text-[11.5px] tracking-wide rounded-md whitespace-nowrap transition-all ${active ? "text-primary" : "text-white/75 hover:text-primary"}`}
                        style={active ? { textShadow: "0 0 18px rgba(255,215,106,0.6)" } : undefined}>
                    {n.label}
                  </Link>
                );
              })}
            </nav>

            <div className="flex items-center gap-2 shrink-0">
              <button onClick={() => setOpen(v=>!v)} className="lg:hidden p-2 -mr-1 text-primary" aria-label="Menu">
                {open ? <X size={22} /> : <Menu size={22} />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile / tablet drawer */}
      <div className={`fixed inset-0 z-40 lg:hidden transition-all ${open ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"}`}>
        <div className="absolute inset-0 bg-black/80 backdrop-blur-md" onClick={() => setOpen(false)} />
        <div className={`absolute right-0 top-0 h-full w-[88%] max-w-sm glass-strong p-6 pt-24 overflow-y-auto transition-transform duration-500 ${open ? "translate-x-0" : "translate-x-full"}`}>
          <nav className="flex flex-col gap-1">
            {NAV.map(n => (
              "href" in n ? (
                <a key={n.href} href={n.href} target="_blank" rel="noopener noreferrer" onClick={() => setOpen(false)}
                   className="px-3 py-3 text-sm rounded-md text-white/85 hover:text-primary hover:bg-primary/5">
                  {n.label}
                </a>
              ) : (
                <Link key={n.to} to={n.to} onClick={() => setOpen(false)}
                      className={`px-3 py-3 text-sm rounded-md ${path===n.to ? "text-primary bg-primary/10" : "text-white/85 hover:text-primary hover:bg-primary/5"}`}>
                  {n.label}
                </Link>
              )
            ))}
          </nav>
        </div>
      </div>
      
    </>
  );
}
