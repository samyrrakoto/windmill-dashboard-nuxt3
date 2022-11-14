// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
    buildModules: [
        '@nuxt/typescript-build'
    ],
    modules: [
        '@nuxtjs/tailwindcss',
    ],
    plugins: [
        { src: '@/assets/js/charts-bars.js', mode: 'client' },
        { src: '@/assets/js/charts-lines.js', mode: 'client' },
        { src: '@/assets/js/charts-pie.js', mode: 'client' },
        { src: '@/assets/js/focus-trap.js', mode: 'client' },
        { src: '@/assets/js/init-alpine.js', mode: 'client' },
    ],
    srcDir: 'src',
})
