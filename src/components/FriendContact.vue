<template>
  <li>
    <h2>{{ name }}{{ isFavorite ? "(Favorite)" : "" }}</h2>
    <button @click="toggleDetails">Show Details</button>
    <button @click="toggleFavorite">Toggle Favorite</button>
    <ul v-if="detailsAreVisible">
      <li><strong>Phone:</strong>{{ phoneNumber }}</li>
      <li><strong>Email:</strong>{{ emailAddress }}</li>
    </ul>
    <button @click="$emit('delete-friend',id)">Delete</button>
  </li>
</template>
    
<script>
export default {
  props: ["id", "name", "phoneNumber", "emailAddress", "isFavorite"],
  //   props: {
  //     id: {
  //       type: String,
  //       requried: true,
  //     },
  //     name: {
  //       type: String,
  //       requried: true,
  //     },
  //     phoneNumber: {
  //       type: String,
  //       requried: true,
  //     },
  //     emailAddress: {
  //       type: String,
  //       requried: true,
  //     },
  //     isFavorite: {
  //       type: Boolean,
  //       requried: true,
  //       default: false,
  //     },
  //   },
  emits: ["toggle-favorite","delete-friend"],
  //   emits: {
  //     "toggle-favorite": (id) => {
  //         if(id){
  //             return true
  //         }else{
  //             console.warn('Id is missing')
  //             return false
  //         }
  //     },
  //   },
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
      this.$emit("toggle-favorite", this.id);
    },
  },
};
</script>