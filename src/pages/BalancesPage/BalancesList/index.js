import React, { useContext, useEffect, useState } from 'react';

import './BalancesList.css';
import { DataContext } from '../../../context/context';
import BalanceItem from '../../../components/Balances/BalanceItem';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

const BalancesList = () => {
  const { balances, balancesLoading, getBalances } = useContext(DataContext);

  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(15);

  useEffect(() => {
    getBalances({ limit, page });
  }, []);

  console.log(balancesLoading);

  return (
    <>
      <div className={`balances-page-list`}>
        {balancesLoading ? (
          <div className="skeleton">
            <Skeleton inline count={11} height={68} borderRadius={16} />
          </div>
        ) : (
          balances?.data?.map(
            ({ id, title, amount, icon, code, sign }, index) => {
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
            }
          )
        )}
      </div>
    </>
  );
};

export default BalancesList;
