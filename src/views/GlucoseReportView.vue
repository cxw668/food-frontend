<template>
  <div class="page">
    <div class="title">Glucose</div>
    <glucose-trend-chart :data="store.logs" />
    <div class="stats">
      <el-card>
        <div>记录数：{{ store.stats.count }}</div>
        <div>均值：{{ store.stats.avg }} mmol/L</div>
        <div>峰值：{{ store.stats.max }} mmol/L</div>
      </el-card>
    </div>
  </div>
</template>

<script setup>
import GlucoseTrendChart from '@/components/GlucoseTrendChart.vue'
import { useHealthStore } from '@/stores/healthStore.js'
const store = useHealthStore()
store.load()
</script>

<style scoped>
.page { padding: 12px; }
.title { font-size: 18px; font-weight: 600; margin-bottom: 8px; }
.stats { margin-top: 10px; }
</style>

