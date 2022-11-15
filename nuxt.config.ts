// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
    buildModules: [
        '@nuxt/typescript-build'
    ],
    modules: [
        '@nuxtjs/tailwindcss',
    ],
    srcDir: 'src',
})
