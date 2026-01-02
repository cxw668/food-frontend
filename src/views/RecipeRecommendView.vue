<template>
  <div class="page">
    <div class="title">Recipe</div>
    <el-row :gutter="12">
      <el-col :span="24" v-for="r in recipes" :key="r.id">
        <el-card shadow="hover">
          <div class="name">{{ r.name }}</div>
          <plate-211-diagram :ingredients="r.ingredients" />
          <div class="ings">
            <span v-for="ing in r.ingredients" :key="ing.productId" class="ing">
              {{ ing.productId }} {{ ing.amount }}g
            </span>
          </div>
          <div class="meta">碳水总量：{{ carb(r).toFixed(1) }} g</div>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script setup>
import { useRecipeStore } from '@/stores/recipeStore.js'
import Plate211Diagram from '@/components/Plate211Diagram.vue'
import { calcCarbsForRecipe } from '@/mock/recipes.js'

const store = useRecipeStore()
const recipes = store.recommendedRecipes
const carb = calcCarbsForRecipe
</script>

<style scoped>
.page { padding: 12px; }
.title { font-size: 18px; font-weight: 600; margin-bottom: 8px; }
.name { font-weight: 600; margin-bottom: 6px; }
.ings { margin-top: 6px; display: flex; flex-wrap: wrap; gap: 8px; font-size: 12px; color: #666; }
.meta { margin-top: 6px; font-size: 12px; color: #333; }
</style>

