<template>
    <li>
        <button class="px-3 py-1 rounded-md focus:outline-none focus:shadow-outline-purple" :class="directionClasses" :aria-label="direction">
            <element-svg aria-hidden="true" :class="'w-4 h-4 fill-current'" :view-box="'0 0 20 20'" :fill="'currentColor'" :pic="directionPaths[direction]" />
        </button>
    </li>
</template>
<script lang="ts">
export default defineComponent({
    data() {
        return {
            directionPaths: {
                previous:'arrowLeft',
                next:'arrowRight',
            },
            directionClasses: {
                'rounded-l-lg': this.direction === 'previous',
                'rounded-r-lg': this.direction === 'next',
            }
        }
    },
    props: {
        direction: {
            type: String,
            required: true,
        },
    }
})
</script>