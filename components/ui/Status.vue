<script setup lang="ts">
import { EnumStatusRequest } from '../../types/request.type';

//
defineProps<{
  status: EnumStatusRequest;
}>();

//
const textMap = {
  done: 'Завершён',
  cancelled: 'Отменён',
  active: 'Активен',
  pending: 'Выполняется',
};
</script>

<template>
  <span :class="['badge', status]">
    {{ textMap[status] }}
  </span>
</template>

<style lang="css" scoped>
.badge {
  font-size: 14px;
}

.badge.done {
  color: rgb(13, 104, 31);
}

.badge.cancelled {
  color: rgb(194, 15, 6);
}

.badge.active {
  color: rgb(6, 194, 44);
}

.badge.pending {
  color: rgb(194, 150, 6);
}
</style>
