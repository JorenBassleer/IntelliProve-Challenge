<template>
  <ChartComponent
    :chart-data="currentProfiles.map((profile) => profile.score * 100)"
    class="capitalize"
    :options="chartOptions"
  />
</template>
<script setup>
import { ref } from 'vue';
import ChartComponent from '@components/ChartComponent.vue';
import { storeToRefs } from 'pinia';
import { useBaseStore } from '@/store/base';

const store = useBaseStore();

const { currentProfiles } = storeToRefs(store);

const chartOptions = ref({
  colors: ['rgba(9, 33, 135, 1)', '#3A79FF'],
  stroke: {
    lineCap: 'round',
  },
  plotOptions: {
    radialBar: {
      startAngle: -130,
      endAngle: 130,
      track: {
        startAngle: -130,
        endAngle: 130,
      },
      dataLabels: {
        name: {
          offsetY: -10,
          color: 'rgba(9, 33, 135, 1)',
          fontSize: '13px',
          show: false,
        },
        value: {
          offsetY: 5,
          color: 'rgba(9, 33, 135, 1)',
          fontSize: '30px',
          fontWeight: 'bold',
          show: true,
        },
      },
    },
  },
  fill: {
    type: 'gradient',
    gradient: {
      shade: 'dark',
      type: 'horizontal',
      shadeIntensity: 0.9,
      gradientToColors: ['#3A79FF', 'rgba(9, 33, 135, 1)', '#3A79FF'],
      opacityFrom: 1,
      opacityTo: 1,
      stops: [0, 100],
    },
  },
});
</script>
