<template>
    <label class="block text-sm" :class="{'mt-4': !isFirstElement}">
        <span class="text-gray-700 dark:text-gray-400">
            {{ inputLabel }}
        </span>
        <input v-if="!isTextArea"
            class="block w-full mt-1 text-sm form-input"
            :class="textInputClasses"
            :placeholder="placeHolder" />
        <textarea v-else
            class="block w-full mt-1 text-sm dark:text-gray-300 dark:border-gray-600 dark:bg-gray-700 form-textarea focus:border-purple-400 focus:outline-none focus:shadow-outline-purple dark:focus:shadow-outline-gray"
            rows="3"
            :placeholder="placeHolder"
        ></textarea>
        <span class="text-xs dark:text-red-400" :class="inputHelperClasses" v-if="(isInvalid || isValid || hasHint)">
            {{ inputHelperText }}
        </span>
    </label>
</template>

<script lang="ts">
export default defineComponent({
    data() {
        return {
            textInputClasses: {
                'dark:border-gray-600 dark:bg-gray-700 focus:border-purple-400 focus:outline-none focus:shadow-outline-purple dark:text-gray-300 dark:focus:shadow-outline-gray':(!this.isValid && !this.hasHint && !this.isInvalid && !this.isTextArea),
                'border-red-600 dark:text-gray-300 dark:bg-gray-700 focus:border-red-400 focus:outline-none focus:shadow-outline-red':this.isInvalid,
                'border-green-600 dark:text-gray-300 dark:bg-gray-700 focus:border-green-400 focus:outline-none focus:shadow-outline-green':this.isValid,
                'dark:text-gray-300 dark:border-gray-600 dark:bg-gray-700 focus:border-purple-400 focus:outline-none focus:shadow-outline-purple dark:focus:shadow-outline-gray':this.hasHint,
            },
            inputHelperClasses: {
                'text-red-600': this.isInvalid,
                'text-green-600': this.isValid,
                'text-gray-600': this.hasHint,
            }
        }
    },
    props: {
        inputLabel: {
            type: String,
            required: false,
            default: "Text Label"
        },
        placeHolder: {
            type: String,
            required: false,
            default: "Your text here",
        },
        isTextArea: {
            type: Boolean,
            required: false,
            default: false,
        },
        isInvalid: {
            type: Boolean,
            required: false,
            default: false,
        },
        isValid: {
            type: Boolean,
            required: false,
            default: false,
        },
        hasHint: {
            type: Boolean,
            required: false,
            default: false,
        },
        inputHelperText: {
            type: String,
            required: false,
            default: "Hint text"
        },
        isFirstElement: {
            type: Boolean,
            required: false,
            default: false,
        },
    }
})
</script>