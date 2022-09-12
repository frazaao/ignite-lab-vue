<template>
  <div class="mt-6">
    <span class="text-gray-300">{{ availableAt }}</span>

    <a
      class="flex flex-col border rounded border-gray-600 p-4 relative hover:border-green-500 transition-colors"
      :class="{
        'bg-green-500 border-green-500': selected,
        'cursor-pointer': available,
        'cursor-not-allowed': !available,
      }"
    >
      <span
        v-if="selected"
        class="absolute w-4 h-4 rotate-45 left-[-.5rem] bg-green-500"
      ></span>
      <div class="flex justify-between items-center">
        <span
          v-if="available"
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
          v-else
          class="text-sm flex items-center gap-2 font-semibold"
          :class="{ 'text-gray-100': selected, 'text-orange-500': !selected }"
        >
          <Icon
            name="Lock"
            :color="selected ? color.gray[100] : color.orange[500]"
          />
          {{ lessonAvailable }}
        </span>

        <span
          class="text-xs border border-green-300 px-2 rounded font-bold py-[2px]"
          :class="{
            'text-gray-100': type === 'class',
            'text-green-300': type === 'live',
          }"
        >
          {{ lessonType }}
        </span>
      </div>
      <span class="mt-4 text-gray-100 font-bold">
        Abertura do evento Ignite Lab
      </span>
    </a>
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
    type: { type: String, default: "live" },
    available: { type: Boolean, default: false },
    data: { type: Object, required: true },
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
      const type = this.type === "live" ? "AO VIVO" : "AULA PRÁTICA";
      return type;
    },

    lessonAvailable() {
      const available = this.available ? "Conteúdo liberado" : "Em breve";
      return available;
    },

    availableAt() {
      const available = new Date(this.data.availableAt);

      return available.toLocaleDateString("pt-BR");
    },
  },
};
</script>
