// Vue -> global object
const app = Vue.createApp({
    // configuration of the app; specific property names
    data() {
        // always return object
        return {
            // prop name is upto you; we can pass any data types->array, object, whatever you like
            courseGoal: 'Finish the course and learn vue.',
            vueLink: 'https://vuejs.org'
        }
    },
    // methods will be object full of function
    methods: {
        outputGoal() {
            const randomNumber = Math.random();
            if (randomNumber < 0.5) {
                return 'Learn Vue!';
            } else {
                return 'Master Vue!';
            }
        }
    }
});

// dom which we wanna control
app.mount('#user-goal');