<template>
    <div class="flex mt-6 text-sm">
        <label class="flex items-center dark:text-gray-400">
            <input
                type="checkbox"
                class="text-purple-600 form-checkbox focus:border-purple-400 focus:outline-none focus:shadow-outline-purple dark:focus:shadow-outline-gray"
                @change="$emit('update:modelValue', $event.target.checked)"
            />
            <span class="ml-2">
                {{ checkboxText }}
            </span>
        </label>
    </div>
</template>

<script lang="ts">
export default defineComponent({
    props: {
        checkboxText: {
            type: String,
            required: true,
        },
        modelValue: {
            type: Boolean,
        }
    }
})
</script>