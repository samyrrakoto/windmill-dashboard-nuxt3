<template>
    <span class="flex items-center col-span-3">
        Showing {{ getCurrentRange }} of {{ totalElements }}
    </span>
</template>
<script lang="ts">
export default defineComponent({
    props: {
        currentPage: {
            type: Number,
            required: true,
        },
        totalElements: {
            type: Number,
            required: true,
        },
    },
    computed: {
        getCurrentRange(): string {
            return String(this.currentPage * 10 + ' - ' + (this.currentPage + 1) * 10)
        },
    },
})
</script>