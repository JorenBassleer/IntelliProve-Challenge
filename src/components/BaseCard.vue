<template>
  <article
    class="rounded-xl bg-white border border-color flex items-center justify-center"
    :class="{
      'shadow-sm px-6 py-4 gap-4': size === 'small',
      'shadow-xl p-8 gap-8': size === 'large',
    }"
  >
    <slot />
  </article>
</template>
<script setup>
defineProps({
  size: {
    type: String,
    default: 'small',
  },
});
</script>
<style scoped>
.border-color {
  border-color: rgba(9, 33, 135, 0.07);
}
</style>
