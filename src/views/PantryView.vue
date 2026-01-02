<template>
  <div class="common-layout">
    <el-container class="main-container">
      <el-aside width="240px" class="left-aside">
        <HomeSidebar />
      </el-aside>
      
      <el-main class="center-main">
        <div class="page-content">
          <div class="header-row">
            <div class="title">Food Library</div>
            <el-radio-group v-model="activeTab" size="small">
              <el-radio-button label="catalog">Catalog</el-radio-button>
              <el-radio-button label="my_pantry">My Pantry</el-radio-button>
            </el-radio-group>
          </div>

          <div v-if="activeTab === 'catalog'">
            <search-bar v-model="query" />
            <category-tabs v-model="cat" />

            <div class="list">
              <pantry-item
                v-for="p in filteredProducts"
                :key="p.id"
                :product="p"
                @add="add(p.id)"
              />
            </div>
          </div>

          <div v-else class="my-pantry-list">
            <el-empty v-if="pantry.items.length === 0" description="Your pantry is empty. Scan items or add from catalog!" />
            <div v-else>
              <el-card v-for="(item, index) in myPantryItems" :key="index" shadow="hover" class="item-card">
                <div class="row">
                  <div class="thumb">{{ item.product.icon || '🍽️' }}</div>
                  <div class="info">
                    <div class="name">{{ item.product.name }}</div>
                    <div class="meta">
                      Quantity: {{ item.quantity }} {{ item.product.unit || '' }} · Added: {{ item.purchaseDate }}
                    </div>
                  </div>
                  <el-button type="danger" link @click="remove(index)">Remove</el-button>
                </div>
              </el-card>
            </div>
          </div>
        </div>
      </el-main>
      
      <el-aside width="300px" class="right-aside">
        <HomeRightPanel />
      </el-aside>
    </el-container>
  </div>
</template>

<script setup>
import { computed, ref } from 'vue'
import { PRODUCTS } from '@/mock/products.js'
import PantryItem from '@/components/PantryItem.vue'
import SearchBar from '@/components/SearchBar.vue'
import CategoryTabs from '@/components/CategoryTabs.vue'
import { usePantryStore } from '@/stores/pantryStore.js'
import { ElMessage } from 'element-plus'
import HomeSidebar from '@/components/HomeSidebar.vue'
import HomeRightPanel from '@/components/HomeRightPanel.vue'

const query = ref('')
const cat = ref('all')
const activeTab = ref('catalog')
const pantry = usePantryStore()
pantry.load()

const all = Object.values(PRODUCTS)

const filteredProducts = computed(() => {
  return all.filter(p => {
    const m1 = cat.value === 'all' || p.category === cat.value
    const m2 = !query.value || p.name.toLowerCase().includes(query.value.toLowerCase())
    return m1 && m2
  })
})

const myPantryItems = computed(() => {
  return pantry.items.map(item => {
    return {
      ...item,
      product: PRODUCTS[item.productId] || { name: item.productId, icon: '❓' }
    }
  }).reverse() // Show newest first
})

function add(id) {
  pantry.addItem(id, 1)
  ElMessage.success('已加入库存')
}

function remove(index) {
  // index is based on reversed array, so we need to find actual index
  // actually let's just reverse back or handle it. 
  // Easier: removeItem expects index in state.items. 
  // If we reverse for display, the index passed here corresponds to the reversed array.
  // Real index = length - 1 - index
  const realIndex = pantry.items.length - 1 - index
  pantry.removeItem(realIndex)
  ElMessage.success('Removed from pantry')
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

.center-main::-webkit-scrollbar {
  width: 8px;
}

.center-main::-webkit-scrollbar-track {
  background: #f1f1f1;
  border-radius: 4px;
}

.center-main::-webkit-scrollbar-thumb {
  background: #c1c1c1;
  border-radius: 4px;
}

.center-main::-webkit-scrollbar-thumb:hover {
  background: #a8a8a8;
}

.left-aside {
  border-right: 1px solid #f3f4f6;
  border-left: none;
}

.right-aside {
  border-left: 1px solid #f3f4f6;
  border-right: none;
}

/* Page specific styles */
.page-content { padding: 12px; }
.header-row {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 12px;
}
.title { font-size: 18px; font-weight: 600; margin: 0; }

.my-pantry-list .item-card {
  margin-bottom: 12px;
}
.my-pantry-list .row {
  display: flex;
  align-items: center;
  gap: 12px;
}
.my-pantry-list .thumb {
  width: 48px;
  height: 48px;
  border-radius: 10px;
  background: #e8f3ff;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 24px;
}
.my-pantry-list .info {
  flex: 1;
}
.my-pantry-list .name {
  font-weight: 600;
  margin-bottom: 4px;
}
.my-pantry-list .meta {
  font-size: 12px;
  color: #666;
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
  .center-main {
    padding: 10px;
  }
}
</style>
