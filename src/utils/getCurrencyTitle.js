import { ReactComponent as RubIcon } from '../assets/icons/currency/RUB.svg';
import { ReactComponent as UsdIcon } from '../assets/icons/currency/USD.svg';
import { ReactComponent as EurIcon } from '../assets/icons/currency/EUR.svg';
import { ReactComponent as UsdtIcon } from '../assets/icons/currency/USDT.svg';
import { ReactComponent as AedIcon } from '../assets/icons/currency/AED.svg';
import { ReactComponent as GbpIcon } from '../assets/icons/currency/GBP.svg';
import { ReactComponent as TryIcon } from '../assets/icons/currency/TRY.svg';
import { ReactComponent as CnyIcon } from '../assets/icons/currency/CNY.svg';
import { ReactComponent as KrwIcon } from '../assets/icons/currency/KRW.svg';

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
    code: 'GBP',
    icon: <GbpIcon className="history-item-currency" />,
  },
  {
    title: 'Турецкие лиры',
    code: 'TRY',
    icon: <TryIcon className="history-item-currency" />,
  },
  {
    title: 'Турецкие лиры',
    code: 'JPY',
    icon: <CnyIcon className="history-item-currency" />,
  },
  {
    title: 'Турецкие лиры',
    code: 'CNY',
    icon: <CnyIcon className="history-item-currency" />,
  },
  {
    title: 'Турецкие лиры',
    code: 'KRW',
    icon: <KrwIcon className="history-item-currency" />,
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
