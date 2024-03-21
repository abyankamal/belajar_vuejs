<template>
  <section class="container">
    <h2>{{ userName }}</h2>
    <h2>{{ uAge }}</h2>
    <button @click="setAge">Add Age</button>
    <div>
      <input type="text" placeholder="FirstName" v-model="firstName" />
      <input type="text" placeholder="LastName" v-model="lastName" />
    </div>
  </section>
</template>

<script>
// import { reactive } from 'vue';
import { ref, computed, watch } from 'vue';

export default {
  setup() {
    // const uName = ref('Maximilian');
    const uAge = ref(31);
    // const user = reactive({
    //   userName: 'Maximilian',
    //   age: 31,
    // });

    // setTimeout(function () {
    //   // uName.value = 'Max';
    //   // uAge.value = 32;
    //   user.userName = 'Max';
    //   user.age = 32;
    // }, 2000);

    function setAgeValue() {
      return uAge.value++;
    }

    // return { userName: uName, age: uAge };
    // return { user: user, setAge: setAgeValue };

    const firstName = ref('');
    const lastName = ref('');

    const userName = computed(() => {
      return firstName.value + ' ' + lastName.value;
    });

    watch([uAge, userName], (newValue, oldValue) => {
      console.log('Old Age : ' + oldValue[0]);
      console.log('New Age :' + newValue[0]);
      console.log('Old Name :' + oldValue[1]);
      console.log('New Name :' + newValue[1]);
    });

    return {
      firstName: firstName,
      lastName: lastName,
      uAge: uAge,
      setAge: setAgeValue,
      userName: userName,
    };
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
