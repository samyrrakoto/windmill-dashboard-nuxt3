<template>
  <div>
    <Title>Charts - {{ $utils.globals.projectName }}</Title>
    <content-page-title :page-title="'Charts'" />
    <content-star-project />

    <p class="mb-8 text-gray-600 dark:text-gray-400">
      Charts are provided by <a class="text-purple-600 dark:text-purple-400 hover:underline" to="https://www.chartjs.org/">Chart.js</a>. Note that the default legends are disabled and you should provide a description for your charts in HTML. See source code forexamples.
    </p>

    <div class="grid gap-6 mb-8 md:grid-cols-2">
      <chart-wrapper :title="'Doughtnut / Pie'" :chart-config="doughnutConfig" />
      <chart-wrapper :title="'Line'" :chart-config="lineConfig" />
      <chart-wrapper :title="'Bar'" :chart-config="barConfig" />
    </div>
  </div>
</template>

<script lang="ts">
import barConfig from '@/utils/charts-bars'
import lineConfig from '@/utils/charts-lines'
import doughnutConfig from '@/utils/charts-doughtnuts'

export default defineComponent({
  data() {
    return {
      barConfig: barConfig,
      lineConfig: lineConfig,
      doughnutConfig: doughnutConfig,
    }
  },
});
</script>