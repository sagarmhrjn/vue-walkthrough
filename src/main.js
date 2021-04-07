import { createApp } from 'vue';
import { createStore } from 'vuex'

import App from './App.vue';

// start by creating store which return state
const store = createStore({
    state() {
        return {
            counter: 0
        }
    },
    // clearly defined methods which have the logic to update the state
    mutations: {
        increment(state) {
            state.counter = state.counter + 2
        },
        increase(state, payload) {
            state.counter = state.counter + payload.value
        }
    }
})


const app = createApp(App);

app.use(store)

app.mount('#app');
