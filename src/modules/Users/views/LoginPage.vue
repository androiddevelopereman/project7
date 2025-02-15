<script setup>
import Tabs from "../components/Tabs.vue";
import Sidebar from "../components/Sidebar.vue";
import LoginForm from "../components/LoginForm.vue";
import ImageSider from "../components/ImageSider.vue";
</script>
<template>
    <div class="content">
        <div class="component1">
            <LoginForm />
        </div>

        <div class="component2">
            <ImageSider />
        </div>
    </div>
</template>
<style scoped>
.content {
    display: flex;
    justify-content: space-between;
    border-bottom: 2px solid gray;
    ;
    border-top: 2px solid #7ca6cf;
    ;
    margin: 0;
    padding: 0;
    width: 100%;
    height: 100%;
    background-color: white
}

.component1 {
    width: 30%;
    text-align: center;
    border: none;
}

.component2 {
    width: 70%;
    height: 100%;
    padding: 5px;
    border: none;
    text-align: center;



}
</style>