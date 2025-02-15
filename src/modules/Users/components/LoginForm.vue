<template>
    <div class="login-container" :class="{ 'rtl': isRTL }">
        <div class="logo">
            <img src="../../../assets/logo.jpg" alt="Company Logo">
            <span class="fs-4" style="color:  #007bff;; font-size: 40px; font-weight: bold; text-transform: uppercase;"
                v-if="!isCollapsed">PITS</span>
            <br>
            <h2 class="welcome-text">{{ $t('Welcome') }}</h2>
            <br>
        </div>
        <form @submit.prevent="handleLogin" class="form">
            <div class="mb-3 input-group">
                <label for="username" class="form-label">{{ $t('Username') }}</label>
                <input type="text" class="form-control" id="username" :placeholder="$t('Enter your Username')"
                    v-model="username" required>
            </div>
            <br>
            <div class="mb-3 input-group">
                <label for="exampleInputPassword1" class="form-label">{{ $t('Password') }}</label>
                <input type="password" class="form-control" :type="showPassword ? 'text' : 'password'" id="password"
                    v-model="password" required>
            </div>
            <div class="mb-3 form-check">
                <a href="#" class="forgot-password">{{ $t('Forgot Password?') }}</a>
            </div>
            <br>

            <button type="submit">{{ $t('Login') }}</button>
            <p class="signup-note">
                {{ $t('If you dont have an account,') }}<a href="/signup">{{ $t('sign up') }}</a>
            </p>
        </form>


    </div>
</template>
<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import axios from 'axios';
const email = ref('');
const password = ref('');
const showPassword = ref(false);
const isRTL = ref(false);
const router = useRouter(); // استدعاء Vue Router

const togglePassword = () => {
    showPassword.value = !showPassword.value;
};

const handleLogin = async () => {
    try {
        // بيانات تسجيل الدخول
        const loginData = {
            email: email.value,
            password: password.value,
        };


        const response = await axios.post('http://192.168.100.22:8091/api/auth/login?username=eman-tst&password=123456@Eman&type=web', loginData);


        console.log('Login successful:', response.data);


        router.push('/Users');
    } catch (error) {

        console.error('Login failed:', error.response?.data || error.message);
        alert('Failed to login. Please check your credentials.');
    }
};
</script>
<style scoped>
.login-container {
    width: 100%;
    max-width: 400px;
    margin: auto;
    padding: 20px;
    border: none;
    /* border: 1px solid #ddd;
    border-radius: 10px; */
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
}

.logo {
    text-align: center;
}

.logo img {
    width: 30px;
    height: auto;
}

.input-group {
    margin-bottom: 15px;
    color: gray;

}

.input-group label {
    display: block;
    font-weight: bold;
    margin-bottom: 5px;


}


.input-group input {
    width: 90%;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;

}

.password-field {
    position: relative;
}

.password-field span {
    position: absolute;
    right: 10px;
    top: 50%;
    transform: translateY(-50%);
    cursor: pointer;
}

button {
    width: 100%;
    padding: 10px;
    background-color: #0056b3;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
}

button:hover {
    background-color: hsl(211, 97%, 23%);
}

.rtl {
    direction: rtl;
}

.forgot-password {
    display: block;
    text-align: right;
    font-size: 12px;
    color: #007bff;
    margin-top: 5px;
    text-decoration: none;
    font-weight: bold;
}

.forgot-password:hover {
    text-decoration: underline;
}

.welcome-text {
    font-size: 20px;
    margin-top: 5px;
    font-weight: bold;
}

.logo-st {
    width: 20px;
    height: auto;
}

.signup-note {
    margin-top: 10px;
    font-size: 14px;
    color: #555;
}

.signup-note a {
    color: #007bff;
    text-decoration: none;
    font-weight: bold;
}

.signup-note a:hover {
    text-decoration: underline;
}
</style>