<template>
    <h4 class="mb-4 text-lg font-semibold text-gray-600 dark:text-gray-300">
        {{ sectionTitle }}
    </h4>
</template>

<script lang="ts">
export default defineComponent({
    props: {
        sectionTitle: {
            type: String,
            required: true,
        }
    }
})
</script>