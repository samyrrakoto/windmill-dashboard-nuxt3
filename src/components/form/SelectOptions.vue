<template>
    <label class="block mt-4 text-sm">
        <span class="text-gray-700 dark:text-gray-400">
            {{ selectLabel }}
        </span>
        <select
            class="block w-full mt-1 text-sm dark:text-gray-300 dark:border-gray-600 dark:bg-gray-700 form-select focus:border-purple-400 focus:outline-none focus:shadow-outline-purple dark:focus:shadow-outline-gray"
            :multiple="isMultiple"
            v-model="modelValue"
            @change="emitNewOptions"
        >
            <option v-for="(option, index) in selectOptions"
                :key="(option.value)"
                :value="option.value"
            >
                {{ option.label }}
            </option>
        </select>
    </label>
</template>

<script lang="ts">
export default defineComponent({
    data() {
        return {
            modelValue: this.selectOptions[0].value,
        }
    },
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
            return [...this.modelValue]
        }
    },
    methods: {
        /*  I had to make a custom event to handle the multiple values.
            For some reason, the array isn't passed to the parent when using Vue's native component event :
            > https://vuejs.org/guide/components/events.html#usage-with-v-model
            It only takes the first element.
         */
        emitNewOptions() {
            this.$emit('newOptions', this.modelValue)
        }
    },
})
</script>