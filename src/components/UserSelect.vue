<template>
  <BaseIcon
    icon-name="pi-user"
    class="pi pi-user text-xl text-primary-hover cursor-pointer"
  />
  <article
    v-for="user in externalUserIds"
    :key="user"
    @click="store.authenticate(user)"
  >
    {{ user }}
  </article>
</template>
<script setup>
import { storeToRefs } from 'pinia';
import BaseIcon from './BaseIcon.vue';
import { useBaseStore } from '../store/base';

const store = useBaseStore();

const { externalUserIds } = storeToRefs(store);
</script>
