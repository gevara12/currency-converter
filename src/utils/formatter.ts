export const formatter = (currency: string, value: number) => {
  return Intl.NumberFormat('ru-RU', {
    style: 'currency',
    currency: currency,
  }).format(value);
};
