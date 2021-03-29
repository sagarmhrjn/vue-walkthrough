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
    <course-goals #default="slotProps">
      <h2>{{ slotProps.item }}</h2>
      <p>{{ slotProps['another-prop'] }}</p>
    </course-goals>
  </div>
</template>

<script>
import TheHeader from "./components/TheHeader";
import BadgeList from "./components/BadgeList";
import UserInfo from "./components/UserInfo";
import CourseGoals from "./components/CourseGoals"

export default {
  // local components
  components: {
    // "the-header": TheHeader,
    TheHeader,
    BadgeList,
    UserInfo,
    CourseGoals
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