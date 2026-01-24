/// <reference types="vitest" />
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import svgLoader from "vite-svg-loader";
import { resolve } from "path";

export default defineConfig(({ mode }) => {
  const isProd = mode === "production";

  return {
    define: {
      'process.env.NODE_ENV': JSON.stringify(isProd ? 'production' : 'development'),
    },
  
    plugins: [
      react(),
      svgLoader({
        defaultImport: "url",
      }),
    ],

    build: {
      outDir: "docs/dist",
      emptyOutDir: true,
      sourcemap: true,
      lib: {
        entry: resolve(__dirname, "src/mt-block-editor.ts"),
        name: "MTBlockEditor",
        formats: ["iife"],
        fileName: () => "mt-block-editor.js",
      },
      rollupOptions: {
        external: ["tinymce"],
        output: {
          globals: {
            tinymce: "tinymce",
          },
        },
      },
      minify: isProd,
    },

    server: {
      open: "docs/index.html",
    },

    css: {
      postcss: "./postcss.config.js",
      devSourcemap: true,
    },

    base: "./",

    test: {
      globals: true,
      environment: "jsdom",
      include: ["__tests__/**/*.{test,spec}.ts"],
      exclude: ["__tests__/helper.ts", "sub-projects/**"],
      setupFiles: ["__mocks__/setupTests.ts"],
      alias: {
        "../i18next-parser.config": resolve(
          __dirname,
          "__mocks__/i18nextParserConfig.js",
        ),
      },
      pool: "forks",
    },
  };
});
