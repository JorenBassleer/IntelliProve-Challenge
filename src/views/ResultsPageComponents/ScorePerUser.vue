<template>
  <section class="grid grid-cols-3">
    <article
      v-for="x in 3"
      :key="x"
    >
      <SingleScore />
    </article>
  </section>
</template>
<script setup>
import SingleScore from './SingleScore.vue';
</script>
