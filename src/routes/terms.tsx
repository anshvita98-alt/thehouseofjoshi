import { createFileRoute } from "@tanstack/react-router";
import { LegalDoc } from "@/components/sites/LegalDoc";

export const Route = createFileRoute("/terms")({
  head: () => ({ meta: [{ title: "Terms & Conditions — House of Joshi" }] }),
  component: () => <LegalDoc
    eyebrow="LEGAL"
    title={<>Terms & <span className="gold-text">Conditions</span></>}
    sections={[
      { id: "agreement", title: "Agreement to Terms", body: "By accessing or using any House of Joshi product, you agree to be bound by these Terms. If you do not agree, do not use the services. The Joshi ecosystem is provided on an as-is basis and your continued use constitutes acceptance of any updates." },
      { id: "no-advice", title: "No Financial Advice", body: "Nothing on the House of Joshi platform constitutes financial, investment, legal, or tax advice. All information is provided for educational and informational purposes only. You are solely responsible for your own decisions." },
      { id: "liability", title: "Limitation of Liability", body: "To the maximum extent permitted by law, House of Joshi, its contributors and affiliates shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising from your use of the platform, smart contracts, or third-party integrations." },
      { id: "custody", title: "Self-Custody & Third Parties", body: "House of Joshi is a non-custodial ecosystem. You alone are responsible for your wallet keys and assets. Third-party services such as wallets, RPC providers, and on-chain protocols are governed by their own terms and we are not liable for their behavior." },
    ]} />,
});
