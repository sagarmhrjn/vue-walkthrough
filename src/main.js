import { createApp } from 'vue';
import { createStore } from 'vuex'

import App from './App.vue';

const counterModule = {
    namespaced: true,
    state() {
        return {
            counter: 0,
        }
    },
    mutations: {
        increment(state) {
            state.counter = state.counter + 2
        },
        increase(state, payload) {
            state.counter = state.counter + payload.value
        },
    },
    actions: {
        increment(context) {
            setTimeout(() => {
                context.commit('increment')
            }, 2000)
        },
        increase(context, payload) {
            context.commit('increase', payload)
        },
    },
    getters: {
        finalCounter(state) {
            return state.counter * 2
        },
        normalizedCounter(_, getters) {
            const finalCounter = getters.finalCounter
            if (finalCounter < 0) {
                return 0
            }
            if (finalCounter > 100) {
                return 100
            }
            return finalCounter
        },
    }
}
// start by creating store which return state
const store = createStore({
    modules: {
        numbers: counterModule
    },
    state() {
        return {
            isLoggedIn: false
        }
    },
    // clearly defined methods which have the logic to update the state
    // same as reducers
    // mutations only accepts synchronous code
    mutations: {

        setAuth(state, payload) {
            state.isLoggedIn = payload.auth
        }
    },
    // actions are allowed to make asynchronous 
    actions: {

        login(context) {
            context.commit('setAuth', { auth: true })
        },
        logout(context) {
            context.commit('setAuth', { auth: false })
        }
    },
    // think of them as computed properties for stores.
    // same as selectors
    getters: {

        userIsAuthenticated(state) {
            return state.isLoggedIn
        }
    }
})


const app = createApp(App);

app.use(store)

app.mount('#app');
