<template>
    <div class="flex items-center min-h-screen p-6 bg-gray-50 dark:bg-gray-900">
        <content-custom-html :dark="dark"></content-custom-html>
        <div class="flex-1 h-full max-w-4xl mx-auto overflow-hidden bg-white rounded-lg shadow-xl dark:bg-gray-800">
            <div class="flex flex-col overflow-y-auto md:flex-row">
                    <slot />
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { useLayoutStore } from '@/stores/LayoutStore';
import { mapState } from 'pinia';

export default defineComponent({
    computed: {
        ...mapState(useLayoutStore, ['dark', 'isMobileSideMenuOpen'])
    }
});
</script>