import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import viteTsconfigPaths from "vite-tsconfig-paths";

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    viteTsconfigPaths(),
  ],
  preview: {
    allowedHosts: [
      "thehouseofjoshi.onrender.com",
      "thehouseofjoshi.vercel.app",
    ],
  },
  build: {
    outDir: "dist",
    assetsInlineLimit: 4096,
    chunkSizeWarningLimit: 1000,
    watch: {
      ignored: [
        '**/node_modules/**',
        '**/.git/**',
        '**/Library/CloudStorage/**',
        '**/.Trash/**',
      ],
    },
  },
  assetsInclude: ['**/*.mov'],
  resolve: {
    alias: {
      '@': '/src',
    },
  },
  server: {
    watch: false,
  },
});
