import type { IncomingMessage, ServerResponse } from "node:http";

const pages = [
  { title: "Home", url: "https://thehouseofjoshi.com/", summary: "Overview of the sovereign Web3 ecosystem, its products, networks, and tokens." },
  { title: "About", url: "https://thehouseofjoshi.com/about", summary: "The House of Joshi story, principles, and team." },
  { title: "Ecosystem", url: "https://thehouseofjoshi.com/ecosystem", summary: "Products and projects across the House of Joshi ecosystem." },
  { title: "Swap", url: "https://thehouseofjoshi.com/swap", summary: "Information about multichain token swapping." },
  { title: "NFT Launchpad", url: "https://thehouseofjoshi.com/nft-launchpad", summary: "The official NFT launchpad information." },
  { title: "Legacy Vault", url: "https://thehouseofjoshi.com/legacy-vault", summary: "Digital heritage preservation." },
  { title: "Dreamweaver", url: "https://thehouseofjoshi.com/dreamweaver", summary: "Creative NFT project." },
  { title: "Staking", url: "https://thehouseofjoshi.com/staking", summary: "Information about the House of Joshi staking experience." },
  { title: "Treasury", url: "https://thehouseofjoshi.com/treasury", summary: "Governance and treasury information." },
  { title: "Merch Store", url: "https://thehouseofjoshi.com/merch", summary: "House of Joshi merchandise." },
  { title: "Kids", url: "https://thehouseofjoshi.com/kids", summary: "Educational resources for younger audiences." },
  { title: "Whitepaper", url: "https://thehouseofjoshi.com/whitepaper", summary: "Protocol vision and ecosystem overview." },
  { title: "FAQ", url: "https://thehouseofjoshi.com/faq", summary: "Answers to common questions." },
  { title: "Security", url: "https://thehouseofjoshi.com/security", summary: "Security information and user guidance." },
  { title: "Contact", url: "https://thehouseofjoshi.com/contact", summary: "Contact options and official community links." },
  { title: "Terms", url: "https://thehouseofjoshi.com/terms", summary: "Terms and conditions." },
  { title: "Privacy", url: "https://thehouseofjoshi.com/privacy", summary: "Privacy policy." },
  { title: "Kingdom Within", url: "https://kingdomwithin.thehouseofjoshi.com/", summary: "Scripture geometry and creative exploration." },
  { title: "Kaboom", url: "https://kaboom.thehouseofjoshi.com/", summary: "House of Joshi project." },
  { title: "Joshi Astrals", url: "https://joshiastrals.thehouseofjoshi.com/", summary: "House of Joshi project." },
  { title: "NFT Marketplace", url: "https://nftmarketplace.thehouseofjoshi.com/", summary: "Explore and trade ecosystem NFTs." },
];

type JsonRpcRequest = { jsonrpc?: string; id?: string | number | null; method?: string; params?: any };

export default function handler(req: IncomingMessage & { body?: JsonRpcRequest }, res: ServerResponse) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Accept, Mcp-Session-Id, Mcp-Protocol-Version");
  res.setHeader("Cache-Control", "no-store");
  res.setHeader("Mcp-Protocol-Version", "2025-06-18");
  if (req.method === "OPTIONS") {
    res.statusCode = 204;
    return res.end();
  }
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST, OPTIONS");
    res.statusCode = 405;
    return res.end("Method Not Allowed");
  }

  const request = req.body;
  if (!request || request.jsonrpc !== "2.0" || typeof request.method !== "string") {
    res.statusCode = 400;
    res.setHeader("Content-Type", "application/json");
    return res.end(JSON.stringify({ jsonrpc: "2.0", id: request?.id ?? null, error: { code: -32600, message: "Invalid JSON-RPC request" } }));
  }
  if (request.id === undefined && request.method.startsWith("notifications/")) {
    res.statusCode = 202;
    return res.end();
  }

  let result: unknown;
  if (request.method === "initialize") {
    result = {
      protocolVersion: "2025-06-18",
      capabilities: { tools: { listChanged: false } },
      serverInfo: { name: "house-of-joshi-public-site", title: "The House of Joshi Public Site", version: "1.0.0" },
      instructions: "Read-only discovery for public House of Joshi web pages. No wallet or transaction actions are available.",
    };
  } else if (request.method === "ping") {
    result = {};
  } else if (request.method === "tools/list") {
    result = { tools: [{
      name: "search_public_pages",
      title: "Search public pages",
      description: "Find matching public pages on the House of Joshi website.",
      inputSchema: { type: "object", properties: { query: { type: "string", description: "Words to find in page titles, summaries, or paths." } }, required: ["query"], additionalProperties: false },
    }] };
  } else if (request.method === "tools/call" && request.params?.name === "search_public_pages") {
    const query = typeof request.params.arguments?.query === "string" ? request.params.arguments.query.trim().toLowerCase() : "";
    if (!query || query.length > 200) {
      result = { isError: true, content: [{ type: "text", text: "Provide a query between 1 and 200 characters." }] };
    } else {
      const terms = query.split(/\s+/);
      const matches = pages.filter(page => terms.some(term => (page.title + " " + page.url + " " + page.summary).toLowerCase().includes(term)));
      result = { content: [{ type: "text", text: JSON.stringify(matches) }], structuredContent: { pages: matches } };
    }
  } else {
    res.statusCode = 200;
    res.setHeader("Content-Type", "application/json");
    return res.end(JSON.stringify({ jsonrpc: "2.0", id: request.id ?? null, error: { code: request.method === "tools/call" ? -32602 : -32601, message: request.method === "tools/call" ? "Unknown tool" : "Method not found" } }));
  }

  if (request.id === undefined) {
    res.statusCode = 202;
    return res.end();
  }
  res.statusCode = 200;
  res.setHeader("Content-Type", "application/json");
  return res.end(JSON.stringify({ jsonrpc: "2.0", id: request.id, result }));
}
