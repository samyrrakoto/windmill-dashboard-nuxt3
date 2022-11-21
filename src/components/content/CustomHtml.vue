<template>
    <Html lang="en" class="windmill-dashboard" :class="{ 'theme-dark': dark }"></Html>
</template>

<script lang="ts">
export default defineComponent({
    props: {
        dark: {
            type: Boolean,
            default: false
        }
    }
})
</script>