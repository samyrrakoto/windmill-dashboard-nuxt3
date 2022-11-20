<template>
    <div class="grid px-4 py-3 text-xs font-semibold tracking-wide text-gray-500 uppercase border-t dark:border-gray-700 bg-gray-50 sm:grid-cols-9 dark:text-gray-400 dark:bg-gray-800">
        <pagination-page-count :current-page="currentPage" :total-elements="totalElements"></pagination-page-count>
        <span class="col-span-2"></span>
        <!-- Pagination -->
        <span class="flex col-span-4 mt-2 sm:mt-auto sm:justify-end">
            <nav aria-label="Pagination">
                <ul class="inline-flex items-center">
                    <pagination-swtich-page-button :direction="'previous'"></pagination-swtich-page-button>
                    <pagination-page-button v-for="n in totalPages - 7" :key="n" :page="n" :current-page="currentPage"></pagination-page-button>
                    <pagination-page-button :page="'...'"></pagination-page-button>
                    <pagination-page-button v-for="n in totalPages - 7" :key="n" :page="n + 6" :current-page="currentPage"></pagination-page-button>
                    <pagination-swtich-page-button :direction="'next'"></pagination-swtich-page-button>
                </ul>
            </nav>
        </span>
    </div>
</template>

<script lang="ts">
export default defineComponent({
    props: {
        totalElements: {
            type: Number,
            required: true,
        },
        currentPage: {
            type: Number,
            required: true,
        },
        totalPages: {
            type: Number,
            required: true,
        },
    },
})
</script>