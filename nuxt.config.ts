import { defineNuxtConfig } from "nuxt";

// https://v3.nuxtjs.org/docs/directory-structure/nuxt.config
export default defineNuxtConfig({
  // target: "static",
  // router: {
  //   base: '/p5-showcase/'
  // },
  // buildDir: '.nuxt/dist',
  // ssr: false,
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
