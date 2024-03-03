Vue.createApp({
  data() {
    return {
      name: "Muhammad Abyan Kamal",
      age: 22,
      imageUrl:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5d/Becky_Hill.jpg/800px-Becky_Hill.jpg",
      enteredValue: "",
    };
  },
  methods: {
    addAge() {
      return this.age + 5;
    },
  },
}).mount("#assignment");
