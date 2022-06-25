import { defineNuxtConfig } from "nuxt";

// https://v3.nuxtjs.org/docs/directory-structure/nuxt.config
export default defineNuxtConfig({
  target: "static",
  // ssr: false,
  router: {
    base: '/p5-showcase/',
  },
  app: {
    baseURL: '/p5-showcase/'
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
});
