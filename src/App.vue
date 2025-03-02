<template>
  <div />
</template>
<script setup>
import { onMounted } from 'vue';
import useAxios from './composables/axios';

const { instance } = useAxios();

const fetchData = async () => {
  const response = await instance.get('/v2/userprofiles/physical', {
    data: {
      external_user_id: 'john.snow@intelliprove.com',
    },
  });
  // eslint-disable-next-line no-console
  console.log('repsonse:', response);
};

onMounted(async () => {
  await fetchData();
});
</script>
