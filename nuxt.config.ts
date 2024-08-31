// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  devtools: { enabled: true },
  ssr: false,
  css: ["/assets/css/tailwind.css"],

  app: {
    head: {
      script: [
        {src:"https://cdn.jsdelivr.net/npm/alpinejs@3.x.x/dist/cdn.min.js"}
      ],
    },
  },

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
});
