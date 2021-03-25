const app = Vue.createApp({
    data() {
        return {
            detailsAreVisible:false,
            friends: [
                {
                    id: 'sagar',
                    name: 'Sagar Maharjan',
                    phone: '01234 5678 991',
                    email: 'sagar.maharjan'
                },
                {
                    id: 'raziv',
                    name: 'Raziv Maharjan',
                    phone: '01234 5678 991',
                    email: 'raziv.maharjan'
                }
            ]
        }
    },
    methods: {
        toggleDetails() {
            this.detailsAreVisible = !this.detailsAreVisible
        }
    }


});

app.mount('#app');