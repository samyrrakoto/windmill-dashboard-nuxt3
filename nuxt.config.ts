// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
    buildModules: [
        '@nuxt/typescript-build'
    ],
    modules: [
        '@nuxtjs/tailwindcss',
    ],
    css: [
        '@/assets/css/tailwind.output.css',
    ],
    srcDir: 'src',
})
