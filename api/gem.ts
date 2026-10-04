import type { IncomingMessage, ServerResponse } from "node:http";
import { z } from "zod";

const messageSchema = z.object({
  messages: z.array(z.object({
    role: z.enum(["user", "model"]),
    text: z.string().trim().min(1).max(4000),
  })).min(1).max(20),
});

export default async function handler(req: IncomingMessage & { body?: unknown }, res: ServerResponse) {
  const respond = (status: number, body: object) => {
    res.statusCode = status;
    res.setHeader("Content-Type", "application/json");
    res.setHeader("Cache-Control", "no-store");
    res.end(JSON.stringify(body));
  };
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    return respond(405, { error: "Use POST to send a message." });
  }
  if (!req.headers["content-type"]?.includes("application/json")) {
    return respond(415, { error: "Send a JSON message." });
  }
  const parsed = messageSchema.safeParse(req.body);
  if (!parsed.success || parsed.data.messages.at(-1)?.role !== "user" ||
      parsed.data.messages.reduce((size, message) => size + message.text.length, 0) > 24000) {
    return respond(400, { error: "Please shorten your message and try again." });
  }
  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) return respond(503, { error: "Gem is being set up. Please try again soon." });
  const model = process.env.GEMINI_MODEL || "gemini-3.5-flash-lite";
  try {
    const upstream = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/${encodeURIComponent(model)}:generateContent`, {
      method: "POST",
      headers: { "Content-Type": "application/json", "x-goog-api-key": apiKey },
      signal: AbortSignal.timeout(25000),
      body: JSON.stringify({
        systemInstruction: { parts: [{ text: "You are Gem Joshi, the friendly AI concierge of The House of Joshi. Give concise, helpful answers in the visitor's language. Help with Web3 concepts and navigating the site: /ecosystem, /swap, /nft-launchpad, /legacy-vault, /dreamweaver, /staking, /treasury, /faq, /contact. Kingdom Within is at https://kingdomwithin.thehouseofjoshi.com/ and the NFT marketplace is at https://nftmarketplace.thehouseofjoshi.com/. You have no live account, blockchain, pricing, or wallet access. Never invent project facts, yields, promises, or security guarantees. When specifics are unknown, direct visitors to /contact. Never request seed phrases, private keys or passwords. You cannot execute transactions or protect accounts. Do not present yourself as a human or actual company officer. Return plain text, with short paragraphs." }] },
        contents: parsed.data.messages.map(message => ({ role: message.role, parts: [{ text: message.text }] })),
        generationConfig: { maxOutputTokens: 768 },
      }),
    });
    if (!upstream.ok) return respond(upstream.status === 429 ? 429 : 502, {
      error: upstream.status === 429 ? "Gem is busy. Please try again in a moment." : "Gem couldn't reply right now. Please try again shortly.",
    });
    const data = await upstream.json();
    const reply = data.candidates?.[0]?.content?.parts
      ?.filter((part: { text?: string; thought?: boolean }) => !part.thought && typeof part.text === "string")
      .map((part: { text: string }) => part.text).join("").trim();
    if (!reply) return respond(502, { error: "Gem couldn't answer that. Please try rephrasing your question." });
    return respond(200, { reply });
  } catch {
    return respond(502, { error: "Gem couldn't connect right now. Please try again." });
  }
}
