<template>
    <label class="block mt-4 text-sm">
        <span class="text-gray-700 dark:text-gray-400">
            {{ selectLabel }}
        </span>
        <select
        class="block w-full mt-1 text-sm dark:text-gray-300 dark:border-gray-600 dark:bg-gray-700 form-select focus:border-purple-400 focus:outline-none focus:shadow-outline-purple dark:focus:shadow-outline-gray"
            :multiple="isMultiple"
        >
                <option v-for="(option, index) in selectOptions" :key="(option.value)" :value="option.value">{{ option.label }}</option>

        </select>
    </label>
</template>

<script lang="ts">
export default defineComponent({
    props: {
        selectLabel: {
            type: String,
            default : "Select Input",
        },
        selectOptions: {
            type: Object as PropType<FormValueLabel>,
            required: true,
        },
        isMultiple: {
            type: Boolean,
            default: false,
        }
    },
    computed: {
        getSelectOptions() {
            return [...this.selectOptions]
        }
    }
})
</script>