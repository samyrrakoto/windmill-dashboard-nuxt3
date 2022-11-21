<template>
    <div>
        <content-custom-html :dark="dark"></content-custom-html>
        <slot />
    </div>
</template>


<script lang="ts">
import layoutSetup from '@/utils/layout-setup'
export default layoutSetup
</script>