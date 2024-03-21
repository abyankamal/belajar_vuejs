<template>
  <h2>My Course Goal</h2>
  <!-- Task 1: Output your main course goal with help of the composition API -->
  <!-- Don't hardcode it into the template, instead hardcode it into the JS code -->
  <!-- <h3 v-if="showGoal">{{ courseGoal }}</h3> -->
  <h3 v-if="showGoal">{{ courseGoal }}</h3>
  <!-- Task 2: Toggle (show/ hide) the goal with help of the button  -->
  <button @click="toggleGoal">Toggle Goal</button>
  <!-- Task 3: Manage data in three ways -->
  <!-- => Separate refs -->
  <!-- => Ref Object -->
  <!-- => Reactive Object -->
  <!-- Task 4: Also solve the assignment with the Options API -->
</template>

<script>
// import { ref } from 'vue';
// import { reactive } from 'vue';
// const courseGoal = ref('Master the Composition API');
// const showGoal = ref(false);

// function toggleGoal() {
//   showGoal.value = !showGoal.value;
// }

// const courseData = reactive({
//   courseGoal: 'Master the Composition API',
//   showGoal: false,
// });

// function toggleGoal() {
//   courseData.showGoal = !courseData.showGoal;
// }

export default {
  data() {
    return {
      courseGoal: 'Master Vue.js Options API',
      showGoal: true,
    };
  },
  methods: {
    toggleGoal() {
      this.showGoal = !this.showGoal;
    },
  },
};
</script>

<style>
html {
  font-family: sans-serif;
}
body {
  margin: 3rem;
  text-align: center;
}
</style>
