import React, { useContext, useEffect } from "react";

import "react-loading-skeleton/dist/skeleton.css";
import BalanceItem from "../../../components/Balances/BalanceItem";
import EmptyBalances from "../../../components/History/EmptyBalances";
import Spinner from "../../../components/Spinner";
import { ApiContext, AuthContext, DataContext } from "../../../context/context";
import "./BalancesList.css";

const BalancesList = () => {
  const { balances } = useContext(DataContext);

  const { getBalances, getBalancesLoading } = useContext(ApiContext);

  useEffect(() => {
    // getBalances({ variables: { user_id: 1 } });
    // getBalances({ limit, page });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <div className={`balances-page-list`}>
        {getBalancesLoading && !balances?.data?.length ? (
          <div className="skeleton">
            {/* <Skeleton inline count={11} height={68} borderRadius={16} /> */}
            <Spinner />
          </div>
        ) : balances?.length > 0 ? (
          balances?.map((balance, index) => {
            return <BalanceItem open={true} key={index} {...balance} />;
          })
        ) : (
          !getBalancesLoading && <EmptyBalances />
        )}
      </div>
    </>
  );
};

export default BalancesList;
