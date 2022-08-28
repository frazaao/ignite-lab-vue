import { createStore } from "vuex";

export default createStore({
  state: {
    lessons: {
      activeLesson: 1,
      lessons: [
        {
          id: "cl51d3o9i6lna0ck9kmntbcm1",
          lessonType: "class",
          availableAt: "2022-06-30T18:30:00+00:00",
          slug: "start-2022-entramos-em-uma-nova-fase-or-rocketseat",
          title: "Start 2022 – Entramos em uma nova fase | Rocketseat",
          videoId: "GcsxcmTP0lQ",
        },
        {
          id: "cl51hvycu7emh0bklzhlfxw1o",
          lessonType: "class",
          availableAt: "2022-06-30T20:00:00+00:00",
          slug: "prisma-o-orm-nodejs-que-voce-precisa-em-2022",
          title: "Prisma: o ORM Node.js que você precisa em 2022",
          videoId: "nuLTwqPNq-w",
        },
        {
          id: "cl51i3wbo7g5q0bklvcvqtvmn",
          lessonType: "class",
          availableAt: "2022-06-30T21:00:00+00:00",
          slug: "absinthe-graphql-do-jeito-certo-em-elixir",
          title: "Absinthe: GraphQL do jeito certo em Elixir",
          videoId: "2IqvuChAAh8",
        },
      ],
    },
  },
  getters: {
    getLessons(state) {
      const lessons = state.lessons.lessons.map((lesson) => {
        const now = new Date();
        const availableAt = new Date(lesson.availableAt);
        const available = availableAt <= now;
        lesson.available = !!available;

        return lesson;
      });
      return lessons;
    },

    getActiveLesson(state) {
      return state.lessons.activeLesson;
    },
  },
  mutations: {
    SET_ACTIVE_LESSON(state, id) {
      state.lessons.activeLesson = id;
    },
  },
  actions: {
    setActiveLesson(context, payload) {
      const activeLesson = context.state.lessons.lessons.find(
        (activeLesson) => activeLesson.id === payload
      );

      if (!activeLesson.available) {
        return;
      }

      context.commit("SET_ACTIVE_LESSON", payload);
    },
  },
  modules: {},
});
