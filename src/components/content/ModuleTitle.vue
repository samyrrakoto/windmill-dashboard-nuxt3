<template>
    <h1 class="mb-4 text-xl font-semibold text-gray-700 dark:text-gray-200">
        {{ moduleTitle}}
    </h1>
</template>

<script lang="ts">
export default defineComponent({
    props: {
        moduleTitle: {
            type: String,
            required: true,
        }
    }
})
</script>