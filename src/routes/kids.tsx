import { createFileRoute } from "@tanstack/react-router";
import { ComingSoon } from "@/components/sites/ComingSoon";

export const Route = createFileRoute("/kids")({
  head: () => ({
    links: [{ rel: "canonical", href: "https://thehouseofjoshi.com/kids" }],
    meta: [{ title: "Kids — House of Joshi" }, { name: "description", content: "A safe educational Web3 realm introducing blockchain, NFTs, and digital ownership to young minds." }] }),
  component: () => <ComingSoon eyebrow="EDUCATION" title={<>The Kingdom for <span className="gold-text">Kids</span></>}
    subtitle="A safe educational Web3 realm for the next generation."
    description="Playful, premium, and beautifully designed lessons that introduce blockchain, NFTs and digital sovereignty to young minds." />,
});
