import { useState, useCallback, useEffect } from "react";
import { QueryClient } from "@tanstack/react-query";
import { Outlet, Link, createRootRouteWithContext, useRouter } from "@tanstack/react-router";
import { Navbar } from "@/components/sites/Navbar";
import { Footer } from "@/components/sites/Footer";
import { StarField } from "@/components/sites/StarField";
import { LoadingScreen } from "@/components/sites/LoadingScreen";
import JoshiConcierge from "@/components/sites/JoshiConcierge";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center px-4">
      <div className="max-w-md text-center">
        <h1 className="text-8xl font-display gold-text">404</h1>
        <h2 className="mt-4 text-xl font-display">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">This path leads beyond the kingdom.</p>
        <div className="mt-6">
          <Link to="/" className="inline-flex items-center justify-center rounded-md border border-primary/60 px-5 py-2.5 text-sm font-medium text-primary hover:bg-primary/10 transition">
            Return Home
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: unknown; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  return (
    <div className="flex min-h-screen items-center justify-center px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-display">This page didn't load</h1>
        <p className="mt-2 text-sm text-muted-foreground">Something went wrong. Try again.</p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button onClick={() => { router.invalidate(); reset(); }} className="rounded-md border border-primary/60 px-4 py-2 text-sm text-primary hover:bg-primary/10">Try again</button>
          <a href="/" className="rounded-md border border-white/15 px-4 py-2 text-sm hover:bg-white/5">Go home</a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
  head: () => ({
    scripts: [
      {
        src: "https://www.googletagmanager.com/gtag/js?id=G-DECPDW2ELX",
        async: true,
      },
      {
        innerHTML: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-DECPDW2ELX');
        `,
      },
    ],
  }),
});

function RootComponent() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    type WebMcpContext = {
      registerTool: (tool: {
        name: string;
        description: string;
        inputSchema: { type: "object"; properties: Record<string, unknown>; required: string[]; additionalProperties: false };
        execute: (input: { query: string }) => { pages: { title: string; url: string; summary: string }[] };
      }) => void;
    };
    const modelContext = (navigator as Navigator & { modelContext?: WebMcpContext }).modelContext;
    if (!modelContext?.registerTool) return;

    const pages = [
      { title: "Home", url: "/", summary: "The sovereign Web3 ecosystem, products, networks, and tokens." },
      { title: "About", url: "/about", summary: "The project story, principles, and team." },
      { title: "Ecosystem", url: "/ecosystem", summary: "Products and projects across the ecosystem." },
      { title: "Swap", url: "/swap", summary: "Information about multichain token swapping." },
      { title: "NFT Launchpad", url: "/nft-launchpad", summary: "Official NFT launchpad information." },
      { title: "Legacy Vault", url: "/legacy-vault", summary: "Digital heritage preservation." },
      { title: "Dreamweaver", url: "/dreamweaver", summary: "Creative NFT project." },
      { title: "Staking", url: "/staking", summary: "Information about the House of Joshi staking experience." },
      { title: "Treasury", url: "/treasury", summary: "Governance and treasury information." },
      { title: "Merch Store", url: "/merch", summary: "House of Joshi merchandise." },
      { title: "Kids", url: "/kids", summary: "Educational resources for younger audiences." },
      { title: "Whitepaper", url: "/whitepaper", summary: "Protocol vision and ecosystem overview." },
      { title: "FAQ", url: "/faq", summary: "Answers to common questions." },
      { title: "Security", url: "/security", summary: "Security information and user guidance." },
      { title: "Contact", url: "/contact", summary: "Contact options and official community links." },
      { title: "Terms", url: "/terms", summary: "Terms and conditions." },
      { title: "Privacy", url: "/privacy", summary: "Privacy policy." },
      { title: "Kingdom Within", url: "https://kingdomwithin.thehouseofjoshi.com/", summary: "Scripture geometry and creative exploration." },
      { title: "Kaboom", url: "https://kaboom.thehouseofjoshi.com/", summary: "House of Joshi project." },
      { title: "Joshi Astrals", url: "https://joshiastrals.thehouseofjoshi.com/", summary: "House of Joshi project." },
      { title: "NFT Marketplace", url: "https://nftmarketplace.thehouseofjoshi.com/", summary: "Explore and trade ecosystem NFTs." },
    ];
    try {
      modelContext.registerTool({
        name: "search_house_of_joshi_pages",
        description: "Search public House of Joshi pages by topic and return their paths and summaries.",
        inputSchema: {
          type: "object",
          properties: { query: { type: "string", description: "Topic, product, or page to find." } },
          required: ["query"],
          additionalProperties: false,
        },
        execute: ({ query }) => {
          const terms = query.trim().toLowerCase().split(/\s+/).filter(Boolean);
          return { pages: pages.filter(page => terms.some(term => `${page.title} ${page.url} ${page.summary}`.toLowerCase().includes(term))) };
        },
      });
    } catch (error) {
      console.warn("WebMCP tool registration was unavailable.", error);
    }
  }, []);

  const handleLoadComplete = useCallback(() => {
    setLoaded(true);
  }, []);

  return (
    <>
      {!loaded && <LoadingScreen onComplete={handleLoadComplete} />}
      <div className={`transition-opacity duration-700 ${loaded ? "opacity-100" : "opacity-0"}`}>
        <StarField />
        <Navbar />
        <main className="relative z-10">
          <Outlet />
        </main>
        <Footer />
      </div>
      {loaded && <JoshiConcierge />}
    </>
  );
}
