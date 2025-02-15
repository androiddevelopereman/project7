<template>

  <div class="app-container">

    <Sidebar />

    <div class="content-bar">
      <NavBar />
      <hr>

      <ProfileSidebar />

    </div>

  </div>
</template>
<script setup>

import Sidebar from "../components/Sidebar.vue";
import ProfileSidebar from "../components/ProfileSidebar.vue";
import NavBar from "../components/NavBar.vue";
</script>

<style scoped>
.app-container {
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100%;
  background-color: #F0F5FA;
  display: flex;

}

.content-bar {
  background-color: #F0F5FA;
  width: 100% !important;
}
</style>
