<template>
  <el-card shadow="hover">
    <div class="title">211 餐盘结构</div>
    <div class="bars">
      <div class="bar veg" :style="{ width: vegPct + '%' }">蔬菜 {{ vegPct.toFixed(0) }}%</div>
      <div class="bar protein" :style="{ width: proteinPct + '%' }">蛋白 {{ proteinPct.toFixed(0) }}%</div>
      <div class="bar carb" :style="{ width: carbPct + '%' }">碳水 {{ carbPct.toFixed(0) }}%</div>
    </div>
  </el-card>
</template>

<script setup>
import { computed } from 'vue'
import { PRODUCTS } from '@/mock/products.js'

const props = defineProps({
  ingredients: { type: Array, default: () => [] } // [{productId, amount}]
})

const totals = computed(() => {
  const t = { veg: 0, protein: 0, carb: 0 }
  props.ingredients.forEach(ing => {
    const p = PRODUCTS[ing.productId]
    if (!p) return
    const a = ing.amount
    if (p.category === 'veg') t.veg += a
    else if (p.category === 'protein') t.protein += a
    else if (p.category === 'carb') t.carb += a
  })
  const total = t.veg + t.protein + t.carb || 1
  return {
    veg: t.veg, protein: t.protein, carb: t.carb,
    vegPct: (t.veg / total) * 100,
    proteinPct: (t.protein / total) * 100,
    carbPct: (t.carb / total) * 100
  }
})

const vegPct = computed(() => totals.value.vegPct)
const proteinPct = computed(() => totals.value.proteinPct)
const carbPct = computed(() => totals.value.carbPct)
</script>

<style scoped>
.title {
  font-weight: 600;
  margin-bottom: 10px;
}
.bars {
  display: flex;
  gap: 6px;
}
.bar {
  height: 24px;
  border-radius: 6px;
  color: #fff;
  text-align: center;
  line-height: 24px;
  font-size: 12px;
}
.veg { background: #4caf50; }
.protein { background: #f59f00; }
.carb { background: #3b82f6; }
</style>

