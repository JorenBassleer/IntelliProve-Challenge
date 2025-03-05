<template>
  <button
    class="
      bg-primary
      hover:bg-primary-hover
      transition-colors duration-300 ease-out
      cursor-pointer px-6 py-4
      rounded-[40px] uppercase
      flex gap-3 font-semibold items-center text-white"
    :class="{
      '': plain
    }"
  >
    <slot />
    <img :src="ChevronForward">
  </button>
</template>

<script setup>
import ChevronForward from '../assets/icons/chevron-forward.svg';

defineProps({
  type: {
    type: String,
    default: 'primary',
  },
  plain: {
    type: Boolean,
    default: false,
  },
});
</script>
