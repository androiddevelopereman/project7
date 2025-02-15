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
                        <form class="form">
                            <div class="form-group">
                                <label for="company">Company</label>
                                <input id="company" type="text" placeholder="pits-track" />
                            </div>

                            <div class="form-group">
                                <label for="address">Address</label>
                                <input id="address" type="text" placeholder="nablus" />
                            </div>
                            <div class="form-group">
                                <label for="email">Email</label>
                                <input id="email" type="email" placeholder="roaa@pits-track.com" />
                            </div>

                            <div class="form-group">
                                <label for="mobile">Mobile</label>
                                <div class="mobile-input">
                                    <select id="mobile-code">
                                        <option value="+970">+970</option>
                                    </select>
                                    <input id="mobile" type="text" placeholder="598169712" />
                                </div>
                            </div>

                            <div class="form-group">
                                <label for="phone">Phone #</label>
                                <input id="phone" type="text" placeholder="092311222" />
                            </div>

                            <div class="form-group">
                                <label for="area">Area</label>
                                <input id="area" type="text" />
                            </div>
                            <div class="form-group">
                                <label for="timezone">Time Zone</label>
                                <input id="timezone" type="text" placeholder="+02:00" />
                            </div>

                            <div class="form-group">
                                <label for="currency">Currency</label>
                                <select id="currency">
                                    <option value="">Select Currency</option>
                                </select>
                            </div>

                        </form>

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
    height: 70vh;
}

.form {
    max-width: 500px;
    padding: 5px;
}

.form-group {
    margin-bottom: 2px;
}

label {
    display: block;

    font-weight: bold;
}

input,
select {
    width: 100%;
    padding: 2px;
    box-sizing: border-box;
    border: 1px solid #ccc;
    border-radius: 4px;
}

.mobile-input {
    display: flex;
    gap: 10px;
}
</style>