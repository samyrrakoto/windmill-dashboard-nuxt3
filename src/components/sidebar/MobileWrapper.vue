<template>
    <!-- Mobile sidebar -->
    <div>
        <div v-if="isMobileSideMenuOpen" x-transition:enter="transition ease-in-out duration-150"
            x-transition:enter-start="opacity-0" x-transition:enter-end="opacity-100"
            x-transition:leave="transition ease-in-out duration-150" x-transition:leave-start="opacity-100"
            x-transition:leave-end="opacity-0"
            class="fixed inset-0 z-10 flex items-end bg-black bg-opacity-50 sm:items-center sm:justify-center"></div>
        <aside class="fixed inset-y-0 z-20 flex-shrink-0 w-64 mt-16 overflow-y-auto bg-white dark:bg-gray-800 md:hidden"
            v-if="isMobileSideMenuOpen" x-transition:enter="transition ease-in-out duration-150"
            x-transition:enter-start="opacity-0 transform -translate-x-20" x-transition:enter-end="opacity-100"
            x-transition:leave="transition ease-in-out duration-150" x-transition:leave-start="opacity-100"
            x-transition:leave-end="opacity-0 transform -translate-x-20"
            v-click-outside="closeMobileSideMenu"
            >
            <sidebar-menu-wrapper />
        </aside>
    </div>
</template>

<script lang="ts">
import { useLayoutStore } from '@/stores/LayoutStore';
export default defineComponent({
    computed: {
        ...mapState(useLayoutStore, ['isMobileSideMenuOpen']),
    },
    methods: {
        ...mapActions(useLayoutStore, ['closeMobileSideMenu']),
    }
});
</script>