<template>
  <div>
    <the-header></the-header>
    <!-- <TheHeader /> -->
    <badge-list></badge-list>
    <user-info
      :full-name="activeUser.name"
      :info-text="activeUser.description"
      :role="activeUser.role"
    ></user-info>
  </div>
</template>

<script>
import TheHeader from "./components/TheHeader";
import BadgeList from "./components/BadgeList";
import UserInfo from "./components/UserInfo";

export default {
  // local components
  components: {
    // "the-header": TheHeader,
    TheHeader,
    BadgeList,
    UserInfo,
  },
  data() {
    return {
      activeUser: {
        name: "Sagar Maharjan",
        description: "Site owner and admin",
        role: "admin",
      },
    };
  },
};
</script>

<style>
html {
  font-family: sans-serif;
}

body {
  margin: 0;
}
</style>