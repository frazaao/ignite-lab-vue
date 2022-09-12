<template>
  <svg
    :width="size"
    :height="size"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g clip-path="url(#clip0_8_533)">
      <path
        d="M9 22.5L10.5 15L4.5 12.75L15 1.5L13.5 9L19.5 11.25L9 22.5Z"
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
  name: "LightningIcon",
  props: {
    size: { type: Number, default: 20 },
    color: { type: String, default: "#333333" },
  },
};
</script>
