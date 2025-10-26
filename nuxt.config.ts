import { defineNuxtConfig } from "nuxt";

// https://v3.nuxtjs.org/docs/directory-structure/nuxt.config
export default defineNuxtConfig({
  target: "static",
  ssr: false,
  // router: {
  //   base: "/creative/",
  // },
  generate: {
    subFolders: true,
  },
  app: {
    baseURL: "/creative/",
    head: {
      title: "Dalla Rosa Creative Coding",
      viewport: "width=device-width, initial-scale=1, viewport-fit=cover",
      charset: "utf-8",
      link: [{ rel: "icon", type: "image/png", href: "/favicon.png" }],
      meta: [{ name: "apple-mobile-web-app-capable", content: "yes" }],
    },
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
        "/",
        "/nuggets",
        "/pieces/not-art",
        "/pieces/sketch",
        "/pieces/single-line",
        "/pieces/anxiety-tree",
        "/pieces/synth",
        "/pieces/only-lines",
        "/pieces/boyhood",
        "/pieces/confidence",
        "/pieces/fragment",
        "/pieces/bury",
        "/clinamen",
      ],
    },
  },
});
