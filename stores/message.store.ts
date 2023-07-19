import { ref } from 'vue';
import { defineStore } from 'pinia';

import { IMessage } from '../types/message.type';

export const useMessageStore = defineStore('message', () => {
  const message = ref<IMessage | null>(null);
  let setTime: undefined | ReturnType<typeof window.setTimeout> = undefined;

  //
  const setMessage = (msg: IMessage) => {
    message.value = msg;

    clearTimeout(setTime);

    setTime = setTimeout(clearMessage, 3000);
  };

  const clearMessage = () => {
    message.value = null;
  };

  //
  return {
    message,
    setMessage,
    clearMessage,
  };
});
