<template>
  <main class="flex min-h-screen flex-1 justify-between">
    <Video />
    <Sidebar />
  </main>
</template>

<script>
import Sidebar from "@/components/Sidebar";
import Video from "@/components/Video/index.vue";

export default {
  components: { Sidebar, Video },
};
</script>
