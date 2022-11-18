<template>
    <div class="flex items-center p-4 bg-white rounded-lg shadow-xs dark:bg-gray-800">
        <element-card-icon-svg-customizable :cardType="cardType"></element-card-icon-svg-customizable>
        <div>
            <p class="mb-2 text-sm font-medium text-gray-600 dark:text-gray-400">
            {{ title }}
            </p>
            <p class="text-lg font-semibold text-gray-700 dark:text-gray-200">
            {{ content }}
            </p>
        </div>
    </div>
</template>

<script lang="ts">
export default defineComponent({
    props: {
        cardType: {
            type: String,
            required: true,
        },
        title: {
            type: String,
            required: true,
        },
        content: {
            type: String,
            required: true,
        },
    },
})
</script>