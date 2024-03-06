<template>
  <div>
    <h3>Update User</h3>
    <label for="name">Name:</label>
    <input type="text" id="name" v-model="user.name" />
    <label for="age">Age:</label>
    <input type="number" id="age" v-model="user.age" />
    <button @click="$emit('update-user', user)">Update</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      user: {
        name: "",
        age: 0,
      },
    };
  },
  methods: {
    updateUser() {
      this.$emit("update-user", this.user);
    },
  },
};
</script>

<style scoped>
.user-data input {
  margin-bottom: 0.5rem;
  width: 100%;
  padding: 0.5rem;
  border: 1px solid #ccc;
}
</style>
