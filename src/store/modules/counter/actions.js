export default {
    increment(context) {
        setTimeout(() => {
            context.commit('increment')
        }, 1000)
    },
    increase(context, payload) {
        context.commit('increase', payload)
    },
}