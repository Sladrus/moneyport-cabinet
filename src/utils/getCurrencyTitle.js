import { ReactComponent as RubIcon } from '../assets/icons/currency/RUB.svg';
import { ReactComponent as UsdIcon } from '../assets/icons/currency/USD.svg';
import { ReactComponent as EurIcon } from '../assets/icons/currency/EUR.svg';
import { ReactComponent as UsdtIcon } from '../assets/icons/currency/USDT.svg';
import { ReactComponent as AedIcon } from '../assets/icons/currency/AED.svg';
import { ReactComponent as GbrIcon } from '../assets/icons/currency/GBR.svg';
import { ReactComponent as TryIcon } from '../assets/icons/currency/TRY.svg';

const currencies = [
  {
    title: 'Рубли',
    code: 'RUB',
    icon: <RubIcon className="history-item-currency" />,
  },
  {
    title: 'Доллары',
    code: 'USD',
    icon: <UsdIcon className="history-item-currency" />,
  },
  {
    title: 'Евро',
    code: 'EUR',
    icon: <EurIcon className="history-item-currency" />,
  },
  {
    title: 'Tether',
    code: 'USDT',
    icon: <UsdtIcon className="history-item-currency" />,
  },
  {
    title: 'Дирхамы',
    code: 'AED',
    icon: <AedIcon className="history-item-currency" />,
  },
  {
    title: 'Фунты',
    code: 'GBR',
    icon: <GbrIcon className="history-item-currency" />,
  },
  {
    title: 'Турецкие лиры',
    code: 'TRY',
    icon: <TryIcon className="history-item-currency" />,
  },
  {
    title: 'Турецкие лиры',
    code: 'JPY',
    icon: <TryIcon className="history-item-currency" />, //ИКОНКА НЕ ТА
  },
  {
    title: 'Турецкие лиры',
    code: 'KRW',
    icon: <TryIcon className="history-item-currency" />, //ИКОНКА НЕ ТА
  },
  {
    title: 'Турецкие лиры',
    code: 'CAD',
    icon: <TryIcon className="history-item-currency" />, //ИКОНКА НЕ ТА
  },
];

export const getCurrencyTitle = (code) => {
  const currency = currencies.find((item) => item.code === code);
  return currency;
};
