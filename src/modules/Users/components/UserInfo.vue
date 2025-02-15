<template>
  <div style="width: 100%; margin: 0 auto; height: 100%">
    <div class="page">
      <Sidebar />
      <div class="content-bar">
        <NavBar />
        <hr />
        <div style="display: flex; justify-content: space-between">
          <div class="sidebar-profile" style="width: 10%">
            <ProfileSidebar />
          </div>
          <div class="container all-content">
            <div class="form-container">
              <div class="form-group">
                <label>{{ $t("Full Name*") }}</label>
                <input type="text" required />
              </div>
              <br />
              <div class="form-group">
                <label>{{ $t("Language") }}</label>
                <select>
                  <option>{{ $t("English") }}</option>
                  <option>{{ $t("Arabice") }}</option>
                </select>
              </div>
              <br />
              <div class="form-group">
                <label>{{ $t("Virtual Map*") }}</label>
                <select>
                  <option>Open Street</option>
                  <option>Google Maps</option>
                </select>
              </div>
              <br />
              <div class="form-group">
                <label>{{ $t("Home Screen*") }}</label>
                <select>
                  <option>Dashboard</option>
                  <option>Reports</option>
                </select>
              </div>
              <br />
              <div class="form-group">
                <label>{{ $t("Password") }}</label>
                <button class="password-btn">
                  {{ $t("Change Password") }}
                </button>
              </div>
            </div>
            <div class="image-container">
              <h3>{{ $t("Profile Image") }}</h3>

              <button class="image-btn">{{ $t("Change") }}</button>
              <button class="delete-btn">{{ $t("Delete") }}</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import NavBar from "../components/NavBar.vue";
import Sidebar from "../components/Sidebar.vue";
import ProfileSidebar from "./ProfileSidebar.vue";
</script>
<style scoped>
.page {
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100%;
  background-color: #f0f5fa;
  display: flex;
}

.content-bar {
  background-color: #f0f5fa;
  width: 100% !important;
}

.all-content {
  display: flex;
  justify-content: space-around;
  max-width: 700px;
  margin: 20px auto;
  background: #1c5c9c;
  padding: 20px;
  border-radius: 8px;
  background-color: white;
  height: 70vh;
}

.form-container {
  flex: 2;
  background: white;
  padding: 10px;
  padding-left: 60px;
  border: none;
}

.form-group label {
  display: block;
  font-size: 14px;
  font-weight: bold;
  margin-bottom: 5px;
  color: #555;
}

input,
select {
  width: 250px;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 5px;
}

.password-btn {
  background: #e0e0e0;
  border: none;
  padding: 6px 10px;
  border-radius: 5px;
  cursor: pointer;
}

.image-container {
  flex: 1;
  background: white;
  padding: 20px;
  margin-top: 200px;
  border: none;
  text-align: center;
}

.image-btn,
.delete-btn {
  display: inline-block;
  margin-top: 5px;
  padding: 6px 10px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

.image-btn {
  background: #e0e0e0;
}

.image-btn:hover {
  background: #d6d6d6;
}

.delete-btn {
  background: #ff4d4d;
  color: white;
}

.delete-btn:hover {
  background: #cc0000;
}
</style>
