<template>
  <section class="container">
    <h2>{{ user.userName }}</h2>
    <h2>{{ user.age }}</h2>
    <button @click="setAge">Add Age</button>
  </section>
</template>

<script>
import { reactive } from 'vue';

export default {
  setup() {
    // const uName = ref('Maximilian');
    // const uAge = ref(31);
    const user = reactive({
      userName: 'Maximilian',
      age: 31,
    });

    // setTimeout(function () {
    //   // uName.value = 'Max';
    //   // uAge.value = 32;
    //   user.userName = 'Max';
    //   user.age = 32;
    // }, 2000);

    function setAgeValue() {
      return (user.age = 32);
    }

    // return { userName: uName, age: uAge };
    return { user: user, setAge: setAgeValue };
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

.container {
  margin: 3rem auto;
  max-width: 30rem;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  padding: 1rem;
  text-align: center;
}
</style>
