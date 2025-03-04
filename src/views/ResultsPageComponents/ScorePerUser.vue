<template>
  <section class="grid grid-cols-3">
    <article
      v-for="profile in currentProfiles"
      :key="profile?.score"
    >
      <SingleScore :metric="profile.score" />
    </article>
  </section>
</template>
<script setup>
import { storeToRefs } from 'pinia';
import SingleScore from './SingleScore.vue';
import { useBaseStore } from '../../store/base';

const store = useBaseStore();
const { currentProfiles } = storeToRefs(store);
</script>
