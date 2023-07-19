<script setup lang="ts">
defineProps<{
  title?: string;
}>();

const emit = defineEmits<{
  close: [];
}>();
</script>

<template>
  <div class="modal">
    <div class="modal__backdrop" @click="emit('close')"></div>

    <div class="modal__bx">
      <h3 v-if="title" class="modal__title">{{ title }}</h3>
      <slot />
    </div>
  </div>
</template>

<style lang="css" scoped>
.modal {
  position: fixed;
  inset: 0;
  display: flex;
  justify-content: center;
  align-items: center;
}

.modal__backdrop {
  position: absolute;
  inset: 0;
  background-color: rgba(0, 0, 0, 0.3);
  z-index: -1;
}

.modal__bx {
  width: 600px;
  height: 300px;
  background-color: white;
  border-radius: 8px;
  padding: 30px;
}

.modal__title {
  text-align: center;
  margin-bottom: 30px;
}
</style>
