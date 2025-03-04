<template>
  <section class="border-l-4 border-l-primary">
    <div>
      Some score here
    </div>
    <span>{{ metric }}</span>
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
