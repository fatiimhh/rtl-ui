import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { resolve } from "path";

export default defineConfig({
  plugins: [
    react(),
    
  ],
  build: {
    lib: {
      entry: resolve(__dirname, "src/index.ts"),
      name: "RtlUi",
      fileName: (format) => `rtl-ui.${format}.js`,
      formats: ["es", "cjs"],
    },
    emptyOutDir: false,
    rollupOptions: {
      external: ["react", "react-dom"],
      output: {
        globals: {
          react: "React",
          "react-dom": "ReactDOM",
        },
      },
    },
    cssCodeSplit: false,
  },
});