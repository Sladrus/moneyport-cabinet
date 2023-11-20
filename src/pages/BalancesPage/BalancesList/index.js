import React, { useContext, useEffect } from 'react';

import './BalancesList.css';
import { DataContext } from '../../../context/context';
import BalanceItem from '../../../components/Balances/BalanceItem';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

const BalancesList = () => {
  const { balances, balancesLoading, getBalances } = useContext(DataContext);

  useEffect(() => {
    getBalances();
  }, []);

  console.log(balancesLoading);

  return (
    <>
      <div className={`balances-page-list`}>
        {balancesLoading ? (
          <Skeleton
            style={{ marginBottom: '16px' }}
            count={10}
            height={76}
            borderRadius={16}
          />
        ) : (
          balances?.map(({ id, title, amount, icon, code, sign }, index) => {
            return (
              <BalanceItem
                key={index}
                title={title}
                amount={amount}
                sign={sign}
                // icon={icon}
                code={code}
              />
            );
          })
        )}
      </div>
    </>
  );
};

export default BalancesList;
