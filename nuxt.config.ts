// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["@nuxtjs/eslint-module", "@nuxt/image", "@nuxt/ui", "@pinia/nuxt"],
  tailwindcss: {
    cssPath: "~/styles/main.css",
  },
  eslint: {
    eslintPath: "~/eslint.config.js",
  },
});
