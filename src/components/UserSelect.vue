<template>
  <BaseDropdown>
    <BaseIcon
      icon-name="pi-user"
      class="pi pi-user text-xl text-primary-hover cursor-pointer select-none"
    />
    <template #content>
      <section class="bg-white rounded p-2 border border-color shadow-xl">
        <article
          v-for="user in externalUserIds"
          :key="user"
          class="cursor-pointer text-primary hover:text-primary-hover transition-colors duration-300"
          @click="store.authenticate(user)"
        >
          {{ user }}
        </article>
      </section>
    </template>
  </BaseDropdown>
</template>
<script setup>
import { storeToRefs } from 'pinia';
import BaseIcon from './BaseIcon.vue';
import { useBaseStore } from '../store/base';
import BaseDropdown from './BaseDropdown.vue';

const store = useBaseStore();

const { externalUserIds } = storeToRefs(store);
</script>
<style scoped>
.border-color {
  border-color: rgba(9, 33, 135, 0.07);
}
</style>
