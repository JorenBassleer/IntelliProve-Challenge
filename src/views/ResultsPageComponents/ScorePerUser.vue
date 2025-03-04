<template>
  <section class="grid grid-cols-3 gap-4">
    <article
      v-for="profile in currentProfiles"
      :key="profile?.score"
    >
      <SingleScore :metric="profile.score">
        <img
          class="w-8 h-8"
          :src="profileSvgs[profile.profile]"
        >
      </SingleScore>
    </article>
  </section>
</template>
<script setup>
import { storeToRefs } from 'pinia';
import SingleScore from './SingleScore.vue';
import { useBaseStore } from '../../store/base';
import MentalHealthRiskSvg from '../../assets/icons/mental-health-risk.svg';
import PhysicalHealthSvg from '../../assets/icons/physical-health.svg';
import EnergyAndSleepSvg from '../../assets/icons/energy-and-sleep.svg';

const store = useBaseStore();
const { currentProfiles } = storeToRefs(store);

const profileSvgs = {
  'mental': MentalHealthRiskSvg,
  'physical': PhysicalHealthSvg,
  'energy-sleep': EnergyAndSleepSvg,
};
</script>
