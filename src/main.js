import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';

import App from './App.vue';

const router = createRouter({
    // by calling createWebHistory , it tells that just use the browser built-in mechanism
    history: createWebHistory(),
    // routes array is the heart of the router; which component should be loaded on which URL
    routes: []
})
const app = createApp(App)

app.mount('#app');
