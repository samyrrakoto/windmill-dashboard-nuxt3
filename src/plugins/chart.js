/* eslint-disable vue/one-component-per-file */
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