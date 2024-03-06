<template>
  <div class="active-user">
    <h2>{{ user.name }}</h2>
    <h3>{{ user.age }} years old</h3>
  </div>
</template>

<script>
export default {
  props: {
    user: Object,
  },
};
</script>

<style scoped>
.active-user {
  border: 1px solid #ddd;
  padding: 1rem;
  margin-bottom: 1rem;
}
</style>
