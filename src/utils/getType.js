export const getType = (type) => {
  if (type === 'in') {
    return 'Вывод';
  }
  if (type === 'out') {
    return 'Пополнение';
  }
};
