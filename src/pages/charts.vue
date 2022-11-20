<template>
  <main class="h-full pb-16 overflow-y-auto">
    <div class="container px-6 mx-auto grid">
      <content-page-title :page-title="'Charts'"></content-page-title>

      <element-star-project></element-star-project>

      <p class="mb-8 text-gray-600 dark:text-gray-400">
        Charts are provided by <a class="text-purple-600 dark:text-purple-400 hover:underline" to="https://www.chartjs.org/">Chart.js</a>. Note that the default legends are disabled and you should provide a description for your charts in HTML. See source code forexamples.
      </p>

      <div class="grid gap-6 mb-8 md:grid-cols-2">
        <chart-container :title="'Doughtnut / Pie'" :chart-config="doughnutConfig"></chart-container>
        <chart-container :title="'Line'" :chart-config="lineConfig"></chart-container>
        <chart-container :title="'Bar'" :chart-config="barConfig"></chart-container>
      </div>
    </div>
  </main>
</template>

<script lang="ts">
import barConfig from '@/assets/js/chart-bar-config'
import lineConfig from '@/assets/js/chart-line-config'
import doughnutConfig from '@/assets/js/chart-doughnut-config'

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