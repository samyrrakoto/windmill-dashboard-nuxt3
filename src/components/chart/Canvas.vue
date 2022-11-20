<template>
    <component
      :is="chartType"
      :chart-options="chartOptions"
      :chart-data="chartData"
      :chart-id="chartId"
      :dataset-id-key="datasetIdKey"
      :plugins="plugins"
      :css-classes="cssClasses"
      :styles="styles"
      :width="width"
      :height="height"
    ></component>
  </template>

<script>
import { Doughnut, Bar, Line } from 'vue-chartjs'
import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from 'chart.js'
import chartProps from '@/props/chart-props'

ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale)

export default defineComponent({
  name: 'Canvas',
  props: {
    ...chartProps,
  },
  components: {
    Doughnut,
    Bar,
    Line,
  },
})
</script>