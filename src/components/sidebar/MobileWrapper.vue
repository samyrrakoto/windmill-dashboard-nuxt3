<template>
    <!-- Mobile sidebar -->
    <div>
        <transition name="menu-backdrop">
            <div class="fixed inset-0 z-10 flex items-end bg-black bg-opacity-50 sm:items-center sm:justify-center" v-if="isMobileSideMenuOpen"
            @click="closeMobileSideMenu"></div>
        </transition>
        <transition name="menu">
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

<style>
.menu-enter-active,
.menu-leave-active,
.menu-backdrop-enter-active,
.menu-backdrop-leave-active {
    @apply transition ease-in-out duration-150;
}

.menu-enter-to,
.menu-leave-from,
.menu-backdrop-enter-to,
.menu-backdrop-leave-from {
    @apply opacity-100;
}

.menu-enter-from,
.menu-leave-to {
    @apply opacity-0 transform -translate-x-2;
}

.menu-backdrop-enter-from,
.menu-backdrop-leave-to {
    @apply opacity-0
}
</style>