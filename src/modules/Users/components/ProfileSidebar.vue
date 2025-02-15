<template>
    <div :class="['sidebar', { collapsed: isCollapsed }]" class="p-3 text-white bg-white">
        <a href="/" class="d-flex align-items-center mb-3 mb-md-0 me-md-auto gap-2 text-white text-decoration-none">

        </a>
        <div style="display:flex; justify-content:end; ">

        </div>
        <ul class="nav nav-pills flex-column mb-auto">
            <li class="nav-item" v-for="link in links" :key="link.name">
                <router-link :to="link.path" class="nav-link d-flex align-items-center text-dark gap-2"
                    active-class="active">
                    <span v-html="link.icon" style="color:rgb(49, 49, 49);"></span>
                    <span v-if="!isCollapsed" style=" color: rgb(49, 49, 49);">{{ link.name }}</span>
                </router-link>
            </li>
        </ul>
        <hr>

    </div>
</template>
<script setup>
import { ref } from 'vue';
const isCollapsed = ref(false);

const links = [
    { name: 'User Profile', path: '/user-info', icon: '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-house-door-fill" viewBox="0 0 16 16"><path d="M6.5 14.5v-3.505c0-.245.25-.495.5-.495h2c.25 0 .5.25.5.5v3.5a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.146-.354L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.354 1.146a.5.5 0 0 0-.708 0l-6 6A.5.5 0 0 0 1.5 7.5v7a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5"/></svg>' },
    { name: 'Business Information', path: '/business', icon: '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-speedometer2" viewBox="0 0 16 16"><path d="M8 4a.5.5 0 0 1 .5.5v3.571l2.5 1.428a.5.5 0 1 1-.5.866L7.5 9V4.5A.5.5 0 0 1 8 4z"/><path fill-rule="evenodd" d="M6.832 3.555a4 4 0 1 1 6.936 4.89c.3.115.544.3.717.534a5 5 0 1 0-8.987 0 1.713 1.713 0 0 1 .717-.534 4.01 4.01 0 0 1 .617-.89z"/></svg>' },
    { name: 'Accounts', path: '/accounts', icon: '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-person-circle" viewBox="0 0 16 16"><path d="M11 8a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"/><path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zM8 1a7 7 0 1 0 0 14A7 7 0 0 0 8 1z"/></svg>' },
];
</script>

<style scoped>
.sidebar {
    width: 280px;
    height: 150px;
    margin: 10px;
    border-radius: 10px;
    transition: width 0.3s;
}
</style>