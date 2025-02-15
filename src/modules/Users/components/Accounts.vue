<template>

    <div style="width:100%; margin:0 auto; height: 100%;">
        <div class="page">
            <Sidebar />
            <div class="content-bar">
                <NavBar />
                <hr>
                <div style="display: flex; justify-content: space-between;">
                    <div>
                        <ProfileSidebar />
                    </div>
                    <div class="container all-content ">
                        <div>
                            <div class="card-header">
                                <div class="card-icon">R</div>
                                <div class="card-info">
                                    <h2>roaa_pits</h2>
                                    <p>pits-track</p>
                                </div>
                            </div>
                        </div>
                        <div>
                            <button class="details-btn">Details</button>
                        </div>

                    </div>



                </div>
            </div>

        </div>
    </div>
</template>

<script setup>
import NavBar from '../components/NavBar.vue';
import Sidebar from '../components/Sidebar.vue';
import ProfileSidebar from './ProfileSidebar.vue';
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

.all-content {
    display: flex;
    justify-content: space-between;
    max-width: 700px;
    margin: 20px auto;
    background: #1c5c9c;
    padding: 20px;
    border-radius: 8px;
    background-color: white;
    height: 15vh;
}

.card-header {
    display: flex;
    align-items: center;
    gap: 15px;
}

.card-icon {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background-color: gray;
    color: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 20px;
    font-weight: bold;
}

.card-info {
    flex: 1;
}

.card-info h2 {
    margin: 0;
    font-size: 18px;
}

.card-info p {
    margin: 0;
    color: #666;
    font-size: 14px;
}

.details-btn {
    align-self: flex-start;
    background-color: white;
    color: rgb(39, 39, 39);
    border-radius: 4px;
    border-color: gray;
    padding: 5px 10px;
    cursor: pointer;
    transition: background-color 0.3s;
}

.details-btn:hover {
    background-color: #0056b3;
}
</style>