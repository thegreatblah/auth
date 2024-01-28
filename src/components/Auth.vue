<template>
<div>
    <img src="https://www.halyklife.kz/themes/halyk/assets/images/svg/logo.svg" />
</div>
<div>
    <input type="text" v-model="login" placeholder="Логин">
    <input type="password" v-model="password" placeholder="Пароль">
    <button @click="loginUser">Войти</button>
</div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import axios from 'axios';

import { useRouter } from 'vue-router';
const router = useRouter();

const login = ref('TESTVUE');
const password = ref('qwerty');

const loginUser = async () => {
  try {
    const response = await axios.post('//https://products.halyklife.kz/api/v1/test/insis/identity/api/Account/login', {
      login: login.value,
      password: password.value,
      numAttempt: 0
    });

    const { accessToken, refreshToken } = response.data;
    // Записать accessToken и refreshToken в LocalStorage или в Store (Vuex, Pinia)
    localStorage.setItem('accessToken', accessToken);
    localStorage.setItem('refreshToken', refreshToken);

    router.push('/documents');
  } catch (error) {
    console.error('Ошибка авторизации:', error);
  }
};
</script>