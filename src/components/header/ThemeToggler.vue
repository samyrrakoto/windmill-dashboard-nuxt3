<template>
    <!-- Theme toggler -->
    <li class="flex">
        <button class="rounded-md focus:outline-none focus:shadow-outline-purple" @click="toggleTheme()"
            aria-label="Toggle color mode">
            <div v-if="!dark">
                <element-svg aria-hidden="true" :class="'w-5 h-5'" :view-box="'0 0 20 20'" :fill="'currentColor'" :pic="'sun'" />
            </div>
            <div v-else>
                <element-svg aria-hidden="true" :class="'w-5 h-5'" :view-box="'0 0 20 20'" :fill="'currentColor'" :pic="'moon'" />
            </div>
        </button>
    </li>
</template>

<script lang="ts">
import { useLayoutStore } from '@/stores/LayoutStore';
export default defineComponent({
    computed: {
        ...mapState(useLayoutStore, ['dark'])
    },
    methods: {
        ...mapActions(useLayoutStore, ['setDark', 'toggleDark']),
        toggleTheme(): void {
            this.toggleDark()
            localStorage.dark = this.dark
        },
    },
});
</script>