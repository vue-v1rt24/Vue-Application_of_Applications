const formatter = new Intl.NumberFormat('ru-RU', {
  currency: 'rub',
  style: 'currency',
});

export const priceFormatter = (price: number) => formatter.format(price);
