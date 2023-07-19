<script setup lang="ts">
import { reactive } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { useAuthStore } from '../stores/auth.store';
import { useMessageStore } from '../stores/message.store';

import { errorUtil } from '../utils/error.util';
import { EnumType } from '../types/message.type';
import { TypeError } from '../types/error.type';

//
const store = useAuthStore();
const messageStore = useMessageStore();

//
const route = useRoute();
const router = useRouter();

//
const dataForm = reactive({
  email: 'w@w.ww',
  password: '123',
});

//
const loginHandle = async () => {
  try {
    await store.login(dataForm);
    router.push({ name: 'home' });
  } catch (error) {}
};

//
if (route.query.message) {
  messageStore.setMessage({
    value: errorUtil(route.query.message as TypeError),
    type: EnumType.WARNING,
  });
}
</script>

<template>
  <form class="auth" @submit.prevent="loginHandle">
    <h1 class="auth__h1">Войти в систему</h1>

    <div class="form_control">
      <label for="email">Почта</label>
      <input type="email" id="email" v-model="dataForm.email" />
    </div>

    <div class="form_control">
      <label for="password">Пароль</label>
      <input type="password" id="password" v-model="dataForm.password" />
    </div>

    <button type="submit">Войти</button>
  </form>
</template>

<style lang="css" scoped>
.auth {
  width: 600px;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
  margin: 0 auto;
}
</style>
../types/error.type
