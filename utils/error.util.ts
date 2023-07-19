import { TypeError } from '../types/error.type';

const ERROR_CODES = {
  login: 'Авторизуйтесь',
  logout: 'Вы вышли из системы',
};

export const errorUtil = (code: TypeError) =>
  ERROR_CODES[code] ? ERROR_CODES[code] : 'Неизвестная ошибка';
