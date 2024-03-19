export default {
  contactCoach(context, payload) {
    const formData = {
      id: new Date().toISOString(),
      coachId: payload.coachId,
      email: payload.email,
      message: payload.message,
    };
    context.commit('addRequest', formData);
  },
};
