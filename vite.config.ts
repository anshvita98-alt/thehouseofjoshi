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
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
      },
    },
    rollupOptions: {
      output: {
        manualChunks: {
          'react-vendor': ['react', 'react-dom'],
          'router-vendor': ['@tanstack/react-router', '@tanstack/react-query'],
          'ui-vendor': ['@radix-ui/react-dialog', '@radix-ui/react-dropdown-menu', '@radix-ui/react-select'],
        },
      },
    },
    target: 'esnext',
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
