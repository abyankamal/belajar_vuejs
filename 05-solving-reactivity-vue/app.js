const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      condition: "",
    };
  },
  computed: {},
  methods: {
    add(num) {
      return (this.counter += num);
    },
  },
  watch: {
    counter(value) {
      if (value < 37) {
        this.condition = "Not That Yet";
      } else if (value > 37) {
        this.condition = "Too Much";
      }
      const that = this;
      setTimeout(function () {
        that.counter = 0;
      }, 5000);
    },
  },
});

app.mount("#assignment");
