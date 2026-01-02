import { defineStore } from 'pinia'
import { HEALTH_LOGS } from '@/mock/healthLogs.js'

const LS_KEY = 'foodsys_health'

export const useHealthStore = defineStore('health', {
  state: () => ({
    logs: []
  }),
  getters: {
    stats(state) {
      if (!state.logs.length) return { avg: 0, max: 0, count: 0 }
      const sum = state.logs.reduce((s, l) => s + l.value, 0)
      const max = Math.max(...state.logs.map(l => l.value))
      return { avg: +(sum / state.logs.length).toFixed(2), max, count: state.logs.length }
    }
  },
  actions: {
    load() {
      const raw = localStorage.getItem(LS_KEY)
      if (raw) {
        try {
          this.logs = JSON.parse(raw)
          return
        } catch {}
      }
      this.logs = HEALTH_LOGS
    },
    save() {
      localStorage.setItem(LS_KEY, JSON.stringify(this.logs))
    },
    addLog(log) {
      this.logs.push(log)
      this.save()
    },
    setLogs(list) {
      this.logs = list
      this.save()
    }
  }
})

