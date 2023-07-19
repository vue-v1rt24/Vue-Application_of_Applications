import { ref } from 'vue';
import { defineStore } from 'pinia';
import { useMessageStore } from './message.store';

import { IRequest } from '../types/request.type';
import { EnumType } from '../types/message.type';

export const useRequestStore = defineStore('request', () => {
  const request = ref<IRequest[]>([]);

  //
  const create = async (dataForm: IRequest) => {
    const store = useMessageStore();

    try {
      const res = await fetch(`${import.meta.env.VITE_SERVER_URL}/requests`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json; charset=UTF-8',
        },
        body: JSON.stringify(dataForm),
      });

      const data: IRequest = await res.json();
      request.value.push({ ...dataForm, id: data.id });

      store.setMessage({
        value: 'Заявка успешно создана',
        type: EnumType.PRIMARY,
      });
    } catch (error) {
      store.setMessage({
        value: 'Ошибка при создании заявки',
        type: EnumType.DANGER,
      });
    }
  };

  const load = async () => {
    const store = useMessageStore();

    try {
      const res = await fetch(`${import.meta.env.VITE_SERVER_URL}/requests`);
      const data: IRequest[] = await res.json();

      request.value = data;
    } catch (error) {
      store.setMessage({
        value: 'Ошибка при получении данных',
        type: EnumType.DANGER,
      });
    }
  };

  const loadById = async (id: string) => {
    const store = useMessageStore();

    try {
      const res = await fetch(`${import.meta.env.VITE_SERVER_URL}/requests/${id}`);
      const data: IRequest = await res.json();

      return data;
    } catch (error) {
      store.setMessage({
        value: 'Ошибка при получении данных',
        type: EnumType.DANGER,
      });
    }
  };

  const update = async (request: IRequest) => {
    const store = useMessageStore();

    try {
      await fetch(`${import.meta.env.VITE_SERVER_URL}/requests/${request.id}`, {
        headers: {
          'Content-Type': 'application/json; charset=UTF-8',
        },
        method: 'PATCH',
        body: JSON.stringify(request),
      });

      store.setMessage({
        value: 'Заявка обновлена',
        type: EnumType.PRIMARY,
      });
    } catch (error) {
      store.setMessage({
        value: 'Ошибка обновления данных',
        type: EnumType.DANGER,
      });
    }
  };

  const remove = async (id: string) => {
    const store = useMessageStore();

    try {
      await fetch(`${import.meta.env.VITE_SERVER_URL}/requests/${id}`, {
        method: 'DELETE',
      });

      store.setMessage({
        value: 'Заявка удалена',
        type: EnumType.PRIMARY,
      });
    } catch (error) {
      store.setMessage({
        value: 'Ошибка удаления данных',
        type: EnumType.DANGER,
      });
    }
  };

  //
  return {
    request,
    create,
    load,
    loadById,
    update,
    remove,
  };
});
