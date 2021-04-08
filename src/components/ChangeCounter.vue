<template>
  <button @click="inc">Add 2</button>
  <button @click="increase({ value: 10 })">Add 10</button>
</template>

<script>
import { mapActions } from "vuex";

export default {
  methods: {
    // addOne(){
    // commit takes an arg of mutation name
    // this.$store.dispatch('increment')
    // }
    // map Actions into component.
    // ...mapActions(["increment", "increase"]),
    // if you want to use actions as other key alias
    ...mapActions("numbers", {
      inc: "increment",
      increase: "increase",
    }),
  },
};
</script>