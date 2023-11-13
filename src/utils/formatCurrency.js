export const formatCurrency = (amount, code) => {
  const currencies = [
    { code: 'RUB', value: '₽' },
    { code: 'USD', value: '$' },
    { code: 'EUR', value: '€' },
    { code: 'USDT', value: '₮' },
    { code: 'AED', value: 'د.إ' },
    { code: 'GBR', value: '£' },
    { code: 'TRY', value: '₺' },
  ];

  const currency = currencies.find((currency) => currency.code === code);
  const formatedAmount = amount.toLocaleString('ru-RU', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });
  if (currency) {
    return `${formatedAmount} ${currency.value}`;
  } else {
    return formatedAmount;
  }
};
