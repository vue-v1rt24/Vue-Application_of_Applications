<script setup lang="ts">
import TheNavbar from '../components/TheNavbar.vue';
import Message from '../components/ui/Message.vue';
</script>

<template>
  <div>
    <TheNavbar />
    <Message />
    <RouterView />
  </div>
</template>

<style lang="css" scoped></style>
