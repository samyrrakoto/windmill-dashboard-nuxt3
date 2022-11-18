<template>
    <li class="flex" v-for="(element, index) in profileElements" :key="`page-${index}`">
        <NuxtLink class="inline-flex items-center w-full px-2 py-1 text-sm font-semibold transition-colors duration-150 rounded-md hover:bg-gray-100 hover:text-gray-800 dark:hover:bg-gray-800 dark:hover:text-gray-200"
            :to="$utils.stringUtils.toKebabCase(element.name)">
            <svg class="w-4 h-4 mr-3" aria-hidden="true" fill="none" stroke-linecap="round"
                stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor">
                <path :d="element.svgPath"></path>
            </svg>
            <span>{{ element.name }}</span>
        </NuxtLink>
    </li>
</template>

<script lang="ts">
type ProfileMenu = {
    element: string,
    svgPath: string,
}
export default defineComponent({
    data() {
        return {
            profileElements: [
               {
                    name: "Profile",
                    svgPath: ""
               },
               {
                    name: "Settings",
                    svgPath: ""
               },
               {
                    name: "Log out",
                    svgPath: ""
               },
            ]
        }
    },
});
</script>