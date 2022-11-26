// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
    modules: [
        '@nuxtjs/tailwindcss',
        [
            '@pinia/nuxt',
            {
              autoImports: [
                'defineStore',
                'definePiniaStore',
                'mapState',
                'mapActions',
              ],
            },
        ],
    ],
    plugins: [
        '@/plugins/utils.ts',
    ],
    app: {
        head: {
            link: [
              {
                rel: 'stylesheet',
                href: 'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap'
              }
            ]
        },
    },
    css: [
        '@/assets/css/tailwind.output.css',
    ],
    srcDir: 'src',
})
