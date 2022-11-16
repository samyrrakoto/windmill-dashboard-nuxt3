/* eslint-disable vue/one-component-per-file */
import Vue from 'vue'
import { Bar, Line, Doughnut, Pie } from 'vue-chart.js'

ChartJS.register(
  Title,
  Tooltip,
  Legend,
  PointElement,
  BarElement,
  CategoryScale,
  LinearScale,
  LineElement,
  ArcElement
)

Vue.component('LineChart', {
  extends: Line
})

Vue.component('DoughnutChart', {
  extends: Doughnut
})

Vue.component('BarChart', {
  extends: Bar
})

Vue.component('PieChart', {
  extends: Pie
})