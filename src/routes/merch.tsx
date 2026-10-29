import { createFileRoute } from "@tanstack/react-router";
import { ComingSoon } from "@/components/sites/ComingSoon";

export const Route = createFileRoute("/merch")({
  head: () => ({
    links: [{ rel: "canonical", href: "https://thehouseofjoshi.com/merch" }],
    meta: [{ title: "Merch Store — House of Joshi" }, { name: "description", content: "Discover House of Joshi apparel and limited-edition heritage merchandise." }] }),
  component: () => <ComingSoon eyebrow="STOREFRONT" title={<>Sovereign <span className="gold-text">Merch Store</span></>}
    subtitle="Cinematic luxury fashion for the kingdom."
    description="A premium storefront with editorial product displays, royal apparel, and limited-edition heritage drops — coming soon." />,
});
