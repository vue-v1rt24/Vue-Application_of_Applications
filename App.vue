<script setup lang="ts">
import { computed } from 'vue';
import { useRoute } from 'vue-router';
import MainLayout from './layouts/MainLayout.vue';
import AuthLayout from './layouts/AuthLayout.vue';

//
const router = useRoute();

//
const layout = computed(() => {
  const component = router.meta.layout;

  if (component) {
    return component === 'Main' ? MainLayout : AuthLayout;
  }

  return null;
});
</script>

<template>
  <component v-if="layout" :is="layout" />
</template>

<style lang="css" scoped></style>
