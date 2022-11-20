<template>
    <div class="w-full mb-8 overflow-hidden rounded-lg shadow-xs">
        <div class="w-full overflow-x-auto">
            <table class="w-full whitespace-no-wrap">
                <table-head :headers="tableData.tableHeaders"></table-head>
                <tbody class="bg-white divide-y dark:divide-gray-700 dark:bg-gray-800">
                    <table-line v-for="person in tableData.people" :key="person.avatar.fullname" :avatar="person.avatar" :amount="person.amount" :status="person.status" :date="person.date" :has-action="person.hasAction"></table-line>
                </tbody>
            </table>
        </div>
        <pagination-wrapper :total-elements="93" :current-page="3" :total-pages="10"></pagination-wrapper>
    </div>
</template>

<script lang="ts">
export default defineComponent({
    props: {
        tableData: {
            type: Object,
            required: true,
        }
    }
});
</script>
