<template>
    <div class="container grid">
        <content-page-title :page-title="'Dashboard'" />
        <content-star-project />
        <!-- Cards -->
        <div class="grid gap-6 mb-8 md:grid-cols-2 xl:grid-cols-4">
          <card-responsive-with-icon
            :svg-pic="'people'"
            :svg-class="'p-3 mr-4 text-orange-500 bg-orange-100 rounded-full dark:text-orange-100 dark:bg-orange-500'"
            :title="'Total clients'"
            :content="'6389'" />
          <card-responsive-with-icon
            :svg-pic="'money'"
            :svg-class="'p-3 mr-4 text-green-500 bg-green-100 rounded-full dark:text-green-100 dark:bg-green-500'"
            :title="'Account balance'"
            :content="'$ 46,760.89'" />
          <card-responsive-with-icon
            :svg-pic="'cart'"
            :svg-class="'p-3 mr-4 text-blue-500 bg-blue-100 rounded-full dark:text-blue-100 dark:bg-blue-500'"
            :title="'New sales'"
            :content="'376'" />
          <card-responsive-with-icon
            :svg-pic="'message'"
            :svg-class="'p-3 mr-4 text-teal-500 bg-teal-100 rounded-full dark:text-teal-100 dark:bg-teal-500'"
            :title="'Pending contacts'"
            :content="'35'" />
        </div>

        <!-- New Table -->
        <table-wrapper :table-data="tableData"></table-wrapper>

        <!-- Charts -->
        <content-section-title :section-title="'Charts'" />
        <div class="grid gap-6 mb-8 md:grid-cols-2">
            <chart-wrapper :title="'Doughtnut / Pie'" :chart-config="doughnutConfig" />
            <chart-wrapper :title="'Line'" :chart-config="lineConfig" />
        </div>
    </div>
</template>

<script lang="ts">
import lineConfig from '@/utils/charts-lines'
import doughnutConfig from '@/utils/charts-doughtnuts'
import tableData from '@/utils/table-data'

export default defineComponent({
  data() {
    return {
      lineConfig: lineConfig,
      doughnutConfig: doughnutConfig,
      tableData: tableData,
    }
  },
});
</script>