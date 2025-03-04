<template>
  <div class="bg-primary-support p-20 flex flex-col gap-8 w-screen h-screen">
    <section class="flex justify-between w-full">
      <h1 class="text-4xl font-bold">
        Your health report
      </h1>
      <BaseButton @click="$router.push({ name: 'home'})">
        Return
      </BaseButton>
    </section>
    <PanelComponent>
      <div class="w-2/5">
        Graph here
      </div>
      <div class="flex flex-col gap-4 w-3/5">
        <h2 class="text-5xl font-bold">
          High load of stress detected
        </h2>
        <p class="text-sm leading-6">
          You may be feeling a little more stressed than usual. We highly recommend implementing some stress management activities today like breathing exercises, meditation, or yoga.
        </p>
        <ScorePerUser />
      </div>
    </PanelComponent>
    <div class="border-b-4 border-b-primary pb-4 flex items-center gap-1 text-primary font-semibold text-lg">
      <BaseIcon icon-name="pi-arrow-up-left" />
      Well-being evolution
    </div>
    <PanelComponent>
      <h3 class="font-bold uppercase">
        Heart rate
      </h3>
    </PanelComponent>
  </div>
</template>
<script setup>
import BaseButton from '@components/BaseButton.vue';
import BaseIcon from '@components/BaseIcon.vue';
import PanelComponent from './ResultsPageComponents/PanelComponent.vue';
import ScorePerUser from './ResultsPageComponents/ScorePerUser.vue';

</script>
<style scoped>
.bg-primary-support {
  background-color: rgba(219, 225, 246, 1);
}
</style>
