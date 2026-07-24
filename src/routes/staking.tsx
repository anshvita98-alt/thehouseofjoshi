import { createFileRoute } from "@tanstack/react-router";
import { ComingSoon } from "@/components/sites/ComingSoon";

export const Route = createFileRoute("/staking")({
  head: () => ({ meta: [{ title: "Staking — House of Joshi" }] }),
  component: () => <ComingSoon eyebrow="STAKING" title={<>Sovereign <span className="gold-text">Staking</span></>}
    subtitle="Stake your NFTs and earn exclusive sovereign rewards."
    description="A royal staking experience is being prepared. Lock your assets in the kingdom and receive sovereign yield powered by treasury operations." />,
});
