const app = Vue.createApp({
    data() {
        return {
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

    }


});

/** this tells vue that we want to create a new component
 *  A vue component is just a another vue app; Components are like mini app you could say.
 *  they can have method, data copmuted props, template
 *  it takes first arg as a identifier like 'friend-contact'
 */
app.component('friend-contact', {
    template: `
        <h2>{{friend.name}}</h2>
        <button @click="toggleDetails(friend.id)">
            {{detailsAreVisible ? 'Hide' : 'Show'}} Details</button>
        <ul v-if="detailsAreVisible">
            <li>
                <strong>Phone:</strong> {{friend.phone}}
            </li>
            <li>
                <strong>Email:</strong> {{friend.email}}
            </li>
        </ul>
    `,
    data() {
        return {
            detailsAreVisible: false,
            friend: {
                id: 'raziv',
                name: 'Raziv Maharjan',
                phone: '01234 5678 991',
                email: 'raziv.maharjan'
            }
        }
    },
    methods: {
        toggleDetails() {
            this.detailsAreVisible = !this.detailsAreVisible
        }
    }
})
app.mount('#app');