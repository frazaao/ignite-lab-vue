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
        <li v-for="lesson in lessons" :key="lesson.id">
          <LessonCard
            @click="handleSelect(lesson.id)"
            :selected="activeLesson === lesson.id"
            type="Lesson"
            :available="true"
          />
        </li>
      </ul>
    </nav>
  </aside>
</template>

<script>
import LessonCard from "../LessonCard/index.vue";
export default {
  name: "SidebarComponent",
  components: { LessonCard },

  data() {
    const state = {
      lessons: [
        { id: 1, available: true, type: "Lesson", selected: false },
        { id: 2, available: true, type: "Live", selected: false },
        { id: 3, available: false, type: "Lesson", selected: false },
      ],

      activeLesson: 0,
    };

    return state;
  },

  methods: {
    handleSelect(id) {
      const activeLesson = this.lessons.find((lesson) => {
        return lesson.id == id;
      });

      console.log(activeLesson);

      this.activeLesson = activeLesson.id;
    },
  },
};
</script>
