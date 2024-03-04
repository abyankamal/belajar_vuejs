const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: "",
      lastName: "",
      countName: "",
    };
  },
  computed: {
    fullname() {
      if (this.name === "" || this.lastName === "") {
        return "";
      }
      return this.name + " " + this.lastName;
    },
  },
  methods: {
    outputFullName() {
      if (this.name === "") {
        return "";
      }
      return this.name + " " + "Kamal";
    },
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
    resetName() {
      this.name = "";
      this.lastName = "";
    },
  },
  watch: {
    counter(value) {
      if (value > 50) {
        const that = this;
        setTimeout(function () {
          that.counter = 0;
        }, 2000);
      }
    },
  },
});

app.mount("#events");
