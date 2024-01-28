import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'

import { createPinia } from 'pinia'
const pinia = createPinia()

//const Auth = { template: '<div>Auth</div>' }
import Auth from './components/Auth.vue'
import Documents from './components/Documents.vue'

import { createRouter, createWebHistory } from 'vue-router'
const routes = [
    { path: '/auth', component: Auth },
    { path: '/documents', component: Documents },
]
const router = createRouter({
    history: createWebHistory(),
    routes
})

import axios from 'axios';
if (localStorage.getItem('accessToken')) {
    axios.interceptors.request.use(
    (config) => {
        config.headers['Authorization'] = `Bearer ${localStorage.getItem('accessToken')}`;
        return config;
    },
    (error) => {
        return Promise.reject(error);
    });
}

const app = createApp(App)
app.use(pinia)
app.use(router)
app.mount('#app')
