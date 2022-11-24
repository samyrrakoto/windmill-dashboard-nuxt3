<template>
    <li class="relative px-6 py-3">
        <button
            class="inline-flex items-center justify-between w-full text-sm font-semibold transition-colors duration-150 hover:text-gray-800 dark:hover:text-gray-200"
            @click="togglePagesMenu" aria-haspopup="true">
            <span class="inline-flex items-center">
                <element-svg
                    aria-hidden="true" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" stroke="currentColor"
                    :class="'w-5 h-5'"
                    :view-box="'0 0 24 24'"
                    :fill="'none'"
                    :pic="'pages'"
                />
                <span class="ml-4">Pages</span>
            </span>
            <element-svg aria-hidden="true" :class="'w-4 h-4'" :view-box="'0 0 20 20'" :fill="'currentColor'" :pic="'arrowDown'" />
        </button>
        <transition name="pages-menu">
            <div v-if="isPagesMenuOpen">
                <ul class="p-2 mt-2 space-y-2 overflow-hidden text-sm font-medium text-gray-500 rounded-md shadow-inner bg-gray-50 dark:text-gray-400 dark:bg-gray-900" aria-label="submenu">
                    <li v-for="(page, index) in pagesMenuElements" :key="`page-${index}`"
                        class="px-2 py-1 transition-colors duration-150 hover:text-gray-800 dark:hover:text-gray-200">
                        <NuxtLink class="w-full" :to="`/${$utils.stringUtils.toKebabCase(page)}`">{{ page }}</NuxtLink>
                    </li>
                </ul>
            </div>
        </transition>
    </li>
</template>

<script lang="ts">
export default defineComponent({
    data() {
        return {
            isPagesMenuOpen: false,
            pagesMenuElements: [
                "Login", "Create account", "Forgot password", "Not Found",
            ],
        }
    },
    methods: {
        togglePagesMenu(): void {
            this.isPagesMenuOpen = !this.isPagesMenuOpen;
        },
    },
});
</script>

<style>
.pages-menu-enter-active,
.pages-menu-leave-active {
    @apply transition-all ease-in-out duration-300;
}

.pages-menu-enter-from {
    @apply opacity-25 max-h-0;
}

.pages-menu-enter-to,
.pages-menu-leave-from {
    @apply opacity-100 max-h-full;
}

.pages-menu-leave-to {
    @apply opacity-0 max-h-0;
}
</style>