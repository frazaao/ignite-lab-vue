<template>
  <component :is="name" />
</template>

<script>
import CheckCircle from "./CheckCircle.vue";
import Lock from "./Lock.vue";
import Discord from "./Discord.vue";
import Lightning from "./Lightning.vue";
import Rocketseat from "./Rocketseat.vue";
import ArrowRight from "./ArrowRight.vue";
import Image from "./Image.vue";
import Download from "./Download.vue";

export default {
  name: "IconComponent",
  components: {
    CheckCircle,
    Lock,
    Discord,
    Lightning,
    Rocketseat,
    ArrowRight,
    Image,
    Download,
  },
  props: {
    name: { type: String, required: true },
  },
};
</script>
