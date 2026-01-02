<template>
  <div ref="chartRef" style="width: 100%; height: 300px;"></div>
</template>

<script setup>
import { onMounted, ref, watch } from 'vue'
import * as echarts from 'echarts'

const props = defineProps({
  data: { type: Array, default: () => [] } // [{ date, value, type }]
})

const chartRef = ref(null)
let chartInstance = null

onMounted(() => {
  initChart()
})

watch(() => props.data, () => {
  updateChart()
}, { deep: true })

function initChart() {
  chartInstance = echarts.init(chartRef.value)
  updateChart()
}

function updateChart() {
  if (!chartInstance) return
  const option = {
    tooltip: { trigger: 'axis' },
    xAxis: { type: 'category', data: props.data.map(d => d.date) },
    yAxis: { type: 'value', name: '血糖 (mmol/L)' },
    series: [{
      data: props.data.map(d => d.value),
      type: 'line',
      smooth: true,
      symbolSize: 8
    }]
  }
  chartInstance.setOption(option)
}
</script>

