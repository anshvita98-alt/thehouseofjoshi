import { createFileRoute } from "@tanstack/react-router";
import { ComingSoon } from "@/components/sites/ComingSoon";

export const Route = createFileRoute("/staking")({
  head: () => ({
    links: [{ rel: "canonical", href: "https://thehouseofjoshi.com/staking" }],
    meta: [{ title: "Staking — House of Joshi" }, { name: "description", content: "Learn about the House of Joshi staking experience and its development status." }] }),
  component: () => <ComingSoon eyebrow="STAKING" title={<>Sovereign <span className="gold-text">Staking</span></>}
    subtitle="Stake your NFTs and earn exclusive sovereign rewards."
    description="A royal staking experience is being prepared. Lock your assets in the kingdom and receive sovereign yield powered by treasury operations." />,
});
