// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ['@nuxtjs/tailwindcss'],
  routeRules: {
    // generate static pages on-demand
    '/countries/**': { static: true },

    // telling nuxt that favorites page is fully client-side-rendered
    '/favorites/**': {
      ssr: false,
    },
  },
});
