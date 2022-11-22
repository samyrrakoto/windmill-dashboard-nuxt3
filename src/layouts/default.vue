<template>
    <div class="flex h-screen bg-gray-50 dark:bg-gray-900" :class="{ 'overflow-hidden': isMobileSideMenuOpen }">
        <content-custom-html :dark="dark"></content-custom-html>
        <sidebar-wrapper></sidebar-wrapper>
        <div class="flex flex-col flex-1 w-full">
            <header-content-wrapper></header-content-wrapper>
            <main class="h-full pb-16 overflow-y-auto">
                <div class="container px-6 mx-auto grid">
                    <slot />
                </div>
            </main>
        </div>
    </div>
</template>

<script lang="ts">
/*
    This peace of code is exactly the same as the one in non-auth-layout.vue.
    I refactored it into a  @/utils/layout-setup.ts but turns out it provoked
    a bug : when switching from a page with a different layout, the layout does
    not reload properly. I think it's because the same component was defined and
    the interpreter is confused. A good example of when not to refactor code !
*/
import { useLayoutStore } from '@/stores/LayoutStore';
import { mapState } from 'pinia';

export default defineComponent({
    computed: {
        ...mapState(useLayoutStore, ['dark', 'isMobileSideMenuOpen'])
    }
});
</script>