<template>
  <svg
    :width="size"
    :height="size"
    viewBox="0 0 20 21"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g clip-path="url(#clip0_32_873)">
      <path
        d="M16.25 7.30981H3.75C3.40482 7.30981 3.125 7.58964 3.125 7.93481V16.6848C3.125 17.03 3.40482 17.3098 3.75 17.3098H16.25C16.5952 17.3098 16.875 17.03 16.875 16.6848V7.93481C16.875 7.58964 16.5952 7.30981 16.25 7.30981Z"
        :stroke="color"
        stroke-width="1.25"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M7.1875 7.30981V4.49731C7.1875 3.75139 7.48382 3.03602 8.01126 2.50858C8.53871 1.98113 9.25408 1.68481 10 1.68481C10.7459 1.68481 11.4613 1.98113 11.9887 2.50858C12.5162 3.03602 12.8125 3.75139 12.8125 4.49731V7.30981"
        :stroke="color"
        stroke-width="1.25"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M10 13.2473C10.5178 13.2473 10.9375 12.8276 10.9375 12.3098C10.9375 11.792 10.5178 11.3723 10 11.3723C9.48223 11.3723 9.0625 11.792 9.0625 12.3098C9.0625 12.8276 9.48223 13.2473 10 13.2473Z"
        :fill="color"
      />
    </g>
    <defs>
      <clipPath id="clip0_32_873">
        <rect
          width="20"
          height="20"
          fill="white"
          transform="translate(0 0.434814)"
        />
      </clipPath>
    </defs>
  </svg>
</template>

<script>
export default {
  name: "LockIcon",
  props: {
    size: { type: Number, default: 20 },
    color: { type: String, default: "#333333" },
  },
};
</script>
