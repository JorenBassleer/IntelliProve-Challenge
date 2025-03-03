<template>
  <section
    v-if="!hasPermission"
    class="
        text-white
        flex
        flex-col
        justify-center
        items-center
        max-w-[560px]
        min-w-[320px]
        min-h-[400px]
        max-h-[960px]
        mx-auto
        px-6
        gap-8
        relative custom-corner-border
        bg-[rgb(26,30,35)]
        mt-24
      "
  >
    <span class="corner-top-right" />
    <span class="corner-bottom-left" />
    <BaseIcon
      icon-name="pi-camera"
      class="text-9xl"
    />
    <p>Please allow access to your camera to proceed with the Health Check.</p>
  </section>
</template>
<script setup>
import BaseIcon from '@components/BaseIcon.vue';

</script>
<style scoped>
.custom-corner-border::before,
.custom-corner-border::after,
.custom-corner-border .corner-top-right,
.custom-corner-border .corner-bottom-left {
  content: '';
  position: absolute;
  width: 40px;
  height: 40px;
  border: 3px solid #ffffffad;
  border-radius: 2px;
}

.custom-corner-border::before {
  top: 0;
  left: 0;
  border-right: none;
  border-bottom: none;
}

.custom-corner-border::after {
  bottom: 0;
  right: 0;
  border-left: none;
  border-top: none;
}

.custom-corner-border .corner-top-right {
  top: 0;
  right: 0;
  border-left: none;
  border-bottom: none;
}

.custom-corner-border .corner-bottom-left {
  bottom: 0;
  left: 0;
  border-right: none;
  border-top: none;
}

</style>
