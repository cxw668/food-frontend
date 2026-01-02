import { defineStore } from 'pinia'
import { PRODUCTS } from '@/mock/products.js'
import { RECIPES, DIABETES_RULES } from '@/mock/recipes.js'

export const useRecipeStore = defineStore('recipes', {
  state: () => ({
    filters: {
      tag: 'all'
    },
    selectedRecipeId: null
  }),
  getters: {
    recommendedRecipes() {
      return RECIPES.filter(recipe => {
        const hasBad = recipe.ingredients.some(ing => {
          const p = PRODUCTS[ing.productId]
          return p?.riskFlags?.some(f => DIABETES_RULES.avoidRisks.includes(f))
        })
        if (hasBad) return false
        const totalCarbs = recipe.ingredients.reduce((sum, ing) => {
          const p = PRODUCTS[ing.productId]
          return sum + (p ? (p.nutrition.carbs * (ing.amount / 100)) : 0)
        }, 0)
        return totalCarbs <= DIABETES_RULES.maxCarbsPerMeal
      })
    }
  },
  actions: {
    setFilters(next) {
      this.filters = { ...this.filters, ...next }
    },
    selectRecipe(id) {
      this.selectedRecipeId = id
    },
    searchRecipes(query) {
      if (!query) return []
      const q = query.toLowerCase().trim()
      return RECIPES.filter(r => {
        // 1. Match Name
        if (r.name.toLowerCase().includes(q)) return true
        
        // 2. Match Tags
        if (r.tags.some(t => t.toLowerCase().includes(q))) return true
        
        // 3. Match Ingredients (Product Name)
        const hasIngredient = r.ingredients.some(ing => {
          const p = PRODUCTS[ing.productId]
          return p && p.name.toLowerCase().includes(q)
        })
        if (hasIngredient) return true
        
        return false
      })
    },
    getRecipeIcon(recipe) {
      // Try to find a main ingredient icon, otherwise default
      if (recipe.ingredients && recipe.ingredients.length > 0) {
        // Sort by amount (descending) to find "main" ingredient roughly? 
        // Or just take the first one.
        // Let's take the one with highest amount
        const sorted = [...recipe.ingredients].sort((a, b) => b.amount - a.amount)
        const main = PRODUCTS[sorted[0].productId]
        if (main && main.icon) return main.icon
      }
      return null
    }
  }
})

