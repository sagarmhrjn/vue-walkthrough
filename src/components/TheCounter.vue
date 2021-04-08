<template>
  <h3>{{ finalCounter }}</h3>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  computed: {
    // counter() {
    // return this.$store.state.counter;
    // return this.$store.getters.finalCounter;
    // },
    // instead of defining computed prop use mapGetters func
    // mapGetters give you an object full of computed props
    ...mapGetters("numbers", ["finalCounter"]),
  },
};
</script>