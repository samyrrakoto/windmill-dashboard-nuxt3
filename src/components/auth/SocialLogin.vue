<template>
    <div>
        <button
            class="flex items-center justify-center w-full px-4 py-2 text-sm font-medium leading-5 text-white text-gray-700 transition-colors duration-150 border border-gray-300 rounded-lg dark:text-gray-400 active:bg-transparent hover:border-gray-500 focus:border-gray-500 active:text-gray-500 focus:outline-none focus:shadow-outline-gray">
                <element-svg aria-hidden="true" :class="'w-4 h-4 mr-2'" :view-box="'0 0 24 24'" :fill="'currentColor'" :pic="'github'"/>
            Github
        </button>
        <button
            class="flex items-center justify-center w-full px-4 py-2 mt-4 text-sm font-medium leading-5 text-white text-gray-700 transition-colors duration-150 border border-gray-300 rounded-lg dark:text-gray-400 active:bg-transparent hover:border-gray-500 focus:border-gray-500 active:text-gray-500 focus:outline-none focus:shadow-outline-gray">
                <element-svg aria-hidden="true" :class="'w-4 h-4 mr-2'" :view-box="'0 0 24 24'" :fill="'currentColor'" :pic="'twitter'"/>
            Twitter
        </button>
    </div>
</template>

<script lang="ts">
export default defineComponent({});
</script>

