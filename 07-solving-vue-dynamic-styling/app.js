const app = Vue.createApp({
  data() {
    return {
      isVisible: true,
      userClass: "",
      backgroundColor: "",
    };
  },
  methods: {
    toogleParagraph() {
      this.isVisible = !this.isVisible;
    },
  },
  computed: {},
  watch: {},
});

app.mount("#assignment");
