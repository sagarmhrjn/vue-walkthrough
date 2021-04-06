import { createRouter, createWebHistory } from 'vue-router';

import TeamsList from './pages/TeamsList.vue'
import UsersList from './pages/UsersList.vue'
import TeamMembers from './components/teams/TeamMembers.vue'
import NotFound from './pages/NotFound'
import TeamsFooter from './pages/TeamsFooter.vue'
import UsersFooter from './pages/UsersFooter.vue'

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
            meta: { needsAuth: true },
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
            components: {
                default: UsersList,
                footer: UsersFooter
            },
            beforeEnter(to, from, next) {
                console.log('users beforeEnter')
                console.log(to, from)
                next()
            }
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

// this is a global beforeEach guard; runs on every navigation action; no matter which route is being is used. 
router.beforeEach((to, from, next) => {
    console.log('Global before-each')
    console.log(to, from);
    if (to.meta.needsAuth) {
        console.log('Need auth!')
        next()
    } else {
        next()
    }
    // if (to.name === 'team-members') {
    //     next()
    // } else {
    //     next({ name: 'team-members', params: { teamId: 't2' } })
    // }
    // next()
})

// will only run once after navigation has been confimed.
router.afterEach((to, from) => {
    // this guard could be useful for sending analytics data
    console.log('Global afterEach')
    console.log(to, from)
})

export default router