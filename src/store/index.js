import { createStore } from 'vuex'

import rootMutations from './mutations'
import rootActions from './actions'
import rootGetters from './getters'

import counterModule from './modules/counter'

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
    mutations: rootMutations,
    // actions are allowed to make asynchronous 
    actions: rootActions,
    // think of them as computed properties for stores.
    // same as selectors
    getters: rootGetters
})

export default store