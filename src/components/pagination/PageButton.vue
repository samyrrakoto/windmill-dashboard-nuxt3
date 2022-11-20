<template>
    <li>
        <button
            class="px-3 py-1 rounded-md focus:outline-none focus:shadow-outline-purple"
            :class="{'text-white transition-colors duration-150 bg-purple-600 border border-r-0 border-purple-600': String(currentPage) === String(page) }"
        >
            {{ page }}
        </button>
    </li>
</template>
<script lang="ts">
export default defineComponent({
    props: {
        currentPage: {
            type: Number,
        },
        page: {
            type: Number || String,
            required: true,
        },
    },
})
</script>