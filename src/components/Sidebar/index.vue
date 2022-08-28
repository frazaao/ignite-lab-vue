<template>
  <aside
    class="flex flex-col px-6 py-5 bg-gray-700 border-l border-gray-600 w-[350px]"
  >
    <span class="text-gray-100 text-2xl text-left mb-6">
      Cronograma das aulas
    </span>
    <hr class="border-gray-600" />
    <nav>
      <ul>
        <li v-for="lesson in getLessons" :key="lesson.id">
          <LessonCard
            @click="handleSelect(lesson.id)"
            :selected="getActiveLesson === lesson.id"
            :type="lesson.lessonType"
            :available="lesson.available"
            :data="lesson"
          />
        </li>
      </ul>
    </nav>
  </aside>
</template>

<script>
import LessonCard from "../LessonCard/index.vue";
import { mapGetters } from "vuex";

export default {
  name: "SidebarComponent",
  components: { LessonCard },

  data() {
    const state = {};

    return state;
  },

  computed: {
    ...mapGetters(["getLessons", "getActiveLesson"]),
  },

  methods: {
    handleSelect(id) {
      this.$store.dispatch("setActiveLesson", id);
    },
  },
};
</script>
