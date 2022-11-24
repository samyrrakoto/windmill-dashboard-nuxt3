<template>
    <!-- Mobile sidebar -->
    <div>
        <transition
            enter-active-class="transition ease-in-out duration-150"
            enter-from-class="opacity-0"
            enter-to-class="opacity-100"
            leave-active-class="transition ease-in-out duration-150"
            leave-from-class="opacity-100"
            leave-to-class="opacity-0"
        >
            <div class="fixed inset-0 z-10 flex items-end bg-black bg-opacity-50 sm:items-center sm:justify-center" v-if="isMobileSideMenuOpen"></div>
        </transition>
        <transition
            enter-active-class="transition ease-in-out duration-50"
            enter-from-class="opacity-0 transform -translate-x-20"
            enter-to-class="opacity-100"
            leave-active-class="transition ease-in-out duration-150"
            leave-from-class="opacity-100"
            leave-to-class="opacity-0 transform -translate-x-20"
        >
            <aside class="fixed inset-y-0 z-20 flex-shrink-0 w-64 mt-16 overflow-y-auto bg-white dark:bg-gray-800 md:hidden" v-if="isMobileSideMenuOpen">
                <sidebar-menu-wrapper />
            </aside>
        </transition>
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