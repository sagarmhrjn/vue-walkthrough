import { createApp } from 'vue';
import { createStore } from 'vuex'

import App from './App.vue';

// start by creating store which return state
const store = createStore({
    state() {
        return {
            counter: 0
        }
    }
})


const app = createApp(App);

app.use(store)

app.mount('#app');
