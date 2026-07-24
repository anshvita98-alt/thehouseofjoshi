import { createFileRoute } from "@tanstack/react-router";
import { ComingSoon } from "@/components/sites/ComingSoon";

export const Route = createFileRoute("/treasury")({
  head: () => ({ meta: [{ title: "Treasury / DAO — House of Joshi" }] }),
  component: () => <ComingSoon eyebrow="GOVERNANCE" title={<>Treasury & <span className="gold-text">DAO</span></>}
    subtitle="Sovereign governance for the House of Joshi kingdom."
    description="On-chain proposals, weighted voting, transparent treasury analytics, and a holographic governance dashboard — coming soon." />,
});
