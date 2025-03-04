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
      <ButtonOverlay :show-results="currentProfiles.length > 0" />
      <EmptyCameraState v-if="!hasPermission" />
    </div>
  </section>
</template>
<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue';
import useNotify from '@composables/notify';
import { storeToRefs } from 'pinia';
import ButtonOverlay from './CameraPageComponents/ButtonOverlay.vue';
import EmptyCameraState from './CameraPageComponents/EmptyCameraState.vue';
import { useBaseStore } from '../store/base';

const { notify } = useNotify();
const store = useBaseStore();

const { currentProfiles } = storeToRefs(store);

const hasPermission = ref(false);
const videoRef = ref(null);
const stream = ref(null);

const startCamera = async () => {
  try {
    stream.value = await navigator.mediaDevices.getUserMedia({ video: true });
    hasPermission.value = true;
    videoRef.value.srcObject = stream.value;

    await store.getUserProfiles();
  } catch (error) {
    notify({
      title: 'No permission',
      text: 'Failed to access the camera. Please allow permissions.',
      type: 'error',
    });
    hasPermission.value = false;
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
