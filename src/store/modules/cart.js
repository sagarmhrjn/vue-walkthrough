export default {
    namespaced: true,
    state() {
        return {
            items: [],
            total: 0,
            qty: 0
        }
    },
    // Reducers
    mutations: {
        addProductToCart(state, payload) {
            const productData = payload
            const productInCartIndex = state.items.findIndex(
                (cartItem) => cartItem.productId === productData.id
            );

            if (productInCartIndex >= 0) {
                state.items[productInCartIndex].qty++;
            } else {
                const newItem = {
                    productId: productData.id,
                    title: productData.title,
                    image: productData.image,
                    price: productData.price,
                    qty: 1,
                };
                state.items.push(newItem);
            }
            state.qty++;
            state.total += productData.price;
        },

        removeProductFromCart(state, payload) {
            const prodId = payload.productId
            const productInCartIndex = state.items.findIndex(
                (cartItem) => cartItem.productId === prodId
            );
            const prodData = state.items[productInCartIndex];
            state.items.splice(productInCartIndex, 1);
            state.qty -= prodData.qty;
            state.total -= prodData.price * prodData.qty;
        },
    },
    // Actions
    actions: {
        addToCart(context, payload) {
            const prodId = payload.id
            const products = context.rootGetters['prods/products']
            const product = products.find(prod => prod.id === prodId)
            context.commit('addProductToCart', product) // commit name should be mutation name
        },
        removeFromCart(context, payload) {
            context.commit('removeProductFromCart', payload)
        }
    },
    // Selectors like a computed properties
    getters: {
        products(state) {
            return state.items
        },
        totalSum(state) {
            return state.total
        },
        quantity(state) {
            return state.qty
        }
    }
}