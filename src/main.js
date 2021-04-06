import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';

import App from './App.vue';
import TeamsListComponent from './components/teams/TeamsList.vue'
import UsersListComponent from './components/users/UsersList.vue'

const router = createRouter({
    // by calling createWebHistory , it tells that just use the browser built-in mechanism
    history: createWebHistory(),
    // routes array is the heart of the router; which component should be loaded on which URL
    routes: [
        // ourdomain.com/teams =>TeamsList
        {
            path: '/teams',
            component: TeamsListComponent
        },
        {
            path: '/users',
            component: UsersListComponent
        }
    ]
})
const app = createApp(App)

app.use(router)

app.mount('#app');
