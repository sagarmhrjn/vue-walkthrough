<template>
  <li>
    <h2>{{ name }}{{ isFavorite ? "(Favorite)" : "" }}</h2>
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
      id: {
      type: String,
      requried: true,
    },
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
      type: Boolean,
      requried: true,
      default: false,
    },
  },
  data() {
    return {
      detailsAreVisible: false,
    //   friendIsFavorite: this.isFavorite,
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
    //   this.friendIsFavorite = !this.friendIsFavorite;
    this.$emit('toggle-favorite', this.id)
    },
  },
};
</script>