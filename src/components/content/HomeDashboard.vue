<template>
    <div class="container grid">
        <content-page-title :page-title="'Dashboard'" />
        <content-star-project />
        <!-- Cards -->
        <div class="grid gap-6 mb-8 md:grid-cols-2 xl:grid-cols-4">
            <card-responsive-with-icon :cardType="'totalClients'" :title="'Total clients'" :content="'6389'" />
            <card-responsive-with-icon :cardType="'accountBalance'" :title="'Account balance'" :content="'$ 46,760.89'" />
            <card-responsive-with-icon :cardType="'newSales'" :title="'New sales'" :content="'376'" />
            <card-responsive-with-icon :cardType="'pendingContacts'" :title="'Pending contacts'" :content="'35'" />
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