<template>
  <main class="h-full pb-16 overflow-y-auto">
    <div class="container px-6 mx-auto grid">
      <content-page-title :page-title="'Charts'"></content-page-title>
      <!-- CTA -->
      <element-star-project></element-star-project>

      <p class="mb-8 text-gray-600 dark:text-gray-400">
        Charts are provided by
        <a class="text-purple-600 dark:text-purple-400 hover:underline" to="https://www.chartjs.org/">
          Chart.js
        </a>
        . Note that the default legends are disabled and you should
        provide a description for your charts in HTML. See source code for
        examples.
      </p>

      <div class="grid gap-6 mb-8 md:grid-cols-2">
        <!-- Doughnut/Pie chart -->
        <div class="min-w-0 p-4 bg-white rounded-lg shadow-xs dark:bg-gray-800">
          <chart-title :title="'Doughtnut / Pie'"></chart-title>
          <chart-canvas v-bind="doughnutConfig"></chart-canvas>
          <div class="flex justify-center mt-4 space-x-3 text-sm text-gray-600 dark:text-gray-400">
            <!-- Chart legend -->
            <div class="flex items-center">
              <span class="inline-block w-3 h-3 mr-1 bg-blue-600 rounded-full"></span>
              <span>Shirts</span>
            </div>
            <div class="flex items-center">
              <span class="inline-block w-3 h-3 mr-1 bg-teal-500 rounded-full"></span>
              <span>Shoes</span>
            </div>
            <div class="flex items-center">
              <span class="inline-block w-3 h-3 mr-1 bg-purple-600 rounded-full"></span>
              <span>Bags</span>
            </div>
          </div>
        </div>
        <!-- Lines chart -->
        <div class="min-w-0 p-4 bg-white rounded-lg shadow-xs dark:bg-gray-800">
          <chart-title :title="'Lines'"></chart-title>
          <chart-canvas v-bind="lineConfig"></chart-canvas>
          <div class="flex justify-center mt-4 space-x-3 text-sm text-gray-600 dark:text-gray-400">
            <!-- Chart legend -->
            <div class="flex items-center">
              <span class="inline-block w-3 h-3 mr-1 bg-teal-500 rounded-full"></span>
              <span>Organic</span>
            </div>
            <div class="flex items-center">
              <span class="inline-block w-3 h-3 mr-1 bg-purple-600 rounded-full"></span>
              <span>Paid</span>
            </div>
          </div>
        </div>
        <!-- Bars chart -->
        <div class="min-w-0 p-4 bg-white rounded-lg shadow-xs dark:bg-gray-800">
          <chart-title :title="'Bars'"></chart-title>
          <chart-canvas v-bind="barConfig"></chart-canvas>
          <div class="flex justify-center mt-4 space-x-3 text-sm text-gray-600 dark:text-gray-400">
            <!-- Chart legend -->
            <div class="flex items-center">
              <span class="inline-block w-3 h-3 mr-1 bg-teal-500 rounded-full"></span>
              <span>Shoes</span>
            </div>
            <div class="flex items-center">
              <span class="inline-block w-3 h-3 mr-1 bg-purple-600 rounded-full"></span>
              <span>Bags</span>
            </div>
          </div>
        </div>
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