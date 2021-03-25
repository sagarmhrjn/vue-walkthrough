<template>
  <li>
    <h2>{{ friend.name }}</h2>
    <button @click="toggleDetails">Show Details</button>
    <ul v-if="detailsAreVisible">
      <li><strong>Phone:</strong>{{ friend.phone }}</li>
      <li><strong>Email:</strong>{{ friend.email }}</li>
    </ul>
  </li>
</template>
    
<script>
export default {
  data() {
    return {
      detailsAreVisible: false,
      friend: {
        id: "sagar",
        name: "Sagar Maharjan",
        phone: "9803690068",
        email: "sagarmaharjan31@gmail.com",
      },
    };
  },
  methods: {
    toggleDetails() {
      this.detailsAreVisible = !this.detailsAreVisible;
    },
  },
};
</script>