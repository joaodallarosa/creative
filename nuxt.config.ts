import { defineNuxtConfig } from "nuxt";

// https://v3.nuxtjs.org/docs/directory-structure/nuxt.config
export default defineNuxtConfig({
  target: "static",
  // ssr: false,
  router: {
    base: "/p5-showcase/",
  },
  generate: {
    subFolders: false,
  },
  app: {
    baseURL: "/p5-showcase/",
  },
  build: {
    postcss: {
      postcssOptions: {
        plugins: {
          tailwindcss: {},
          autoprefixer: {},
        },
      },
    },
  },
  vite: {
    optimizeDeps: {
      exclude: ["class-validator"],
    },
  },
  css: ["~/assets/css/tailwind.css"],
  nitro: {
    prerender: {
      routes: [
        "/p5-showcase/three",
        "/p5-showcase/fragment",
        "/p5-showcase/pieces/not-art",
        "/p5-showcase/pieces/boyhood",
      ],
    },
  },
});
