// https://nuxt.com/docs/api/configuration/nuxt-config
import Aura from '@primevue/themes/aura';
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/tailwindcss',
    '@primevue/nuxt-module',
    '@pinia/nuxt'
  ],
  primevue: {
    options: {
      theme: {
          preset: Aura
      }
  }
}

})

function defineNuxtConfig(arg0: { compatibilityDate: string; devtools: { enabled: boolean; }; modules: string[]; primevue: { options: { theme: { preset: any; }; }; }; }) {
  throw new Error('Function not implemented.');
}
