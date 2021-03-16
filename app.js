const app = Vue.createApp({

    data() {
        return {
            counter: 10,
            name: '',
            confirmedName:''
        };
    },
    methods: {
        confirmInput(){
            this.confirmedName = this.name
        },
        submitForm(event){
            alert('submitted')
        },
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