// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    'nuxt-electron',
    'vuetify-nuxt-module',
  ],
  electron: {
    build: [
      {
        // Main-Process entry file of the Electron App.
        entry: 'electron/main.ts',
      },
    ],
  },
  vuetify: {
    moduleOptions: {
      /* module specific options */
    },
    vuetifyOptions: {
      /* vuetify options */
    }
  },
})
