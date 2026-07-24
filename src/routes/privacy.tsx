import { createFileRoute } from "@tanstack/react-router";
import { LegalDoc } from "@/components/sites/LegalDoc";

export const Route = createFileRoute("/privacy")({
  head: () => ({ meta: [{ title: "Privacy Policy — House of Joshi" }] }),
  component: () => <LegalDoc
    eyebrow="PRIVACY"
    title={<>Privacy <span className="gold-text">Policy</span></>}
    sections={[
      { id: "architecture", title: "Decentralized Architecture", body: "House of Joshi is built on decentralized infrastructure. The protocol does not operate centralized user accounts and minimizes data collection by design." },
      { id: "no-collect", title: "Information We Do Not Collect", body: "We do not collect personal identifiers, government IDs, or biometric data. We do not require sign-ups, passwords or personal accounts to access our public dApps." },
      { id: "interact", title: "Information We Interact With", body: "Public on-chain data, wallet addresses, and transaction signatures are inherently visible on the blockchain. Our interfaces interact with these public records to render the experience." },
      { id: "wallet", title: "Wallet Security", body: "We never request your seed phrase or private keys. All wallet operations are signed by you, on your device, through your own wallet software." },
      { id: "third-party", title: "Third-Party Services", body: "We may rely on third-party RPC providers, analytics, IPFS gateways, or integrators. Their handling of data is governed by their own policies." },
      { id: "cookies", title: "Cookies and Local Storage", body: "We use minimal local storage for UI preferences such as remembering your wallet selection. We do not use tracking cookies for advertising." },
      { id: "control", title: "User Control", body: "You may disconnect your wallet, clear local storage, and disengage from the protocol at any time. On-chain records, by nature, remain permanent." },
      { id: "updates", title: "Policy Updates", body: "We may update this policy from time to time. Material updates will be announced through official channels." },
      { id: "contact", title: "Contact", body: "For privacy questions, contact support@thehouseofjoshi.com." },
    ]} />,
});
