<template>
  <svg
    :width="size"
    :height="size"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g clip-path="url(#clip0_15_852)">
      <path
        d="M9 4.5L16.5 12L9 19.5"
        :stroke="color"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </g>
  </svg>
</template>

<script>
export default {
  props: {
    size: { type: Number, default: 20 },
    color: { type: String, default: "#333333" },
  },
};
</script>
