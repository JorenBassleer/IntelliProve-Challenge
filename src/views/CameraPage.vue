<template>
  <section class="bg-[rgb(26,30,35)] h-screen">
    <video
      v-show="hasPermission"
      ref="videoRef"
      autoplay
      muted
      playsinline
      class="w-full h-full border object-cover"
    />
    <div class="p-6 w-screen h-screen absolute top-0">
      <ButtonOverlay :show-results="healthCheckIsDone" />
      <EmptyCameraState v-if="!hasPermission" />
    </div>
  </section>
</template>
<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue';
import ButtonOverlay from './CameraPageComponents/ButtonOverlay.vue';
import EmptyCameraState from './CameraPageComponents/EmptyCameraState.vue';

const hasPermission = ref(false);
const healthCheckIsDone = ref(false);
const videoRef = ref(null);
const stream = ref(null);
const errorMessage = ref('');

const startCamera = async () => {
  try {
    stream.value = await navigator.mediaDevices.getUserMedia({ video: true });
    hasPermission.value = true;
    videoRef.value.srcObject = stream.value;
    setTimeout(() => {
      healthCheckIsDone.value = true;
    }, 5000);
  } catch (error) {
    // Handle notify error
    errorMessage.value = 'Failed to access the camera. Please allow permissions.';
  }
};

onBeforeUnmount(() => {
  if (stream.value) {
    stream.value.getTracks().forEach((track) => track.stop());
  }
});

onMounted(() => {
  startCamera();
});
</script>
