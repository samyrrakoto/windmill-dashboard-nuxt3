<template>
    <label class="block text-sm">
        <span class="text-gray-700 dark:text-gray-400">
            {{ inputLabel }}
        </span>
        <input
            class="block w-full mt-1 text-sm dark:border-gray-600 dark:bg-gray-700 focus:border-purple-400 focus:outline-none focus:shadow-outline-purple dark:text-gray-300 dark:focus:shadow-outline-gray form-input"
            placeholder="Jane Doe" />
    </label>
</template>

<script lang="ts">
export default defineComponent({
    props: {
        inputLabel : {
            type: String,
            required: false,
            default : "Text Input Label"
        }
    }
})
</script>