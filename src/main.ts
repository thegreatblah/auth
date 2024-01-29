import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'

import { createPinia } from 'pinia'
const pinia = createPinia()

import Auth from './views/Auth.vue'
import Documents from './views/Documents.vue'

import { createRouter, createWebHistory } from 'vue-router'
const routes = [
    { path: '/auth', component: Auth },
    { path: '/documents', component: Documents }
]
const router = createRouter({
    history: createWebHistory(),
    routes
})

const app = createApp(App)
app.use(pinia)
app.use(router)
app.mount('#app')


import axios from 'axios';
if (localStorage.getItem('accessToken') && document.location.pathname == '/auth') {
    router.push('/documents')
} else if (localStorage.getItem('accessToken')) {
    axios.interceptors.request.use(
    (config) => {
        config.headers['Authorization'] = `Bearer ${localStorage.getItem('accessToken')}`;
        return config;
    },
    (error) => {
        return Promise.reject(error);
    });
} else {
    console.log('Redirect to /auth')
    router.push('/auth')
}
