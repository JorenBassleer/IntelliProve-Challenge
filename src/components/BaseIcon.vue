<template>
  <span
    class="pi"
    :class="iconName"
  />
</template>
<script setup>
defineProps({
  iconName: {
    type: String,
    required: true,
  },
});
</script>
