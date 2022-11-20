<template>
    <Html lang="en" class="windmill-dashboard" :class="{ 'theme-dark': dark }"></Html>
    <div class="flex h-screen bg-gray-50 dark:bg-gray-900" :class="{'overflow-hidden': isSideMenuOpen }">
        <sidebar-content-wrapper></sidebar-content-wrapper>
        <div class="flex flex-col flex-1">
            <header-content-wrapper></header-content-wrapper>
            <main class="h-full pb-16 overflow-y-auto">
                <div class="container grid px-6 mx-auto">
                    <slot />
                </div>
            </main>
        </div>
    </div>
</template>


<script lang="ts">
export default defineComponent({
    mounted() {
        this.$nuxtbus.on('theme-toggled', this.toggleDarkMode)
    },
    data() {
        return {
            title: 'Windmill Dashboard x Nuxt3',
            isSideMenuOpen: false,
            dark: false,
        }
    },
    methods: {
        toggleDarkMode() {
            this.dark = !this.dark
        }
    },
});
</script>