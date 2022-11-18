<template>
    <div class="mt-4 text-sm">
        <span class="text-gray-700 dark:text-gray-400">
            {{ radioLabel }}
        </span>
        <div class="mt-2">
            <label
                class="inline-flex items-center text-gray-600 dark:text-gray-400"
                v-for="(radio, index) in radioInputs" :key="radio.name" :class="{ 'ml-6' : index > 0 }"
            >
                <input type="radio"
                    class="text-purple-600 form-radio focus:border-purple-400 focus:outline-none focus:shadow-outline-purple dark:focus:shadow-outline-gray"
                    :name="$utils.stringUtils.toKebabCase(radioLabel)" v-bind="radio.value"
                />
                <span class="ml-2">{{ radio.label }}</span>
            </label>
        </div>
    </div>
</template>

<script lang="ts">
type RadioInput = {
    value: String,
    label: String,
}
export default defineComponent({
    props: {
        radioLabel: {
            type: String,
            required: false,
            default : "Radio Button Label"
        },
        radioInputs: {
            type: Object as PropType<RadioInput>,
            required: true,
        }
    },
})
</script>