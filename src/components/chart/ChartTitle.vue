<template>
    <h4 class="mb-4 font-semibold text-gray-800 dark:text-gray-300">
        {{ title }}
    </h4>
</template>

<script lang="ts">
export default defineComponent({
    props: {
        title: {
            type: String,
            required: false,
            default: ''
        }
    }
});
</script>