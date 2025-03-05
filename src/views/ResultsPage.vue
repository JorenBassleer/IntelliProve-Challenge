<template>
  <div class="bg-primary-support p-20 flex flex-col gap-8 w-screen h-screen overflow-auto">
    <section class="flex justify-between w-full items-center">
      <h1 class="text-4xl font-bold">
        Your health report
      </h1>
      <BaseButton @click="$router.push({ name: 'home'})">
        Return
      </BaseButton>
    </section>
    <BaseCard size="large">
      <WellBeingGraph class="w-1/3" />
      <div class="flex flex-col gap-4 w-3/5">
        <h2 class="text-5xl font-bold">
          High load of stress detected
        </h2>
        <p class="text-sm leading-6">
          You may be feeling a little more stressed than usual. We highly recommend implementing some stress management activities today like breathing exercises, meditation, or yoga.
        </p>
        <ScorePerUser />
      </div>
    </BaseCard>
    <div class="border-b-4 border-b-primary pb-4 flex items-center gap-1 text-primary font-semibold text-lg">
      <BaseIcon icon-name="pi-arrow-up-left" />
      Well-being evolution
    </div>
    <BaseCard
      size="large"
      class="justify-start"
    >
      <HTMLWidgetComponent
        widget="heart_rate"
        title="Heart rate"
        class="w-1/2"
      />
    </BaseCard>
  </div>
</template>
<script setup>
import { onMounted } from 'vue';

import BaseButton from '@components/BaseButton.vue';
import BaseIcon from '@components/BaseIcon.vue';
import HTMLWidgetComponent from '@components/HTMLWidgetComponent.vue';
import BaseCard from '@components/BaseCard.vue';

import WellBeingGraph from './ResultsPageComponents/WellBeingGraph.vue';
import ScorePerUser from './ResultsPageComponents/ScorePerUser.vue';
import { useBaseStore } from '../store/base';

const store = useBaseStore();

// Delete at end
onMounted(async () => {
  await store.getUserProfiles();
});
</script>
<style scoped>
.bg-primary-support {
  background-color: rgba(219, 225, 246, 1);
}
</style>
