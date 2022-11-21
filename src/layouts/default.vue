<template>
    <Html lang="en" class="windmill-dashboard" :class="{ 'theme-dark': dark }"></Html>
    <div class="flex h-screen bg-gray-50 dark:bg-gray-900">
        <sidebar-wrapper></sidebar-wrapper>
        <div class="flex flex-col flex-1 w-full">
            <header-content-wrapper></header-content-wrapper>
            <main class="h-full pb-16 overflow-y-auto">
                <div class="container px-6 mx-auto grid">
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
            dark: false,
        }
    },
    methods: {
        toggleDarkMode() {
            this.dark = !this.dark
        },
    },
});
</script>