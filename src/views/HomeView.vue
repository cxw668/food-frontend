<template>
  <div class="home-layout">
    <el-container class="main-container">
      <el-aside width="240px" class="left-aside">
        <HomeSidebar />
      </el-aside>
      
      <el-main class="center-main">
        <HomeMainContent />
      </el-main>
      
      <el-aside width="300px" class="right-aside">
        <HomeRightPanel />
      </el-aside>
    </el-container>
  </div>
</template>

<script setup>
import HomeSidebar from '../components/HomeSidebar.vue'
import HomeMainContent from '../components/HomeMainContent.vue'
import HomeRightPanel from '../components/HomeRightPanel.vue'
</script>

<style scoped>
.home-layout {
  height: 100%;
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
  overflow-y: hidden;
}

.left-aside {
  border-right: 1px solid #f3f4f6;
  border-left: none;
}

.right-aside {
  border-left: 1px solid #f3f4f6;
  border-right: none;
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
