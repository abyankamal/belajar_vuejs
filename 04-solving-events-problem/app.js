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
    onClick() {
      alert("Submitted");
    },
    setName(event) {
      this.name = event.target.value;
    },
    add(num) {
      return (this.counter += num);
    },
    subtract(num) {
      return (this.counter -= num);
    },
  },
});

app.mount("#assignment");
