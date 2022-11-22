<template>
    <div class="flex h-screen bg-gray-50 dark:bg-gray-900" :class="{ 'overflow-hidden': isMobileSideMenuOpen }">
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
import layoutSetup from '@/utils/layout-setup'
export default layoutSetup
</script>