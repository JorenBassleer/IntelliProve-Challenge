<template>
  <div class="flex justify-between items-start">
    <BaseButton plain>
      Need help
    </BaseButton>
    <div class="flex flex-col gap-4 justify-end items-end">
      <BaseButton plain>
        Cancel health check
      </BaseButton>

      <BaseButton
        v-show="showResults"
        plain
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
});
</script>
