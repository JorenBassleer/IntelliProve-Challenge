<template>
  <BaseIcon
    class="pi text-xl text-primary-hover cursor-pointer"
    :icon-name="theme === 'dark' ? 'pi-moon': 'pi-sun'"
    @click="onThemeSwitch"
  />
</template>
<script setup>
import { ref } from 'vue';
import BaseIcon from './BaseIcon.vue';

const theme = ref(localStorage.getItem('theme') || 'light');

const onThemeSwitch = () => {
  theme.value = theme.value === 'light' ? 'dark' : 'light';
  localStorage.setItem('theme', theme.value);
  document.documentElement.classList.toggle('dark', theme.value === 'dark');
};
</script>
