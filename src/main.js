import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';

import App from './App.vue';
import TeamsList from './components/teams/TeamsList.vue'
import UsersList from './components/users/UsersList.vue'
import TeamMembers from './components/teams/TeamMembers.vue'
import NotFound from './components/nav/NotFound'
import TeamsFooter from './components/teams/TeamsFooter.vue'
import UsersFooter from './components/users/UsersFooter.vue'

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
            name: 'teams',
            path: '/teams',
            components: { default: TeamsList, footer: TeamsFooter },
            children: [
                {
                    name: 'team-members',
                    path: ':teamId',
                    component: TeamMembers,
                    props: true
                },
            ]
        },
        {
            path: '/users',
            components: { default: UsersList, footer: UsersFooter },
        },

        {
            path: '/:notFound(.*)',
            component: NotFound
        }
    ],
    // if we wanna use router link exact active class
    linkActiveClass: 'active',
    // accept 3 arguments on scrollbehavior i.e to, from ,savedPosition
    scrollBehavior(to, from, savedPosition) {
        console.log(to, from, savedPosition)
        if (savedPosition) {
            return savedPosition
        } else {
            return { top: 0, left: 0 }
        }
    }
});

router.beforeEach((to, from, next) => {
    console.log('Global before-each')
    console.log(to, from);
    // if (to.name === 'team-members') {
    //     next()
    // } else {
    //     next({ name: 'team-members', params: { teamId: 't2' } })
    // }
    next()
})

const app = createApp(App)

app.use(router)

app.mount('#app');
