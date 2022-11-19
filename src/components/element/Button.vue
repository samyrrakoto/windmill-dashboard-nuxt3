<template>
    <button
        class="font-medium leading-5 text-white transition-colors duration-150 bg-purple-600 border border-transparent focus:outline-none"
        :class="sizeClasses, activationClasses, roundeClasses, {'w-full': isBlockLevel}, {'flex items-center justify-between focus:shadow-outline-purple': hasIcon()}"
        >
        <span v-if="!hasIcon()">{{ buttonText }}</span>
        <span v-if="!iconOnly && hasIconRight">{{ buttonText }}</span>
        <svg
            v-if="hasIcon()"
            :class="iconTextClasses"
            fill="currentColor"
            aria-hidden="true"
            viewBox="0 0 20 20"
        >
            <path
            :d="svgPaths[iconType]"
            :clip-rule="getIsSvgEvenOdd()"
            :fill-rule="getIsSvgEvenOdd()"
            ></path>
        </svg>
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
            svgPaths: {
                // We could import a file in which there would be an array of icons and their svg paths, but this is simplier is this use case only.
                heart:'M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z',
                pencil:'M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z',
                card:'M14.781,14.347h1.738c0.24,0,0.436-0.194,0.436-0.435v-1.739c0-0.239-0.195-0.435-0.436-0.435h-1.738c-0.239,0-0.435,0.195-0.435,0.435v1.739C14.347,14.152,14.542,14.347,14.781,14.347 M18.693,3.045H1.307c-0.48,0-0.869,0.39-0.869,0.869v12.17c0,0.479,0.389,0.869,0.869,0.869h17.387c0.479,0,0.869-0.39,0.869-0.869V3.915C19.562,3.435,19.173,3.045,18.693,3.045 M18.693,16.085H1.307V9.13h17.387V16.085z M18.693,5.653H1.307V3.915h17.387V5.653zM3.48,12.608h7.824c0.24,0,0.435-0.195,0.435-0.436c0-0.239-0.194-0.435-0.435-0.435H3.48c-0.24,0-0.435,0.195-0.435,0.435C3.045,12.413,3.24,12.608,3.48,12.608 M3.48,14.347h6.085c0.24,0,0.435-0.194,0.435-0.435s-0.195-0.435-0.435-0.435H3.48c-0.24,0-0.435,0.194-0.435,0.435S3.24,14.347,3.48,14.347'
            }
        }
    },
    props: {
        buttonText: {
            type: String,
            required: false,
            default: '',
        },
        size: {
            type: <ButtonSizes>String,
            required: true,
        },
        isDisabled: {
            type: Boolean,
            required: false,
            default: false,
        },
        isBlockLevel: {
            type: Boolean,
            required: false,
            default: false,
        },
        hasIconLeft: {
            type: Boolean,
            required: false,
            default: false,
        },
        hasIconRight: {
            type: Boolean,
            required: false,
            default: false,
        },
        iconOnly: {
            type: Boolean,
            required: false,
            default: false,
        },
        isSvgEvenOdd: {
            type: Boolean,
            required: false,
            default: false,
        },
        isRounded: {
            type: Boolean,
            required: false,
            default: false,
        },
        iconType: {
            type: String,
            required: false,
            default: 'heart',
        }
    },
    methods: {
        hasIcon() {
            return (this.hasIconLeft || this.hasIconRight || this.iconOnly)
        },
        getIsSvgEvenOdd() {
            if (this.isSvgEvenOdd){
                return 'evenodd'
            }
        }
    }
})
</script>