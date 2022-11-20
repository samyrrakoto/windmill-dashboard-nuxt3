<template>
<li>
    <button class="px-3 py-1 rounded-md focus:outline-none focus:shadow-outline-purple" :class="directionClasses" :aria-label="direction">
        <svg aria-hidden="true" class="w-4 h-4 fill-current" viewBox="0 0 20 20">
            <path :d="directionPaths[direction]" clip-rule="evenodd" fill-rule="evenodd"></path>
        </svg>
    </button>
</li>
</template>
<script lang="ts">
export default defineComponent({
    data() {
        return {
            directionPaths: {
                previous:'M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z',
                next:'M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z',
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