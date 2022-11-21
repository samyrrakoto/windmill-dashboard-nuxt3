<template>
    <!-- Mobile sidebar -->
    <!-- Backdrop -->
    <div v-show="isMobileSideMenuOpen" x-transition:enter="transition ease-in-out duration-150"
        x-transition:enter-start="opacity-0" x-transition:enter-end="opacity-100"
        x-transition:leave="transition ease-in-out duration-150" x-transition:leave-start="opacity-100"
        x-transition:leave-end="opacity-0"
        class="fixed inset-0 z-10 flex items-end bg-black bg-opacity-50 sm:items-center sm:justify-center"></div>
    <aside class="fixed inset-y-0 z-20 flex-shrink-0 w-64 mt-16 overflow-y-auto bg-white dark:bg-gray-800 md:hidden"
        v-show="isMobileSideMenuOpen" x-transition:enter="transition ease-in-out duration-150"
        x-transition:enter-start="opacity-0 transform -translate-x-20" x-transition:enter-end="opacity-100"
        x-transition:leave="transition ease-in-out duration-150" x-transition:leave-start="opacity-100"
        x-transition:leave-end="opacity-0 transform -translate-x-20"
        >
        <sidebar-menu-wrapper></sidebar-menu-wrapper>
    </aside>
</template>

<script lang="ts">
export default defineComponent({
    mounted() {
        this.$nuxtbus.on('side-menu-toggled', this.toggleMobileSideMenu)
        this.$nuxtbus.on('side-menu-close', this.toggleMobileSideMenu)
    },
    data() {
        return {
            isMobileSideMenuOpen: false,
        }
    },
    methods: {
        toggleMobileSideMenu() {
            this.isMobileSideMenuOpen = !this.isMobileSideMenuOpen
            this.$nuxtbus.emit('side-menu-toggled', this.isMobileSideMenuOpen);
        },
        closeMobileSideMenu() {
            this.isMobileSideMenuOpen = false
        }
    },
});
</script>