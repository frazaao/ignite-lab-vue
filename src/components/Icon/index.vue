<template>
  <component :is="name" />
</template>

<script>
import CheckCircle from "./CheckCircle.vue";
export default {
  name: "IconComponent",
  components: { CheckCircle },
  props: {
    name: { type: String, required: true },
  },
};
</script>
