// Vue -> global object
const app = Vue.createApp({
    // configuration of the app; specific property names
    data() {
        // always return object
        return {
            // prop name is upto you; we can pass any data types->array, object, whatever you like
            courseGoal:'Finish the course and learn vue.'
        }
    }
});

// dom which we wanna control
app.mount('#user-goal');