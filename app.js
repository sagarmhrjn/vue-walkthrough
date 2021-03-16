const app = Vue.createApp({

    data() {
        return {
            counter: 0,
            name: ''
        };
    },
    methods: {
        setName(event, lastname) {
            this.name = event.target.value + ' ' + lastname;
        },
        add(num) {
            this.counter = this.counter + 5;
        },
        reduce(num) {
            this.counter = this.counter - 5;
        }
    }
});

app.mount('#events');