<template>
  <li>
    <h2>{{ name }}{{ friendIsFavorite === "1" ? "(Favorite)" : "" }}</h2>
    <button @click="toggleDetails">Show Details</button>
    <button @click="toggleFavorite">Toggle Favorite</button>
    <ul v-if="detailsAreVisible">
      <li><strong>Phone:</strong>{{ phoneNumber }}</li>
      <li><strong>Email:</strong>{{ emailAddress }}</li>
    </ul>
  </li>
</template>
    
<script>
export default {
//   props: ["name", "phoneNumber", "emailAddress", "isFavorite"],
  props: {
    name: {
      type: String,
      requried: true,
    },
    phoneNumber: {
      type: String,
      requried: true,
    },
    emailAddress: {
      type: String,
      requried: true,
    },
    isFavorite: {
      type: String,
      requried: true,
      default: "0",
      validator: (value) => {
        return value === "1" || value === "0";
      },
    },
  },
  data() {
    return {
      detailsAreVisible: false,
      friendIsFavorite: this.isFavorite,
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
    /** vue uses a concept unidirectional flow which means
     data passed from app to friend-contact should be only change to app.
     */
    toggleFavorite() {
      if (this.friendIsFavorite === "1") {
        this.friendIsFavorite = "0";
      } else {
        this.friendIsFavorite = "1";
      }
    },
  },
};
</script>