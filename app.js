const app = Vue.createApp({

    data() {
        return {
            counter: 10,
            name: '',
            confirmedName: ''
        };
    },
    // we use computed property like variable not a function
    computed: {
        fullname() {
            console.log('Running again...')
            if (this.name === '') {
                return ''
            }
            return this.name + ' ' + 'Maharjan';
        }
    },
    methods: {
        outputFullName() {

        },
        confirmInput() {
            this.confirmedName = this.name
        },
        submitForm(event) {
            alert('submitted')
        },
        setName(event) {
            this.name = event.target.value;
        },
        add(num) {
            this.counter = this.counter + 5;
        },
        reduce(num) {
            this.counter = this.counter - 5;
        },
        resetInput() {
            this.name = '';
        }
    }
});

app.mount('#events');