<template>
    <div class="min-w-0 p-4 rounded-lg shadow-xs" :class="bgColor, textColor">
        <h4 class="mb-4 font-semibold" :class="{'text-gray-600 dark:text-gray-300': bgColor === 'bg-white'}">
            {{ title }}
        </h4>
        <p :class="{'text-gray-600 dark:text-gray-400': bgColor === 'bg-white'}">
            {{ content }}
        </p>
    </div>
</template>

<script lang="ts">
export default defineComponent({
    props: {
        title: {
            type: String,
            required: true,
        },
        content: {
            type: String,
            required: true,
        },
        titleColor: {
            type: String,
            default: 'dark:bg-gray-800'
        },
        textColor: {
            type: String,
            default: 'dark:bg-gray-800'
        },
        bgColor: {
            type: String,
            default: 'bg-white',
        }
    },
})
</script>