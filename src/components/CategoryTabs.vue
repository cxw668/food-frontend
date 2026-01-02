<template>
  <el-tabs v-model="active" @tab-change="$emit('change', active)">
    <el-tab-pane label="All" name="all" />
    <el-tab-pane label="Staple food" name="carb" />
    <el-tab-pane label="Protein" name="protein" />
    <el-tab-pane label="Vegetable" name="veg" />
    <el-tab-pane label="Fruit" name="fruit" />
    <el-tab-pane label="Dairy" name="dairy" />
    <el-tab-pane label="Condiment" name="condiment" />
  </el-tabs>
</template>

<script setup>
import { ref, watch } from 'vue'
const props = defineProps({ modelValue: { type: String, default: 'all' } })
const emit = defineEmits(['update:modelValue', 'change'])
const active = ref(props.modelValue)
watch(active, v => emit('update:modelValue', v))
watch(() => props.modelValue, v => { active.value = v })
</script>

