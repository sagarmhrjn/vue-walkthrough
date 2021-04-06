import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';

import App from './App.vue';
import TeamsListComponent from './components/teams/TeamsList.vue'
import UsersListComponent from './components/users/UsersList.vue'
import TeamMembersComponent from './components/teams/TeamMembers.vue'
import NotFound from './components/nav/NotFound'

const router = createRouter({
    // by calling createWebHistory , it tells that just use the browser built-in mechanism
    history: createWebHistory(),
    // routes array is the heart of the router; which component should be loaded on which URL
    routes: [
        // you can use alias too
        {
            path: '/',
            redirect: '/teams',
        },
        // ourdomain.com/teams =>TeamsList
        {
            name:'teams',
            path: '/teams',
            component: TeamsListComponent,
            children: [
                {
                    name:'team-members',
                    path: ':teamId',
                    component: TeamMembersComponent,
                    props: true
                },
            ]
        },
        {
            path: '/users',
            component: UsersListComponent
        },

        {
            path: '/:notFound(.*)',
            component: NotFound
        }
    ],
    // if we wanna use router link exact active class
    linkActiveClass: 'active'
})
const app = createApp(App)

app.use(router)

app.mount('#app');
