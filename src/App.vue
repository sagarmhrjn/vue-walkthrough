<template>
  <section>
    <h2>My Friends</h2>
    <ul>
      <friend-contact></friend-contact>
    </ul>
  </section>
</template>

<script>
import FriendContact from "./components/FriendContact.vue";
export default {
  components: { FriendContact },
  data() {
    return {
      friends: [
        {
          id: "sagar",
          name: "Sagar Maharjan",
          phone: "9803690068",
          email: "sagarmaharjan31@gmail.com",
        },
      ],
    };
  },
  methods: {},
  computed: {},
};
</script>