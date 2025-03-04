<!-- eslint-disable vue/no-v-html -->
<template>
  <div
    v-html="widgetData"
  />
</template>
<script setup>
import { onMounted, ref } from 'vue';
import useDate from '@composables/date-fns';
import { useBaseStore } from '../store/base';

const props = defineProps({
  widget: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  dates: {
    type: Object,
    default: () => {
      const { format } = useDate();
      return {
        start: format(new Date('2024-12-21T00:00:00'), 'yyyy-MM-dd'),
        stop: format(new Date('2024-12-31T23:59:59'), 'yyyy-MM-dd'),
      };
    },
  },
});

const store = useBaseStore();

const widgetData = ref();

onMounted(async () => {
  widgetData.value = await store.getUserWidget({
    data: {
      parameter: props.widget,
      title: props.title,
      ...props.dates,
    },
  });
});
</script>
