<template>
    <label class="block text-sm" :class="{'mt-4': !isFirstElement}">
        <span class="text-gray-700 dark:text-gray-400">
            {{ inputLabel }}
        </span>
        <div class="relative text-gray-500 focus-within:text-purple-600 dark:focus-within:text-purple-400">
            <span v-if="!isTextArea">
                <input
                    class="block w-full mt-1 text-sm form-input"
                    :class="textInputClasses, buttonInputClasses"
                    :placeholder="placeHolder"
                    :type="type"
                />
                <button v-if="(hasButtonLeft || hasButtonRight)"
                    class="absolute inset-y-0 px-4 text-sm font-medium leading-5 text-white transition-colors duration-150 bg-purple-600 border border-transparent  active:bg-purple-600 hover:bg-purple-700 focus:outline-none focus:shadow-outline-purple dark:focus:shadow-outline-gray"
                    :class="buttonElementClasses"
                    >
                    Click
                </button>
            </span>
            <textarea v-else
                class="block w-full mt-1 text-sm dark:text-gray-300 dark:border-gray-600 dark:bg-gray-700 form-textarea focus:border-purple-400 focus:outline-none focus:shadow-outline-purple dark:focus:shadow-outline-gray"
                rows="3"
                :placeholder="placeHolder"
            ></textarea>
            <div class="absolute inset-y-0 flex items-center pointer-events-none" :class="iconInputClasses" v-if:="(hasIconLeft || hasIconRight)">
              <svg class="w-5 h-5" aria-hidden="true" fill="none" stroke-linecap="round" stroke-linejoin="round"
                stroke-width="2" viewBox="0 0 24 24" stroke="currentColor">
                <path
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z">
                </path>
              </svg>
            </div>
            <span class="text-xs dark:text-red-400" :class="inputHelperClasses" v-if="(isInvalid || isValid || hasHint)">
                {{ inputHelperText }}
            </span>
        </div>
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
                'pl-10': this.hasIconLeft,
                'pr-10': this.hasIconRight,
            },
            inputHelperClasses: {
                'text-red-600': this.isInvalid,
                'text-green-600': this.isValid,
                'text-gray-600': this.hasHint,
            },
            iconInputClasses: {
                'ml-3': this.hasIconLeft,
                'right-0  mr-3 ': this.hasIconRight,
            },
            buttonInputClasses: {
                'pl-20 mt-1': this.hasButtonLeft,
                'pr-20 mt-1': this.hasButtonRight,
            },
            buttonElementClasses: {
                'rounded-l-md': this.hasButtonLeft,
                'right-0 rounded-r-md': this.hasButtonRight,
            }
        }
    },
    props: {
        inputLabel: {
            type: String,
            default: "Text Label"
        },
        placeHolder: {
            type: String,
            default: "Your text here",
        },
        isTextArea: {
            type: Boolean,
            default: false,
        },
        type: {
            type: String,
            default: '',
        },
        isInvalid: {
            type: Boolean,
            default: false,
        },
        isValid: {
            type: Boolean,
            default: false,
        },
        hasHint: {
            type: Boolean,
            default: false,
        },
        inputHelperText: {
            type: String,
            default: "Hint text"
        },
        isFirstElement: {
            type: Boolean,
            default: false,
        },
        hasIconLeft: {
            type: Boolean,
            default: false,
        },
        hasIconRight: {
            type: Boolean,
            default: false,
        },
        hasButtonLeft: {
            type: Boolean,
            default: false,
        },
        hasButtonRight: {
            type: Boolean,
            default: false,
        }
    }
})
</script>