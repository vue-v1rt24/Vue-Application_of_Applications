<script setup lang="ts">
import { ref, computed, onMounted } from 'vue';
import { useRequestStore } from '../stores/request.stores';
import Page from '../components/ui/Page.vue';
import RequestTable from '../components/request/RequestTable.vue';
import Modal from '../components/ui/Modal.vue';
import RequestModal from '../components/request/RequestModal.vue';
import Loader from '../components/ui/Loader.vue';
import RequestFilter from '../components/request/RequestFilter.vue';
import { IRequestFilter } from '../types/request.type';

//
const store = useRequestStore();

//
const loading = ref(true);
const modal = ref(false);
const filterRequest = ref<IRequestFilter | null>(null);

//
// const requests = computed(() => store.request);
const requests = computed(() => {
  return store.request
    .filter((req) => {
      if (filterRequest.value?.name) {
        return req.fio.toLocaleLowerCase().includes(filterRequest.value.name.toLocaleLowerCase());
      }

      return req;
    })
    .filter((req) => {
      if (filterRequest.value?.status) {
        return req.status === filterRequest.value.status;
      }

      return req;
    });
});

//
onMounted(async () => {
  await store.load();
  loading.value = false;
});
</script>

<template>
  <Loader v-if="loading" />

  <Page v-else title="Список заявок">
    <template #header>
      <button type="button" @click="modal = true">Создать</button>
    </template>

    <RequestFilter v-model="filterRequest" />
    <RequestTable :requests="requests" />

    <!--  -->
    <Teleport to="body">
      <Modal v-if="modal" title="Создать заявку" @close="modal = false">
        <RequestModal @created="modal = false" />
      </Modal>
    </Teleport>
  </Page>
</template>

<style lang="css" scoped></style>
