import { Link } from "@tanstack/react-router";
import logo from "@/assets/joshi-logo.png";

export function Footer() {
  return (
    <footer className="relative z-10 mt-32 border-t border-primary/15 pt-20 pb-10"
            style={{ background: "linear-gradient(180deg, transparent, rgba(11,11,15,0.9))" }}>
      <div className="mx-auto max-w-7xl px-6 grid gap-12 md:grid-cols-2 lg:grid-cols-5">
        <div className="lg:col-span-2">
          <Link to="/" className="flex items-center gap-3">
            <img src={logo} alt="House of Joshi" width={48} height={48} className="h-12 w-12" loading="lazy" />
            <div>
              <div className="font-display text-lg gold-text">HOUSE OF JOSHI</div>
              <div className="text-[10px] tracking-[0.3em] text-muted-foreground">THE SOVEREIGN WEB3 ECOSYSTEM</div>
            </div>
          </Link>
          <p className="mt-5 text-sm text-muted-foreground max-w-sm leading-relaxed">
            A kingdom built on blockchain innovation. Preserving stories, empowering creators, and shaping a sovereign decentralized future.
          </p>
          <form onSubmit={(e)=>{e.preventDefault();}} className="mt-6 flex gap-2 max-w-sm">
            <input type="email" required placeholder="Your royal email" className="flex-1 rounded-full bg-white/5 border border-primary/30 px-4 py-2.5 text-sm placeholder:text-muted-foreground/60 focus:outline-none focus:border-primary" />
            <button className="rounded-full border border-primary/70 px-4 py-2.5 text-xs tracking-wider text-primary hover:bg-primary/10">JOIN</button>
          </form>
        </div>

        <FooterCol title="Ecosystem" links={[
          ["Ecosystem","/ecosystem"], ["Swap","/swap"], ["NFT Launchpad","/nft-launchpad"],
          ["Legacy Vault","/legacy-vault"], ["Dreamweaver","/dreamweaver"], ["Staking","/staking"], ["Treasury / DAO","/treasury"],
        ]} />
        <FooterCol title="Discover" links={[
          ["About","/about"], ["Whitepaper","/whitepaper"], ["Kids","/kids"], ["Merch Store","/merch"], ["FAQ","/faq"], ["Security","/security"], ["Contact","/contact"],
        ]} />
        <FooterCol title="Community" links={[]} external={[
          ["X (Twitter)","https://x.com/thehouseofjoshi"],
          ["Discord","https://discord.com/invite/uH9zVeAwDu"],
          ["Instagram","https://www.instagram.com/thehouseofjoshi/"],
          ["Email","mailto:support@thehouseofjoshi.com"],
        ]} />
      </div>

      <div className="mx-auto max-w-7xl px-6 mt-14">
        <div className="gold-divider mb-6" />
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-muted-foreground">
          <div>© The House of Joshi. All rights reserved.</div>
          <div className="flex gap-5">
            <Link to="/terms" className="hover:text-primary">Terms & Conditions</Link>
            <Link to="/privacy" className="hover:text-primary">Privacy Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({ title, links, external }: { title: string; links: [string, string][]; external?: [string, string][] }) {
  return (
    <div>
      <div className="text-[11px] tracking-[0.3em] text-primary mb-4">{title.toUpperCase()}</div>
      <ul className="space-y-2.5 text-sm">
        {links.map(([l,h]) => (
          <li key={h}><Link to={h} className="text-white/75 hover:text-primary transition">{l}</Link></li>
        ))}
        {external?.map(([l,h]) => (
          <li key={h}><a href={h} target="_blank" rel="noreferrer noopener" className="text-white/75 hover:text-primary transition">{l} ↗</a></li>
        ))}
      </ul>
    </div>
  );
}
