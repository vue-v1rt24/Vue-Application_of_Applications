<script setup lang="ts">
import { onMounted } from 'vue';

//
const props = defineProps<{
  title: string;
}>();

//
onMounted(() => {
  document.title = `${props.title} | Банк`;
});
</script>

<template>
  <div class="card">
    <h1 class="card__title">
      {{ title }}
      <slot name="header" />
    </h1>

    <slot />
  </div>
</template>

<style lang="css" scoped>
.card {
  width: 800px;
  padding: 30px;
  margin: 0 auto;
}

.card__title {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 30px;
}
</style>
