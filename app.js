const app = Vue.createApp({

    data() {
        return {
            counter: 0
        };
    },
    methods: {
        add(num) {
            this.counter = this.counter + 5;
        },
        reduce(num) {
            this.counter = this.counter - 5;
        }
    }
});

app.mount('#events');