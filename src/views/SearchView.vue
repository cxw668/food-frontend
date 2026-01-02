<template>
  <div class="common-layout">
    <el-container class="main-container">
      <el-aside width="240px" class="left-aside">
        <HomeSidebar />
      </el-aside>
      
      <el-main class="center-main">
        <div class="content-wrapper">
          <div class="search-header">
            <h2>Search</h2>
            <el-input
              v-model="searchQuery"
              placeholder="Search for foods, recipes, or users..."
              class="search-input"
              size="large"
            >
              <template #prefix>
                <el-icon><Search /></el-icon>
              </template>
            </el-input>
          </div>
          
          <div class="search-tags">
            <span class="tag-label">Popular:</span>
            <el-tag 
              v-for="tag in ['breakfast', 'lunch', 'dinner', 'low-carb', 'high-protein']" 
              :key="tag" 
              class="mx-1" 
              effect="plain" 
              round
              style="cursor: pointer;"
              @click="searchQuery = tag"
            >
              {{ tag }}
            </el-tag>
          </div>

          <el-divider />

          <div class="results-area">
            <el-empty v-if="!searchQuery" description="Enter keywords to search" />
            <el-empty v-else-if="searchResults.length === 0" description="No results found" />
            <div v-else>
               <div v-for="recipe in searchResults" :key="recipe.id" class="result-item">
                 <div class="result-icon">
                    <span style="font-size: 24px;">{{ store.getRecipeIcon(recipe) || '🍲' }}</span>
                 </div>
                 <div class="result-info">
                   <h4>{{ recipe.name }}</h4>
                   <p>{{ recipe.description }}</p>
                 </div>
                 <el-button type="primary" link @click="openRecipe(recipe)">View</el-button>
               </div>
            </div>
          </div>

          <!-- Recipe Detail Dialog -->
          <el-dialog
            v-model="dialogVisible"
            title="Recipe Details"
            width="600px"
            destroy-on-close
            append-to-body
          >
            <div v-if="currentRecipe">
              <h3 style="margin-top:0;">{{ currentRecipe.name }}</h3>
              <p style="color: #666; margin-bottom: 20px;">{{ currentRecipe.description }}</p>
              
              <div ref="chartRef" style="width: 100%; height: 350px;"></div>
              
              <div style="margin-top: 20px;">
                <h4 style="margin-bottom: 10px;">Ingredients:</h4>
                <ul style="padding-left: 20px;">
                  <li v-for="ing in currentRecipe.ingredients" :key="ing.productId" style="margin-bottom: 4px;">
                    {{ getProductName(ing.productId) }}: <span style="font-weight: bold;">{{ ing.amount }}g</span>
                  </li>
                </ul>
              </div>
            </div>
          </el-dialog>
        </div>
      </el-main>
      
      <el-aside width="300px" class="right-aside">
        <HomeRightPanel />
      </el-aside>
    </el-container>
  </div>
</template>

<script setup>
import { ref, computed, nextTick } from 'vue'
import HomeSidebar from '../components/HomeSidebar.vue'
import HomeRightPanel from '../components/HomeRightPanel.vue'
import { Search } from '@element-plus/icons-vue'
import { useRecipeStore } from '../stores/recipeStore.js'
import * as echarts from 'echarts'
import { PRODUCTS } from '@/mock/products.js'

const store = useRecipeStore()
const searchQuery = ref('')
const dialogVisible = ref(false)
const currentRecipe = ref(null)
const chartRef = ref(null)
let chartInstance = null

const searchResults = computed(() => {
  return store.searchRecipes(searchQuery.value)
})

const openRecipe = (recipe) => {
  currentRecipe.value = recipe
  dialogVisible.value = true
  nextTick(() => {
    initChart()
  })
}

const initChart = () => {
  if (!chartRef.value || !currentRecipe.value) return
  
  if (chartInstance) {
    chartInstance.dispose()
  }
  chartInstance = echarts.init(chartRef.value)
  
  const dataMap = {}
  
  currentRecipe.value.ingredients.forEach(ing => {
    const p = PRODUCTS[ing.productId]
    if (p) {
      const cat = p.category || 'other'
      dataMap[cat] = (dataMap[cat] || 0) + ing.amount
    }
  })
  
  const data = Object.keys(dataMap).map(k => ({
    name: k.charAt(0).toUpperCase() + k.slice(1),
    value: dataMap[k]
  }))

  const option = {
    title: { 
      text: 'Ingredient Distribution', 
      left: 'center',
      top: 10
    },
    tooltip: { 
      trigger: 'item',
      formatter: '{b}: {c}g ({d}%)' 
    },
    legend: { 
      bottom: 0 
    },
    series: [
      {
        name: 'Ingredients',
        type: 'pie',
        radius: ['40%', '70%'],
        avoidLabelOverlap: false,
        itemStyle: {
          borderRadius: 10,
          borderColor: '#fff',
          borderWidth: 2
        },
        label: {
          show: false,
          position: 'center'
        },
        emphasis: {
          label: {
            show: true,
            fontSize: 20,
            fontWeight: 'bold'
          }
        },
        labelLine: {
          show: false
        },
        data: data
      }
    ]
  }
  
  chartInstance.setOption(option)
}

const getProductName = (id) => {
  return PRODUCTS[id]?.name || id
}
</script>

<style scoped>
.common-layout {
  height: 100vh;
  width: 100%;
  overflow: hidden;
  background-color: #f9fafb;
}

.main-container {
  height: 100%;
}

.left-aside,
.right-aside {
  background: #fff;
  border-right: 1px solid #f3f4f6;
  border-left: 1px solid #f3f4f6;
  overflow: hidden;
  transition: width 0.3s;
}

.center-main {
  background: #fff;
  padding: 0;
  overflow-y: auto;
}

.left-aside {
  border-right: 1px solid #f3f4f6;
  border-left: none;
}

.right-aside {
  border-left: 1px solid #f3f4f6;
  border-right: none;
}

.content-wrapper {
  padding: 24px;
  max-width: 800px;
  margin: 0 auto;
}

.search-header {
  margin-bottom: 16px;
}

.search-header h2 {
  font-size: 24px;
  font-weight: 600;
  color: #1f2937;
  margin-bottom: 16px;
}

.search-input :deep(.el-input__wrapper) {
  border-radius: 20px;
  background-color: #f3f4f6;
  box-shadow: none;
}

.search-input :deep(.el-input__wrapper:hover),
.search-input :deep(.el-input__wrapper.is-focus) {
  background-color: #fff;
  box-shadow: 0 0 0 1px #84cc16;
}

.search-tags {
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 24px;
}

.tag-label {
  color: #6b7280;
  font-size: 14px;
}

.result-item {
  display: flex;
  align-items: center;
  gap: 16px;
  padding: 16px;
  border-bottom: 1px solid #f3f4f6;
}

.result-icon {
  width: 40px;
  height: 40px;
  background-color: #ecfccb;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #4d7c0f;
}

.result-info {
  flex: 1;
}

.result-info h4 {
  font-size: 16px;
  font-weight: 600;
  color: #374151;
  margin-bottom: 4px;
}

.result-info p {
  font-size: 14px;
  color: #6b7280;
}

@media (max-width: 1024px) {
  .right-aside {
    display: none;
  }
}

@media (max-width: 768px) {
  .left-aside {
    display: none;
  }
}
</style>
