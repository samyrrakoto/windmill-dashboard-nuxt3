<template>
    <!-- Desktop sidebar -->
    <aside class="z-20 hidden w-64 overflow-y-auto bg-white dark:bg-gray-800 md:block flex-shrink-0">
        <div class="py-4 text-gray-500 dark:text-gray-400">
            <NuxtLink class="ml-6 text-lg font-bold text-gray-800 dark:text-gray-200" to="/">
                Windmill DB x Nuxt3
            </NuxtLink>
            <ul class="mt-6">
                <sidebar-dashboard-menu></sidebar-dashboard-menu>
                <sidebar-pages-menu></sidebar-pages-menu>
            </ul>
            <sidebar-create-account></sidebar-create-account>
        </div>
    </aside>
</template>

<script lang="ts">
export default defineComponent({});
</script>