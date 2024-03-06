<template>
  <section>
    <active-user :user="userData" />
    <user-data @update-user="updateUser" />
  </section>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      userData: {
        name: "John Doe",
        age: 30,
      },
    };
  },
  methods: {
    updateUser(newUser) {
      this.userData = newUser;
    },
  },
};
</script>

<style scoped>
/* Add your styling here */
</style>
