<template>
  <el-card shadow="hover" class="item-card">
    <div class="row">
      <div class="thumb">{{ product.icon || '🍽️' }}</div>
      <div class="info">
        <div class="name">{{ product.name }}</div>
        <div class="nutrition">
          {{ product.nutrition.energy }} 千卡/100g · 碳水 {{ product.nutrition.carbs }}g
        </div>
        <div class="flags">
          <span
            v-for="f in product.riskFlags || []"
            :key="f"
            :class="['flag', f]"
            :title="flagText(f)"
          />
        </div>
      </div>
      <el-button type="primary" plain @click="$emit('add', product.id)">加入库存</el-button>
    </div>
  </el-card>
</template>

<script setup>
const props = defineProps({
  product: { type: Object, required: true }
})

function flagText(f) {
  return f === 'highSugar' ? '高糖' : f === 'highSodium' ? '高钠' : f
}
</script>

<style scoped>
.item-card {
  margin-bottom: 12px;
}
.row {
  display: flex;
  align-items: center;
  gap: 12px;
}
.thumb {
  width: 48px;
  height: 48px;
  border-radius: 10px;
  background: #e8f3ff;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 24px;
}
.info {
  flex: 1;
}
.name {
  font-weight: 600;
  margin-bottom: 4px;
}
.nutrition {
  font-size: 12px;
  color: #666;
}
.flags {
  margin-top: 6px;
  display: flex;
  gap: 6px;
}
.flag {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  display: inline-block;
}
.flag.highSugar { background: #ff6b6b; }
.flag.highSodium { background: #4dabf7; }
</style>

