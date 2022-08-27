<template>
  <div class="mt-6">
    <span class="text-gray-300">Domingo - 20 de junho - 19h00</span>

    <div
      class="flex flex-col border rounded border-gray-600 p-4"
      :class="{ 'bg-green-500': selected }"
    >
      <div class="flex justify-between items-center">
        <span
          class="text-sm flex items-center gap-2 font-semibold"
          :class="{ 'text-gray-100': selected, 'text-blue-500': !selected }"
        >
          <Icon
            name="CheckCircle"
            :color="selected ? color.gray[100] : color.blue[500]"
          />
          {{ lessonAvailable }}
        </span>

        <span
          class="text-xs border border-green-300 px-2 rounded font-bold py-[2px]"
          :class="{
            'text-gray-100': type === 'Lesson',
            'text-green-300': type === 'Live',
          }"
        >
          {{ lessonType }}
        </span>
      </div>
      <span class="mt-4 text-gray-100 font-bold">
        Abertura do evento Ignite Lab
      </span>
    </div>
  </div>
</template>

<script>
import palette from "../../../palette";
import Icon from "@/components/Icon";

export default {
  components: { Icon },

  name: "LessonCardComponent",

  props: {
    selected: { type: Boolean, default: false },
    type: { type: String, default: "Live" },
    available: { type: Boolean, default: false },
  },

  data() {
    const state = {
      color: palette.colors,
      isSelected: this.selected,
    };

    return state;
  },

  computed: {
    lessonType() {
      const type = this.type === "Live" ? "AO VIVO" : "AULA PRÁTICA";
      return type;
    },

    lessonAvailable() {
      const available = this.available ? "Conteúdo liberado" : "Em breve";
      return available;
    },
  },
};
</script>
