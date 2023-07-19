<script setup lang="ts">
import Status from '../ui/Status.vue';
import { priceFormatter } from '../../utils/priceFormatter.util';
import { IRequest } from '../../types/request.type';

//
defineProps<{
  requests: IRequest[];
}>();
</script>

<template>
  <h4 v-if="!requests.length">Заявок пока нет</h4>

  <table v-else border="1" class="table">
    <thead>
      <tr>
        <th scope="col">#</th>
        <th scope="col">ФИО</th>
        <th scope="col">Телефон</th>
        <th scope="col">Сумма</th>
        <th scope="col">Статус</th>
        <th scope="col">Действия</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(req, idx) in requests" :key="req.id">
        <td>{{ idx + 1 }}</td>
        <td>{{ req.fio }}</td>
        <td>{{ req.phone }}</td>
        <td>{{ priceFormatter(+req.amount) }}</td>
        <td><Status :status="req.status" /></td>
        <td>
          <RouterLink
            v-slot="{ navigate }"
            custom
            :to="{ name: 'request', params: { id: req.id } }"
          >
            <button type="button" class="table__close" @click="navigate">Открыть</button>
          </RouterLink>
        </td>
      </tr>
    </tbody>
    <!-- <tfoot>
      <tr>
        <th colspan="5">Total:</th>
        <th class="card-table__total" colspan="2">1500$</th>
      </tr>
    </tfoot> -->
  </table>
</template>

<style lang="css" scoped>
.table {
  width: 100%;
}

.table__close {
  width: 100%;
}
</style>
