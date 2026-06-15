import { useState, useCallback } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { Navbar } from "@/components/sites/Navbar";
import { Footer } from "@/components/sites/Footer";
import { WalletProvider } from "@/components/sites/WalletProvider";
import { StarField } from "@/components/sites/StarField";
import { LoadingScreen } from "@/components/sites/LoadingScreen";

import appCss from "../styles.css?url";

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

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
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
      { name: "twitter:site", content: "@thehouseofjoshi" },
    ],
    links: [
      { rel: "icon", href: "/favicon.png", type: "image/png" },
      { rel: "apple-touch-icon", href: "/favicon.png" },
      { rel: "stylesheet", href: appCss },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700;800&family=Inter:wght@300;400;500;600;700&display=swap" },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark">
      <head><HeadContent /></head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();
  const [loaded, setLoaded] = useState(false);

  const handleLoadComplete = useCallback(() => {
    setLoaded(true);
  }, []);

  return (
    <>
      {!loaded && <LoadingScreen onComplete={handleLoadComplete} />}
      <div className={`transition-opacity duration-700 ${loaded ? "opacity-100" : "opacity-0"}`}>
        <QueryClientProvider client={queryClient}>
          <WalletProvider>
            <StarField />
            <Navbar />
            <main className="relative z-10">
              <Outlet />
            </main>
            <Footer />
          </WalletProvider>
        </QueryClientProvider>
      </div>
    </>
  );
}
