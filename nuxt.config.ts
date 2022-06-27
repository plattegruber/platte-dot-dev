import { defineNuxtConfig } from 'nuxt'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
    target: 'static',
    css: ["@/assets/css/styles.css"],
    build: {
      postcss: {
        postcssOptions: require("./postcss.config.js"),
      },
      transpile: ['@headlessui/vue']
    },
    modules: ['@nuxt/content'],
    server: {
        host: 'localhost'
    }
})
