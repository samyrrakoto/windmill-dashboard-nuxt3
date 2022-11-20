<template>
    <h2 class="my-6 text-2xl font-semibold text-gray-700 dark:text-gray-200">
        {{ pageTitle }}
    </h2>
</template>

<script lang="ts">
export default defineComponent({
    props: {
        pageTitle: {
            type: String,
            required: true,
        }
    }
})
</script>