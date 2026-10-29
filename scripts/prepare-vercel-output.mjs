import { rename } from "node:fs/promises";

// Vercel checks the filesystem before applying rewrites. Rename the static
// index so an Accept: text/markdown request for "/" can reach its API handler.
await rename("dist/index.html", "dist/site-shell.html");
