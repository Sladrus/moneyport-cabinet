export const getType = (type) => {
  if (type === 'in') {
    return 'Пополнение';
  }
  if (type === 'out') {
    return 'Вывод';
  }
};
