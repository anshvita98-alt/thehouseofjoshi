import { Buffer } from "node:buffer";
import { createRequire } from "node:module";
import { fileURLToPath } from "node:url";
import { dirname, resolve } from "node:path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

let server;

async function loadServer() {
  if (server) return server;
  
  try {
    // Try to load from relative path
    const serverPath = resolve(__dirname, "../dist/server/server.js");
    const module = await import(serverPath);
    server = module.default;
    return server;
  } catch (error) {
    console.error("Failed to load server from relative path:", error);
    throw new Error(`Failed to load server bundle: ${error.message}`);
  }
}

export default async function handler(req, res) {
  try {
    const srv = await loadServer();
    
    const protocol = req.headers["x-forwarded-proto"] || "https";
    const host = req.headers.host || "localhost";
    const url = new URL(req.url || "/", `${protocol}://${host}`);

    const request = new Request(url.toString(), {
      method: req.method,
      headers: req.headers,
      body: req.method === "GET" || req.method === "HEAD" ? undefined : req,
    });

    const response = await srv.fetch(request, {}, {});

    res.statusCode = response.status;
    response.headers.forEach((value, key) => {
      if (key.toLowerCase() === "transfer-encoding") return;
      res.setHeader(key, value);
    });

    const body = await response.arrayBuffer();
    res.end(Buffer.from(body));
  } catch (error) {
    console.error("Handler error:", error);
    res.statusCode = 500;
    res.setHeader("Content-Type", "text/plain");
    res.end("Internal Server Error: " + error.message);
  }
}
