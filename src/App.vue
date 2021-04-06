<template>
  <the-navigation @set-page="setActivePage"></the-navigation>
  <main>
    <!-- <component :is="activePage"></component> -->
    <router-view></router-view>
  </main>
</template>

<script>
// import TeamsList from "./components/teams/TeamsList.vue";
// import UsersList from "./components/users/UsersList.vue";
import TheNavigation from "./components/nav/TheNavigation.vue";

export default {
  components: {
    TheNavigation,
    // TeamsList,
    // UsersList,
  },
  data() {
    return {
      activePage: "teams-list",
      teams: [
        { id: "t1", name: "Frontend Engineers", members: ["u1", "u2"] },
        { id: "t2", name: "Backend Engineers", members: ["u1", "u2", "u3"] },
        { id: "t3", name: "Client Consulting", members: ["u4", "u5"] },
      ],
      users: [
        { id: "u1", fullName: "Sagar Maharjan", role: "Engineer" },
        { id: "u2", fullName: "Bikash Thapa", role: "Engineer" },
        { id: "u3", fullName: "Ashish Mohammad", role: "Engineer" },
        { id: "u4", fullName: "Tanka Prasad Koirala", role: "Consultant" },
        { id: "u5", fullName: "Sameer Pokhrel", role: "Consultant" },
      ],
    };
  },
  provide() {
    return {
      teams: this.teams,
      users: this.users,
    };
  },
  methods: {
    setActivePage(page) {
      this.activePage = page;
    },
  },
};
</script>

<style>
* {
  box-sizing: border-box;
}

html {
  font-family: sans-serif;
}

body {
  margin: 0;
}
</style>