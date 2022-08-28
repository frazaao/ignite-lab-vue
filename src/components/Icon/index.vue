<template>
  <component :is="name" />
</template>

<script>
import CheckCircle from "./CheckCircle.vue";
import Lock from "./Lock.vue";

export default {
  name: "IconComponent",
  components: { CheckCircle, Lock },
  props: {
    name: { type: String, required: true },
  },
};
</script>
