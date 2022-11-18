<template>
    <li class="flex" v-for="(element, index) in profileElements" :key="`page-${index}`">
        <NuxtLink class="inline-flex items-center w-full px-2 py-1 text-sm font-semibold transition-colors duration-150 rounded-md hover:bg-gray-100 hover:text-gray-800 dark:hover:bg-gray-800 dark:hover:text-gray-200"
            :to="$utils.stringUtils.toKebabCase(element.name)">
            <svg class="w-4 h-4 mr-3" aria-hidden="true" fill="none" stroke-linecap="round"
                stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor">
                <path v-for="path in element.svgPaths" :key="element.name" :d="path"></path>
            </svg>
            <span>{{ element.name }}</span>
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
            profileElements: [
               {
                    name: "Profile",
                    svgPaths: [
                        "M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z",
                    ],
               },
               {
                    name: "Settings",
                    svgPaths: [
                        "M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z",
                        "M15 12a3 3 0 11-6 0 3 3 0 016 0z",
                    ],
               },
               {
                    name: "Log out",
                    svgPaths: [
                        "M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1",
                    ]
               },
            ]
        }
    },
});
</script>