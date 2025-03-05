<template>
  <VueApexCharts
    :type="type"
    :series="chartData"
    :options="options"
  />
</template>
<script setup>
import VueApexCharts from 'vue3-apexcharts';

defineProps({
  chartData: {
    type: Array,
    required: true,
  },
  options: {
    type: Object,
    required: true,
  },
  type: {
    type: String,
    default: 'radialBar',
  },
});
</script>
