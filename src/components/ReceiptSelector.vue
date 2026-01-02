<template>
  <div>
    <el-row :gutter="12">
      <el-col :span="24" v-for="r in receipts" :key="r.id">
        <el-card shadow="hover" class="receipt-card">
          <div class="header">
            <div class="store">收据：{{ r.store }}</div>
            <div class="date">{{ r.date }}</div>
          </div>
          <div class="items">
            <div v-for="it in r.items" :key="it.productName" class="line">
              <span class="name">{{ it.productName }}</span>
              <span class="qty">x{{ it.quantity }}</span>
            </div>
          </div>
          <div class="actions">
            <el-button type="primary" @click="select(r)">选择此小票</el-button>
          </div>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script setup>
import { RECEIPTS } from '@/mock/receipts.js'

const receipts = RECEIPTS
const emit = defineEmits(['select'])

function select(r) {
  emit('select', r.items)
}
</script>

<style scoped>
.receipt-card { margin-bottom: 12px; }
.header {
  display: flex;
  justify-content: space-between;
  margin-bottom: 8px;
}
.items .line {
  display: flex;
  justify-content: space-between;
  padding: 4px 0;
  border-bottom: 1px dashed #eee;
}
.actions { margin-top: 8px; text-align: right; }
</style>

