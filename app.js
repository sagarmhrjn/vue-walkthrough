const app = Vue.createApp({

    data() {
        return {
            counter: 10,
            name: '',
            lastName: '',
            // fullname: '',
            confirmedName: ''
        };
    },
    // repeat another data or computed prop name in a watcher method as a method name.
    // that watcher method will be automatically be executed by vue.
    // if you wanna run some code which some maybe but not necessarily update some data propery
    watch: {
        counter(value) {
            if (value > 50) {
                const that = this;
                setTimeout(function () {
                    that.counter = 0;
                }, 2000)
            }
        }
        // name(value) {
        //     if (value === '') {
        //         this.fullname = '';
        //     } else {
        //         this.fullname = value + ' ' + this.lastName;
        //     }
        // },
        // lastName(value) {
        //     if (value === '') {
        //         this.fullname = '';
        //     } else {
        //         this.fullname = this.name + ' ' + value;
        //     }
        // }
    },
    // we use computed property like variable not a function
    // if you wanna calculate some value dynamically
    computed: {
        fullname() {
            console.log('Running again...')
            if (this.name === '' || this.lastName === '') {
                return ''
            }
            return this.name + ' ' + this.lastName;
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