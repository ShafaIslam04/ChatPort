import Aura from '@primevue/themes/aura';

export default defineNuxtConfig({
  modules: [
      '@primevue/nuxt-module',
      '@nuxtjs/tailwindcss',
      '@pinia/nuxt',
      '@nuxtjs/google-fonts'
  ],

  googleFonts: {
    families: {
      Montserrat: true,
    },
  },

  primevue: {
    options: {
      theme: {
          preset: Aura
      }
  }
  },

  compatibilityDate: '2025-01-21'
})