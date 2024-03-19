export default {
  async registerCoach(context, data) {
    const userId = context.rootGetters.userId;
    const coachData = {
      firstName: data.first,
      lastName: data.last,
      description: data.desc,
      hourlyRate: data.rate,
      areas: data.areas,
    };

    const response = await fetch(
      `https://vue-http-demo-fdb2c-default-rtdb.firebaseio.com/coaches/${userId}.json`,
      {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(coachData),
      }
    );

    if (!response.ok) {
      throw new Error(response.statusText);
    }

    context.commit('registerCoach', {
      ...coachData,
      id: userId,
    });
  },
};
