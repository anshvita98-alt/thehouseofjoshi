import type { IncomingMessage, ServerResponse } from "node:http";

export default function handler(_req: IncomingMessage, res: ServerResponse) {
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/markdown; charset=utf-8");
  res.setHeader("Cache-Control", "public, max-age=300, s-maxage=3600");
  res.setHeader("Link", '<https://thehouseofjoshi.com/llms.txt>; rel="describedby"; type="text/plain"');
  res.end([
    "# The House of Joshi — The Sovereign Web3 Ecosystem",
    "",
    "The House of Joshi is a Web3 ecosystem for digital ownership, creative projects, multichain tools, and preserving digital heritage. The project brings together NFT creation and discovery, token swapping, and community resources.",
    "",
    "## Ecosystem",
    "",
    "- [Ecosystem overview](https://thehouseofjoshi.com/ecosystem)",
    "- [NFT Launchpad](https://thehouseofjoshi.com/nft-launchpad)",
    "- [Swap](https://thehouseofjoshi.com/swap)",
    "- [NFT Marketplace](https://nftmarketplace.thehouseofjoshi.com/)",
    "- [Kingdom Within](https://kingdomwithin.thehouseofjoshi.com/)",
    "- [Kaboom](https://kaboom.thehouseofjoshi.com/)",
    "- [Joshi Astrals](https://joshiastrals.thehouseofjoshi.com/)",
    "- [Legacy Vault](https://thehouseofjoshi.com/legacy-vault)",
    "- [Dreamweaver](https://thehouseofjoshi.com/dreamweaver)",
    "- [Staking](https://thehouseofjoshi.com/staking): Staking experience information.",
    "- [Treasury / DAO](https://thehouseofjoshi.com/treasury): Governance and treasury plans.",
    "- [Merch Store](https://thehouseofjoshi.com/merch): House of Joshi merchandise.",
    "- [Kids](https://thehouseofjoshi.com/kids): Educational resources for younger audiences.",
    "",
    "## About and help",
    "",
    "- [About](https://thehouseofjoshi.com/about)",
    "- [Whitepaper](https://thehouseofjoshi.com/whitepaper)",
    "- [Frequently asked questions](https://thehouseofjoshi.com/faq)",
    "- [Security](https://thehouseofjoshi.com/security)",
    "- [Contact](https://thehouseofjoshi.com/contact)",
    "- [Terms and conditions](https://thehouseofjoshi.com/terms)",
    "- [Privacy policy](https://thehouseofjoshi.com/privacy)",
    "- Email: [support@thehouseofjoshi.com](mailto:support@thehouseofjoshi.com)",
  ].join("\n"));
}
