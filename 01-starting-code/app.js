Vue.createApp({
  data() {
    return {
      iseng: "Hello, world",
      outputGoalA: "Apaan Dah",
      outputGoalB: "Lu Sok Asik",
      link: "https://www.instagram.com/",
    };
  },
  methods: {
    outputGoal() {
      const randomNumber = Math.random();
      if (randomNumber < 0.5) {
        return this.outputGoalA;
      } else {
        return this.outputGoalB;
      }
    },
  },
}).mount("#user-goal");
