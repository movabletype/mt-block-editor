import { defineConfig } from "vite";
import svgLoader from "vite-svg-loader";
import { resolve } from "path";

export default defineConfig({
  root: resolve(__dirname),
  plugins: [
    svgLoader({
      defaultImport: "url",
    }),
  ],
  build: {
    outDir: "dist",
    emptyOutDir: true,
    sourcemap: true,
    lib: {
      entry: resolve(__dirname, "src/index.ts"),
      name: "TestBlocks",
      formats: ["iife"],
      fileName: () => "test-blocks.js",
    },
    minify: true,
    commonjsOptions: {
      include: [
        /sub-projects\/mt-block-editor-block\//,
        /i18next-parser\.config/,
      ],
    },
  },
  esbuild: {
    jsxImportSource: "../../sub-projects/mt-block-editor-block/src",
    jsx: "automatic",
  },
});
