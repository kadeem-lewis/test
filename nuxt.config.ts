// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    "@nuxtjs/tailwindcss",
    "nuxt-primevue",
    "@nuxtjs/eslint-module",
    "@nuxt/image",
    "@pinia/nuxt",
  ],
  tailwindcss: {
    cssPath: "~/styles/main.css",
  },
  eslint: {
    eslintPath: "~/eslint.config.js",
  },
});
