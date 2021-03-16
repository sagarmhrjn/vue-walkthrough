// Vue -> global object
const app = Vue.createApp({
    // configuration of the app; specific property names
    // takes all data that u return and merge into global vue instance object.
    // your methods are also available there.

    data() {
        // always return object
        return {
            // prop name is upto you; we can pass any data types->array, object, whatever you like
            courseGoalA: 'Finish the course and learn vue.',
            courseGoalB: '<h2>Master and build amazing vue apps.</h2>',
            vueLink: 'https://vuejs.org'
        }
    },
    // methods will be object full of function
    methods: {
        outputGoal() {
            const randomNumber = Math.random();
            if (randomNumber < 0.5) {
                return this.courseGoalA;
            } else {
                return this.courseGoalB;
            }
        }
    }
});

// dom which we wanna control
app.mount('#user-goal');