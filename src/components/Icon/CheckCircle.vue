<template>
  <svg
    :width="size"
    :height="size"
    viewBox="0 0 20 21"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g clip-path="url(#clip0_303_60)">
      <path
        d="M13.4375 8.35229L8.85156 12.7273L6.5625 10.5398"
        :stroke="color"
        stroke-width="1.25"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M10 17.7273C14.1421 17.7273 17.5 14.3694 17.5 10.2273C17.5 6.08516 14.1421 2.72729 10 2.72729C5.85786 2.72729 2.5 6.08516 2.5 10.2273C2.5 14.3694 5.85786 17.7273 10 17.7273Z"
        :stroke="color"
        stroke-width="1.25"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </g>
    <defs>
      <clipPath id="clip0_303_60">
        <rect
          width="20"
          height="20"
          :fill="color"
          transform="translate(0 0.227295)"
        />
      </clipPath>
    </defs>
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

<style lang="scss" scoped></style>
