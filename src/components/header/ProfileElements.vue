<template>
    <li class="flex" v-for="(element, index) in profileElements" :key="`page-${index}`">
        <NuxtLink class="inline-flex items-center w-full px-2 py-1 text-sm font-semibold transition-colors duration-150 rounded-md hover:bg-gray-100 hover:text-gray-800 dark:hover:bg-gray-800 dark:hover:text-gray-200"
            :to="$utils.stringUtils.toKebabCase(element)">
            <element-svg
                    aria-hidden="true" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" stroke="currentColor"
                    :class="'w-4 h-4 mr-3'"
                    :view-box="'0 0 24 24'"
                    :fill="'none'"
                    :pic="element"
                />

            <span>{{ $utils.stringUtils.toUcFirst(element) }}</span>
        </NuxtLink>
    </li>
</template>

<script lang="ts">
type ProfileMenu = {
    element: string,
    svgPaths: string[],
}
export default defineComponent({
    data() {
        return {
            profileElements: ["profile", "settings", "logout"]
        }
    },
});
</script>