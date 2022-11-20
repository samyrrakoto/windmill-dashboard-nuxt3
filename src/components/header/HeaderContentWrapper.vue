<template>
    <header class="z-10 py-4 bg-white shadow-md dark:bg-gray-800">
        <div class="container flex items-center justify-between h-full px-6 mx-auto text-purple-600 dark:text-purple-300">
            <header-mobile-hamburger></header-mobile-hamburger>
            <header-search-input></header-search-input>
            <ul class="flex items-center flex-shrink-0 space-x-6">
                <header-theme-toggler></header-theme-toggler>
                <header-notifications-menu></header-notifications-menu>
                <header-profile-menu></header-profile-menu>
            </ul>
        </div>
    </header>
</template>

<script lang="ts">
export default defineComponent({});
</script>