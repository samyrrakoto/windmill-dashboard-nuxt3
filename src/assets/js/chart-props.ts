const chartProps = {
    chartOptions: {
        type: Object
    },
    chartData: {
        type: Object
    },
    datasetIdKey: {
        type: String
    },
    chartId: {
        type: String,
        default: 'bar-chart'
    },
    width: {
        type: Number,
        default: 400
    },
    height: {
        type: Number,
        default: 400
    },
    cssClasses: {
        default: '',
        type: String
    },
    styles: {
        type: Object,
        default: () => {}
    },
    plugins: {
        type: Object,
        default: () => {}
    }
}
export default chartProps