<script setup lang="ts">
import { computed } from 'vue';
import { useMessageStore } from '../../stores/message.store';

//
const store = useMessageStore();

//
const TITLE_MAP = {
  primary: 'Успешно',
  danger: 'Ошибка',
  warning: 'Предупреждение',
};

//
const message = computed(() => store.message);
const title = computed(() => TITLE_MAP[message.value?.type || 'primary']);

//
const close = () => {
  store.clearMessage();
};
</script>

<template>
  <div v-if="message" :class="['alert', message?.type]">
    <p class="alert__title">{{ title }}</p>
    <p>{{ message?.value }}</p>
    <button type="button" @click="close">Закрыть</button>
  </div>
</template>

<style lang="css" scoped>
.alert {
  position: absolute;
  top: 50px;
  left: 50%;
  transform: translateX(-50%);
  width: 600px;
  background-color: aliceblue;
  border-left: 10px solid white;
  padding: 20px;
  z-index: 100;
}

.alert.primary {
  border-left-color: rgb(0, 255, 119);
}

.alert.warning {
  border-left-color: rgb(204, 183, 22);
}

.alert.danger {
  border-left-color: rgb(204, 22, 22);
}
</style>
