const app = Vue.createApp({
  data() {
    return { tasks: [], entrytasks: "", showList: true };
  },
  methods: {
    addTask() {
      this.tasks.push(this.entrytasks);
      this.entrytasks = "";
    },
    toggleList() {
      this.showList = !this.showList;
    },
    updatedTaskFor(index) {
      return this.tasks[index]; // Create separate fields for editing
    },
    updateTask(index) {
      this.tasks[index] = this.updatedTaskFor(index);
    },
  },
});

app.mount("#assignment");
