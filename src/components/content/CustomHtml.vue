<template>
    <Html lang="en" class="windmill-dashboard" :class="{ 'theme-dark': dark }" />
</template>

<script lang="ts">
import { useLayoutStore } from '@/stores/LayoutStore';

export default defineComponent({
    mounted() {
        if (String(localStorage.getItem('dark')) === 'true'){
            this.setDark(true)
        }
    },
    computed: {
        ...mapState(useLayoutStore, ['dark'])
    },
    methods: {
        ...mapActions(useLayoutStore, ['setDark'])
    }
});
</script>