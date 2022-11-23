<template>
    <div class="py-4 text-gray-500 dark:text-gray-400">
        <NuxtLink class="ml-6 text-lg font-bold text-gray-800 dark:text-gray-200" to="/">
            Windmill DB x Nuxt3
        </NuxtLink>
        <ul class="mt-6">
            <sidebar-dashboard-menu />
            <sidebar-pages-menu />
        </ul>
        <sidebar-create-account />
    </div>
</template>