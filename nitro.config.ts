import { defineNitroConfig } from "nitro/config";

export default defineNitroConfig({
  presets: ["vercel"],
  routeRules: {
    "/**": { cache: false },
  },
});