<template>
    <button @click="addOne">Add 2</button>
</template>

<script>
export default {
    methods:{
        addOne(){
            // commit takes an arg of mutation name
            this.$store.commit('increment')
        }
    }
}
</script>