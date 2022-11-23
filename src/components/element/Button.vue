<template>
    <button
        class="font-medium leading-5 text-white transition-colors duration-150 bg-purple-600 border border-transparent focus:outline-none"
        :class="sizeClasses, activationClasses, roundeClasses, {'w-full': isBlockLevel}, {'flex items-center justify-between focus:shadow-outline-purple': hasIcon()}"
        >
        <span v-if="!hasIcon()">{{ buttonText }}</span>
        <span v-if="!iconOnly && hasIconRight">{{ buttonText }}</span>
        <element-svg v-if="hasIcon()" aria-hidden="true" :class="iconTextClasses" :fill="'currentColor'" :view-box="'0 0 20 20'" :pic="iconType" />
        <span v-if="!iconOnly && hasIconLeft">{{ buttonText }}</span>
    </button>
</template>

<script lang="ts">
import ButtonSizes from '@/types/ButtonSizes'

export default defineComponent({
    data() {
        return {
            sizeClasses: {
                'px-10 py-4': this.size === 'larger',
                'px-5 py-3': this.size === 'large',
                'px-4 py-2': this.size === 'regular',
                'px-3 py-1': this.size === 'small',
                'px-2 py-2': this.size === 'icon-only',
            },
            activationClasses: {
                'active:bg-purple-600 hover:bg-purple-700 focus:shadow-outline-purple': !this.isDisabled,
                'opacity-50 cursor-not-allowed': this.isDisabled,
            },
            iconTextClasses: {
                // One could say I could've refactored w-4 and h-4 classes but IT HAS to be in this order to work cleanly. Otherwise, I would've.
                'w-4 h-4 mr-2 -ml-1': this.hasIconLeft,
                'w-4 h-4 ml-2 -mr-1': this.hasIconRight,
                'w-5 h-5': this.iconOnly,
            },
            roundeClasses: {
                'rounded-lg': !this.isRounded,
                'rounded-full': this.isRounded,
            },
        }
    },
    props: {
        buttonText: {
            type: String,
            default: '',
        },
        size: {
            type: <ButtonSizes>String,
            required: true,
        },
        isDisabled: {
            type: Boolean,
            default: false,
        },
        isBlockLevel: {
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
        iconOnly: {
            type: Boolean,
            default: false,
        },
        isSvgEvenOdd: {
            type: Boolean,
            default: false,
        },
        isRounded: {
            type: Boolean,
            default: false,
        },
        iconType: {
            type: String,
            default: 'heart',
        }
    },
    methods: {
        hasIcon() {
            return (this.hasIconLeft || this.hasIconRight || this.iconOnly)
        },
    }
})
</script>