// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  runtimeConfig: {
    public: {
      OPENWEATHER_API_KEY: process.env.OPENWEATHER_API_KEY,
    },
  },
})
