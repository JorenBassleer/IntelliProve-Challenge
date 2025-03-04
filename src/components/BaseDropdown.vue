<template>
  <dropdown-menu>
    <template #trigger>
      <slot />
    </template>

    <template #body>
      <slot name="content" />
    </template>
  </dropdown-menu>
</template>
<script setup>
import DropdownMenu from 'v-dropdown-menu';

</script>
