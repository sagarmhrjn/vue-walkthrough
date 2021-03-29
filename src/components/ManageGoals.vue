<template>
<!-- in vue 2 ; you were required to have one root element per template 
 but in vue 3 you can have many top level element;  so if you dont need wrapping element for semantic or stylig reason
 there is no reason to keep aroung; this is called fragments-->
    <h2>Manage Goals</h2>
    <input type="text" ref="goal" />
    <button @click="setGoal">Set Goal</button>
    <teleport to="body">
    <error-alert v-if="inputIsInvalid">
      <h2>Input is invalid!</h2>
      <p>Please, enter a few characters</p>
      <button @click="confirmError">Okay</button>
    </error-alert>
    </teleport>
</template>

<script>
import ErrorAlert from "./ErrorAlert";

export default {
  components: {
    ErrorAlert,
  },
  data() {
    return {
      inputIsInvalid: false,
    };
  },
  methods: {
    setGoal() {
      const enteredGoal = this.$refs.goal.value;
      if (enteredGoal === "") {
        this.inputIsInvalid = true;
      }
    },
    confirmError(){
        this.inputIsInvalid = false
    }
  },
};
</script>