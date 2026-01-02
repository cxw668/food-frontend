import { defineStore } from 'pinia'
import { PRODUCTS } from '@/mock/products.js'

const LS_KEY = 'foodsys_pantry'

export const usePantryStore = defineStore('pantry', {
  state: () => ({
    items: [] // { productId, quantity, purchaseDate }
  }),
  getters: {
    categorizedItems(state) {
      const groups = {}
      state.items.forEach(item => {
        const product = PRODUCTS[item.productId]
        if (!product) return
        const cat = product.category
        if (!groups[cat]) groups[cat] = []
        groups[cat].push({ ...item, product })
      })
      return groups
    }
  },
  actions: {
    load() {
      const raw = localStorage.getItem(LS_KEY)
      if (raw) {
        try {
          this.items = JSON.parse(raw)
        } catch {}
      }
    },
    save() {
      localStorage.setItem(LS_KEY, JSON.stringify(this.items))
    },
    addFromReceipt(receiptItems) {
      receiptItems.forEach(ri => {
        if (PRODUCTS[ri.productName]) {
          this.items.push({
            productId: ri.productName,
            quantity: ri.quantity,
            purchaseDate: new Date().toISOString().split('T')[0]
          })
        }
      })
      this.save()
    },
    addItem(productId, quantity = 1) {
      if (!PRODUCTS[productId]) return
      this.items.push({
        productId,
        quantity,
        purchaseDate: new Date().toISOString().split('T')[0]
      })
      this.save()
    },
    removeItem(index) {
      this.items.splice(index, 1)
      this.save()
    }
  }
})

