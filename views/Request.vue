<script setup lang="ts">
import { ref, computed, onMounted } from 'vue';
import Loader from '../components/ui/Loader.vue';
import Page from '../components/ui/Page.vue';
import Status from '../components/ui/Status.vue';
import { useRoute, useRouter } from 'vue-router';
import { useRequestStore } from '../stores/request.stores';
import { priceFormatter } from '../utils/priceFormatter.util';
import { IRequest, EnumStatusRequest } from '../types/request.type';

//
const route = useRoute();
const router = useRouter();
const store = useRequestStore();
const loading = ref(true);
const request = ref<IRequest | null>(null);
const status = ref<EnumStatusRequest | null>(null);

const id = route.params.id as string;

//
const hasChanges = computed(() => status.value !== request.value?.status);

//
const update = async () => {
  await store.update({ ...request.value, status: status.value });
  request.value.status = status.value;
};

const remove = async () => {
  await store.remove(id);

  router.push({
    name: 'home',
  });
};

//
onMounted(async () => {
  request.value = await store.loadById(id);
  status.value = request.value?.status;
  loading.value = false;
});
</script>

<template>
  <Loader v-if="loading" />

  <Page v-else-if="request" title="Заявка">
    <template #header>
      <RouterLink :to="{ name: 'home' }" v-slot="{ navigate }">
        <button type="button" @click="navigate">К заявкам</button>
      </RouterLink>
    </template>

    <div><strong>Имя владельца:</strong> {{ request.fio }}</div>
    <div><strong>Номер телефона:</strong> {{ request.phone }}</div>
    <div><strong>Сумма:</strong> {{ priceFormatter(+request.amount) }}</div>
    <div><strong>Статус:</strong> <Status :status="request.status" /></div>

    <div class="form-control">
      <label for="status">Статус</label>
      <select id="status" v-model="status">
        <option value="done">Завершён</option>
        <option value="cancelled">Отменён</option>
        <option value="active">Активен</option>
        <option value="pending">Выполняется</option>
      </select>
    </div>

    <hr />

    <button type="button" v-if="hasChanges" @click="update">Обновить заявку</button>
    <button type="button" @click="remove">Удалить заявку</button>
  </Page>

  <div v-else>Заявка не нашлась</div>
</template>

<style lang="css" scoped></style>
