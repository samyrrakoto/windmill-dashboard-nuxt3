<template>
        <header class="z-10 py-4 bg-white shadow-md dark:bg-gray-800">
            <div class="container flex items-center justify-between h-full px-6 mx-auto text-purple-600 dark:text-purple-300">
                <mobile-hamburger></mobile-hamburger>
                <search-input></search-input>
                <ul class="flex items-center flex-shrink-0 space-x-6">
                    <theme-toggler></theme-toggler>
                    <notifications-menu></notifications-menu>
                    <profile-menu></profile-menu>
                </ul>
            </div>
        </header>
</template>

<script lang="ts">
export default defineComponent({});
</script>