<script setup lang="ts">
import { reactive, watch, computed } from 'vue';
import { IRequestFilter } from '../../types/request.type';

//
defineProps<{
  modelValue: IRequestFilter | null;
}>();

const emit = defineEmits<{
  'update:modelValue': [val: IRequestFilter];
}>();

//
const data = reactive({
  name: '',
  status: '',
});

//
const isActive = computed(() => data.name || data.status);

//
const clear = () => {
  data.name = data.status = '';
};

//
watch(data, (value) => {
  emit('update:modelValue', value);
});
</script>

<template>
  <div class="filter">
    <div class="form-control">
      <input type="text" placeholder="Начните писать имя" v-model="data.name" />
    </div>

    <div class="form-control">
      <select v-model="data.status">
        <option value="" disabled selected>Выберите статус</option>
        <option value="done">Завершён</option>
        <option value="cancelled">Отменён</option>
        <option value="active">Активен</option>
        <option value="pending">Выполняется</option>
      </select>
    </div>

    <button type="button" v-if="isActive" @click="clear">Очистить</button>
  </div>
</template>

<style lang="css" scoped>
.filter {
  display: flex;
  align-items: center;
  column-gap: 30px;
  margin-bottom: 30px;
}
</style>
