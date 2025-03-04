<template>
  <section class="border-l-4 border-l-primary flex items-center gap-2 pl-2">
    <slot />
    <div class="flex flex-col gap-1 justify-between">
      <span class="uppercase">TITLE</span>
      <span class="font-bold">{{ metric * 100 }}%</span>
    </div>
  </section>
</template>
<script setup>
defineProps({
  metric: {
    type: Number,
    required: true,
  },
});
</script>
