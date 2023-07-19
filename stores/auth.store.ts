import { ref, computed } from 'vue';
import { defineStore } from 'pinia';

import { useMessageStore } from './message.store';
import { IAuth } from '../types/auth.type';
import { EnumType } from '../types/message.type';

const tokenJwtKey = 'jwt-token';

export const useAuthStore = defineStore('auth', () => {
  const token = ref<string | null>(localStorage.getItem(tokenJwtKey));

  //
  const isAuth = computed(() => !!token.value);

  //
  const login = async ({ email, password }: IAuth) => {
    const messageStore = useMessageStore();

    try {
      console.log(email, password);
      token.value = 'token';
      localStorage.setItem(tokenJwtKey, 'token');

      messageStore.clearMessage();
    } catch (error) {
      // messageStore.setMessage({ value: error.message, type: EnumType.DANGER });
      messageStore.setMessage({ value: 'Пользователь не найден', type: EnumType.DANGER });
      // console.log(error);
      throw new Error();
    }
  };

  const logout = () => {
    token.value = null;
    localStorage.removeItem(tokenJwtKey);
  };

  //
  return {
    token,
    isAuth,
    login,
    logout,
  };
});
