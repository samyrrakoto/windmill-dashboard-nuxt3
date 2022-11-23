<template>
    <!-- Mobile hamburger -->
    <button class="p-1 -ml-1 mr-5 rounded-md md:hidden focus:outline-none focus:shadow-outline-purple"
        @click="toggleMobileSideMenu()" aria-label="Menu" v-if="!isMobileSideMenuOpen">
        <element-svg aria-hidden="true" :class="'w-6 h-6'" :view-box="'0 0 20 20'" :fill="'currentColor'" :pic="'hamburgerMenu'" />
    </button>
</template>

<script lang="ts">
import { useLayoutStore } from '@/stores/LayoutStore';
export default defineComponent({
    computed: {
        ...mapState(useLayoutStore, ['isMobileSideMenuOpen']),
    },
    methods: {
        ...mapActions(useLayoutStore, ['toggleMobileSideMenu','closeMobileSideMenu'])
    },
});
</script>