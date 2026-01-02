<template>
  <div class="sidebar">
    <div class="logo-area">
      <!-- Placeholder for logo -->
      <div class="logo-placeholder">
        <span class="logo-icon">🥗</span>
        <span class="logo-text">Light Table</span>
      </div>
    </div>

    <el-menu
      :default-active="route.path"
      class="custom-menu"
      :router="true"
    >
      <el-menu-item index="/home">
        <el-icon><DataLine /></el-icon>
        <span>My data</span>
      </el-menu-item>
      <el-menu-item index="/community">
        <el-icon><House /></el-icon>
        <span>Community</span>
      </el-menu-item>
      <el-menu-item index="/news">
        <el-icon><ChatDotRound /></el-icon>
        <span>News</span>
      </el-menu-item>
      <el-menu-item index="/search">
        <el-icon><Search /></el-icon>
        <span>Search</span>
      </el-menu-item>
      <el-menu-item index="/pantry">
        <el-icon><Refrigerator /></el-icon>
        <span>Food Library</span>
      </el-menu-item>
      <el-menu-item index="/comment">
        <el-icon><Star /></el-icon>
        <span>Comment</span>
      </el-menu-item>
      <el-menu-item index="/family">
        <el-icon><User /></el-icon>
        <span>My family</span>
      </el-menu-item>
    </el-menu>

    <div class="professional-card">
      <div class="pro-icon">
        <el-icon><Select /></el-icon>
      </div>
      <el-button class="pro-btn">Professional</el-button>
    </div>
  </div>
</template>

<script setup>
import { useRoute } from 'vue-router';
import {
  DataLine,
  House,
  ChatDotRound,
  Search,
  Refrigerator,
  Star,
  User,
  Select
} from '@element-plus/icons-vue'
const route = useRoute()
</script>

<style scoped>
.sidebar {
  height: 100%;
  background: #fff;
  padding: 20px;
  display: flex;
  flex-direction: column;
}

.logo-area {
  margin-bottom: 40px;
  padding-left: 10px;
}

.logo-placeholder {
  display: flex;
  align-items: center;
  gap: 10px;
}

.logo-icon {
  font-size: 24px;
}

.logo-text {
  font-size: 20px;
  font-weight: bold;
  color: #fca5a5; /* Light red/orangeish */
  background: linear-gradient(to right, #d97706, #fcd34d);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.custom-menu {
  border-right: none;
  /* flex-grow: 1; */
}

.custom-menu :deep(.el-menu-item) {
  height: 50px;
  line-height: 50px;
  border-radius: 8px;
  margin-bottom: 10px;
  color: #555;
  font-size: 16px;
}

.custom-menu :deep(.el-menu-item.is-active) {
  background-color: #d9f99d; /* Lime green */
  color: #3f6212;
  font-weight: 600;
}

.custom-menu :deep(.el-menu-item:hover) {
  background-color: #f3f4f6;
}

.professional-card {
  background: #f9fafb;
  border-radius: 16px;
  padding: 20px;
  text-align: center;
  margin-top: auto;
}

.pro-icon {
  width: 40px;
  height: 40px;
  background: #fff;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 10px;
  color: #84cc16;
  box-shadow: 0 2px 4px rgba(0,0,0,0.05);
}

.pro-btn {
  width: 100%;
  background: #d9f99d;
  border: none;
  color: #3f6212;
  font-weight: 600;
  height: 40px;
  border-radius: 8px;
}
</style>
