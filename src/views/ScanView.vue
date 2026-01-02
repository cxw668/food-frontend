<template>
  <div class="page">
    <div class="title">Scan</div>
    <receipt-selector @select="onSelect" />
  </div>
</template>

<script setup>
import { usePantryStore } from '@/stores/pantryStore.js'
import ReceiptSelector from '@/components/ReceiptSelector.vue'
import { ElMessage } from 'element-plus'

const pantry = usePantryStore()
pantry.load()

function onSelect(items) {
  pantry.addFromReceipt(items)
  ElMessage.success('已加入食材库')
}
</script>

<style scoped>
.page { padding: 12px; }
.title { font-size: 18px; font-weight: 600; margin-bottom: 8px; }
</style>

