<template>
  <svg
    :width="size"
    :height="size"
    viewBox="0 0 39 39"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g clip-path="url(#clip0_15_909)">
      <path
        d="M30.4688 34.125H8.53125C8.20802 34.125 7.89802 33.9966 7.66946 33.768C7.4409 33.5395 7.3125 33.2295 7.3125 32.9062V6.09375C7.3125 5.77052 7.4409 5.46052 7.66946 5.23196C7.89802 5.0034 8.20802 4.875 8.53125 4.875H23.1562L31.6875 13.4062V32.9062C31.6875 33.2295 31.5591 33.5395 31.3305 33.768C31.102 33.9966 30.792 34.125 30.4688 34.125Z"
        :stroke="color"
        stroke-width="2.4375"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M23.1562 4.875V13.4062H31.6875"
        :stroke="color"
        stroke-width="2.4375"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M15.2344 23.7656L19.5 28.0312L23.7656 23.7656"
        :stroke="color"
        stroke-width="2.4375"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M19.5 18.2812V28.0312"
        :stroke="color"
        stroke-width="2.4375"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </g>
  </svg>
</template>

<script>
export default {
  name: "DownloadIcon",
  props: {
    size: { type: Number, default: 20 },
    color: { type: String, default: "#333333" },
  },
};
</script>
