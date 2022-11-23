<template>
    <span v-for="element in menuElements" :key="element.menu" >
        <NuxtLink :to="menuRoot + element.menu">
            <li
                class="relative px-6 py-3"
                @click="closeMobileSideMenu(), toggleSelectedElement(element)"
            >
                <span
                    v-if="element.isActive"
                    class="absolute inset-y-0 left-0 w-1 bg-purple-600 rounded-tr-lg rounded-br-lg"
                    aria-hidden="true"
                ></span>
                <span
                    class="inline-flex items-center w-full text-sm font-semibold transition-colors duration-150 hover:text-gray-800 dark:hover:text-gray-200"
                    :class="{ 'text-gray-800 dark:text-gray-100': element.isActive }"
                >
                    <element-svg
                        aria-hidden="true" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" stroke="currentColor"
                        :class="'w-5 h-5'"
                        :view-box="'0 0 24 24'"
                        :fill="'none'"
                        :pic="element.menu"
                    />
                    <span class="ml-4">{{ $utils.stringUtils.toUcFirst(element.menu) }}</span>
                </span>
            </li>
        </NuxtLink>
    </span>
</template>

<script lang="ts">
import { useLayoutStore } from '@/stores/LayoutStore';

type MenuElement = {
    menu: string,
    isActive: boolean,
    svgPaths: string[],
};

export default defineComponent({
    mounted() {
        const menu = this.menuElements.find(element => element.menu === String(this.$route.name))
        if (menu) {
            this.toggleSelectedElement(menu);
        } else {
            this.toggleSelectedElement(this.menuElements[0])
        }
    },
    data() {
        return {
            menuRoot: '/admin/',
            menuElements: [
                {
                    menu: "dashboard",
                    isActive: false,
                },
                {
                    menu: "forms",
                    isActive: false,
                },
                {
                    menu: "cards",
                    isActive: false,
                },
                {
                    menu: "charts",
                    isActive: false,

                },
                {
                    menu: "buttons",
                    isActive: false,
                },
                {
                    menu: "modals",
                    isActive: false,
                },
                {
                    menu: "tables",
                    isActive: false,

                },
            ],
            activeLink: false,
        }
    },
    methods: {
        ...mapActions(useLayoutStore, ['closeMobileSideMenu']),
        toggleSelectedElement(menuElement: MenuElement): void {
            this.menuElements.forEach(menu => {
                menu.isActive = false;
            });
            menuElement.isActive = true;
        },
    },
});
</script>