import { useState, useCallback } from "react";
import { QueryClient } from "@tanstack/react-query";
import { Outlet, Link, createRootRouteWithContext, useRouter } from "@tanstack/react-router";
import { Navbar } from "@/components/sites/Navbar";
import { Footer } from "@/components/sites/Footer";
import { StarField } from "@/components/sites/StarField";
import { LoadingScreen } from "@/components/sites/LoadingScreen";

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
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
  head: () => ({
    scripts: [
      {
        src: "https://www.googletagmanager.com/gtag/js?id=G-CP2M9VHTFQ",
        async: true,
      },
      {
        innerHTML: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-CP2M9VHTFQ');
        `,
      },
    ],
  }),
});

function RootComponent() {
  const [loaded, setLoaded] = useState(false);

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
    </>
  );
}
