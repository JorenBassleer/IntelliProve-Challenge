<template>
  <section class="h-screen flex">
    <div class="flex justify-center items-center h-full w-1/2">
      <video
        autoplay
        loop
        muted
        playsinline
        class="h-full w-full object-cover"
      >
        <source
          src="/images/woman-on-laptop.mp4"
          type="video/mp4"
        >
        Your browser does not support the video tag.
      </video>
    </div>
    <div class="w-1/2 px-12 py-16 flex flex-col justify-between relative">
      <div class="flex flex-col gap-8">
        <h1 class="text-3xl font-bold">
          Perform your health check and gain the insights you need
        </h1>
        <p class="text-lg">
          Using your <span class="font-bold">webcam</span> and the power of <span class="font-bold">artificial intelligence</span>, you can <span class="font-bold">perform a measurement of your vital signs</span> and gain insight in your:
        </p>
        <section class="grid grid-cols-3 gap-4 font-semibold">
          <BaseCard>
            <img
              :src="MentalHealthRiskSvg"
              class="w-16 h-16 m-auto"
            >
            Mental Health
          </BaseCard>

          <BaseCard>
            <img
              :src="PhysicalHealthSvg"
              class="w-16 h-16 m-auto"
            >
            Physical Health
          </BaseCard>

          <BaseCard>
            <img
              :src="EnergyAndSleepSvg"
              class="w-16 h-16 m-auto"
            >
            Energy & Sleep
          </BaseCard>
        </section>
      </div>
      <BaseButton
        class="mx-auto"
        @click="$router.push({name: 'camera'})"
      >
        Start my health check
      </BaseButton>
      <UserSelect class="absolute left-5 top-5" />
      <ToggleTheme class="absolute right-5 top-5" />
    </div>
  </section>
</template>
<script setup>
import BaseButton from '@components/BaseButton.vue';
import BaseCard from '@components/BaseCard.vue';
import UserSelect from '@components/UserSelect.vue';
import ToggleTheme from '@components/ToggleTheme.vue';
import MentalHealthRiskSvg from '../assets/icons/mental-health-risk.svg';
import PhysicalHealthSvg from '../assets/icons/physical-health.svg';
import EnergyAndSleepSvg from '../assets/icons/energy-and-sleep.svg';

</script>
