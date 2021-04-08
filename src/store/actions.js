export default {
    login(context) {
        context.commit('setAuth', { auth: true })
    },
    logout(context) {
        context.commit('setAuth', { auth: false })
    }
}