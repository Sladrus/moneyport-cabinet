import React, { useContext, useEffect, useState } from 'react';

import './BalancesList.css';
import { DataContext } from '../../../context/context';
import BalanceItem from '../../../components/Balances/BalanceItem';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import Spinner from '../../../components/Spinner';

const BalancesList = () => {
  const { balances, balancesLoading, getBalances } = useContext(DataContext);

  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(15);

  useEffect(() => {
    setPage(1);
    setLimit(15);
    getBalances({ limit, page });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <div className={`balances-page-list`}>
        {balancesLoading ? (
          <div className="skeleton">
            {/* <Skeleton inline count={11} height={68} borderRadius={16} /> */}
            <Spinner />
          </div>
        ) : (
          balances?.data?.map(
            ({ id, title, amount, icon, code, sign }, index) => {
              return (
                <BalanceItem
                  open={true}
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
