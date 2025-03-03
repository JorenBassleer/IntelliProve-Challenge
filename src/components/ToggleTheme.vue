<template>
  <span
    class="pi text-xl text-primary-hover cursor-pointer"
    :class="isDarkMode ? 'pi-moon': 'pi-sun'"
    @click="onThemeSwitch"
  />
</template>
<script setup>
import { ref } from 'vue';

// Get from device
const isDarkMode = ref(false);

const onThemeSwitch = () => {
  isDarkMode.value = !isDarkMode.value;
  // Set device pref
};
</script>
