import React, { useContext } from "react";

import Breadcrumbs from "../../components/Breadcrumbs";
import { ApiContext, DataContext } from "../../context/context";
import BalancesList from "./BalancesList";
import "./BalancesPage.css";
// import LargeButton from '../../components/Buttons/LargeButton';

const BalancesPage = () => {
  const { getBalances, getBalancesLoading } = useContext(ApiContext);

  const { balancesPagination } = useContext(DataContext);

  // const handleClickLoadMore = (e) => {
  //   e?.preventDefault();
  //   if (balancesPagination?.next_cursor)
  //     getBalances({
  //       variables: {
  //         user_id: 1,
  //         next_cursor: balancesPagination?.next_cursor,
  //       },
  //     });
  // };

  return (
    <div className="balances-page">
      <div className="balances-page-content">
        <Breadcrumbs />
        <BalancesList />
        {/* {!balancesPagination?.next_cursor && (
          <div className="balances-page-content-button">
            <LargeButton
              disabled={getBalancesLoading}
              text={"Показать еще"}
              variant="outlined"
              onClick={handleClickLoadMore}
            />
          </div>
        )} */}
      </div>
    </div>
  );
};

export default BalancesPage;
