import { defineNuxtConfig } from "nuxt";

// https://v3.nuxtjs.org/docs/directory-structure/nuxt.config
export default defineNuxtConfig({
  target: "static",
  router: {
    base: '/p5-showcase/'
  },
  // ssr: false,
  generate: {
    // dir: 'gh_pages', // gh_pages/ instead of dist/
    subFolders: false // HTML files are generated according to the route path
  },
  // buildDir: '.nuxt/dist',
  // nitro: {
  //   output: {
  //     dir: '.nuxt/dist'
  //   }
  // },
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
