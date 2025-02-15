<template>

    <div style="width:100%; margin:0 auto; height: 100%;">
        <div class="page">
            <Sidebar />
            <div class="content-bar">
                <NavBar />
                <hr>
            </div>
        </div>
    </div>
</template>

<script setup>
import NavBar from '../components/NavBar.vue';
import Sidebar from '../components/Sidebar.vue';
</script>
<style scoped>
.page {
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