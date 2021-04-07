<template>
    <button @click="addOne">Add 1</button>
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