<template>
<div class="centered">
  <div class="logo">
      <img src="https://www.halyklife.kz/themes/halyk/assets/images/svg/logo.svg" width="280" />
  </div>
  <div class="form-group">
      <input type="text" v-model="login" placeholder="Логин">
      <input type="password" v-model="password" placeholder="Пароль">
      <button @click="loginUser" class="btn">Вход в систему</button>
  </div>
</div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

//заглушка для axios так как api не авторизует
import axios from '../components/axiosmock';

import { useRouter } from 'vue-router';
const router = useRouter();

const login = ref('TESTVUE');
const password = ref('qwerty');

const loginUser = async () => {
  try {
    const response = await axios.post('https://products.halyklife.kz/api/v1/test/insis/identity/api/Account/login', {
      login: login.value,
      password: password.value,
      numAttempt: 0
    });

    const { accessToken, refreshToken } = response.data;

    localStorage.setItem('accessToken', accessToken);
    localStorage.setItem('refreshToken', refreshToken);

    router.push('/documents');
  } catch (error) {
    console.error('Ошибка авторизации:', error);
  }
};
</script>

<style>
  .centered {
    width: 100%;
    max-width: 560px;
    padding: 0 1rem;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  .container {
    max-width: 400px;
    padding: 20px;
    background-color: #fff;
    border-radius: 8px;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
    text-align: center;
  }
  .logo {
    position: relative;
    top: -4rem;
    text-align: center;
  }
  .form-group {
    margin-bottom: 20px;
    text-align: left;
  }
  .form-group label {
    display: block;
    margin-bottom: 8px;
    color: #333;
  }
  .form-group input {
    width: calc(100% - 2px);
    padding: 10px;
    border: none;
    border-bottom: 1px solid #ccc;
    outline: none;
    transition: border-color 0.3s;
    margin-bottom: 20px;
    color: gray;
  }

  ::placeholder {
    color: gray;
  }

  .form-group input:focus {
    border-bottom-color: #66bb6a; /* Green color */
  }
  .btn {
    display: inline-block;
    padding: 17px 20px;
    margin-top: 30px;
    background-color: #00A075; /* Green color */
    color: #fff;
    border: none;
    border-radius: 0px;
    cursor: pointer;
    transition: background-color 0.3s;
    width: 100%;
  }
  .btn:hover {
    background-color: #0bb98b; /* Darker green color on hover */
  }
</style>