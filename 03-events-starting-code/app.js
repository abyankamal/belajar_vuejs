const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: "",
      countName: "",
    };
  },
  methods: {
    confirmInput() {
      this.countName = this.name;
    },
    submitForm() {
      alert("Submitted");
    },
    setName(event, lastName) {
      this.name = event.target.value + " " + lastName;
    },
    add(num) {
      return (this.counter += num);
    },
    subtract(num) {
      return (this.counter -= num);
    },
  },
});

app.mount("#events");
