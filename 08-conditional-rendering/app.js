const app = Vue.createApp({
  data() {
    return { goals: [], entryvalue: "" };
  },
  methods: {
    addGoal() {
      this.goals.push(this.entryvalue);
      this.entryvalue = "";
    },
    removeGoal(idx) {
      this.goals.splice(idx, 1);
    },
  },
});

app.mount("#user-goals");
