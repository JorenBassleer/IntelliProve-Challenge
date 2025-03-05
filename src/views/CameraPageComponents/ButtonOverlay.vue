<template>
  <div class="flex justify-between items-start">
    <BaseButton
      v-show="showHelp"
      plain
    >
      Need help
    </BaseButton>
    <div class="flex flex-col gap-4 justify-end items-end ml-auto">
      <BaseButton
        plain
        @click="$router.push({ name: 'home'})"
      >
        Cancel health check
      </BaseButton>

      <BaseButton
        v-show="showResults"
        plain
        @click="$router.push({ name: 'results'})"
      >
        Results
      </BaseButton>
    </div>
  </div>
</template>
<script setup>
import BaseButton from '@components/BaseButton.vue';

defineProps({
  showResults: {
    type: Boolean,
    default: false,
  },
  showHelp: {
    type: Boolean,
    default: false,
  },
});
</script>
