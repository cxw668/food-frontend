<template>
  <el-input
    v-model="model"
    placeholder="Search..."
    clearable
    @input="$emit('update:modelValue', model)"
    class="search"
  />
</template>

<script setup>
import { ref, watch } from 'vue'
const props = defineProps({ modelValue: String })
const emit = defineEmits(['update:modelValue'])
const model = ref(props.modelValue || '')
watch(() => props.modelValue, v => { model.value = v || '' })
</script>

<style scoped>
.search { margin: 8px 0; }
</style>

