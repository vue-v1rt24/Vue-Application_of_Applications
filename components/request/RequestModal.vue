<script setup lang="ts">
import { reactive } from 'vue';
import { useRequestStore } from '../../stores/request.stores';
import { EnumStatusRequest } from '../../types/request.type';

//
const emit = defineEmits<{
  created: [];
}>();

//
const store = useRequestStore();

//
const formData = reactive({
  fio: '',
  phone: '',
  amount: '',
  status: EnumStatusRequest.ACTIVE,
});

//
const requestHandle = async () => {
  await store.create(formData);
  emit('created');
};
</script>

<template>
  <form @submit.prevent="requestHandle">
    <div class="form-control">
      <label for="fio">ФИО</label>
      <input type="text" id="fio" v-model="formData.fio" />
    </div>

    <div class="form-control">
      <label for="tel">Телефон</label>
      <input type="text" id="tel" v-model="formData.phone" />
    </div>

    <div class="form-control">
      <label for="amount">Сумма</label>
      <input type="number" id="amount" v-model="formData.amount" />
    </div>

    <div class="form-control">
      <label for="status">Статус</label>
      <select id="status" v-model="formData.status">
        <option value="done">Завершён</option>
        <option value="cancelled">Отменён</option>
        <option value="active">Активен</option>
        <option value="pending">Выполняется</option>
      </select>
    </div>

    <button type="submit">Создать</button>
  </form>
</template>

<style lang="css" scoped></style>
../../stores/request.stores
