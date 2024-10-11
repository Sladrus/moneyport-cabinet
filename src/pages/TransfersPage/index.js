import React, { useContext, useEffect } from "react";
import {
  CASH_ROUTE,
  COMPANY_TRANS_ROUTE,
  PHYS_TRANS_ROUTE,
  RECEPTION_ROUTE,
} from "../../utils/consts";
import CashWithdrawPage from "../CashWithdrawPage";
import CompanyTransfersPage from "../CompanyTransfersPage";
import PhysicalTransfersPage from "../PhysicalTransfersPage";
import ReceptionFromAbroadPage from "../ReceptionFromAbroadPage";
import { TransferTabs } from "./TransferTabs";
import TransfersContent from "./TransfersContent";

import { useNavigate } from "react-router-dom";
import Breadcrumbs from "../../components/Breadcrumbs";
import Spinner from "../../components/Spinner";
import { ApiContext, DataContext, RouteContext } from "../../context/context";
import PreOrderCashContent from "../CashWithdrawPage/PreOrderCashContent";
import PreOrderCompanyContent from "../CompanyTransfersPage/PreOrderCompanyContent";
import PreOrderPhysicalContent from "../PhysicalTransfersPage/PreOrderPhysicalContent";
import PreOrderFromAbroadContent from "../ReceptionFromAbroadPage/PreOrderFromAbroadContent";
import "./TransfersPage.css";

const tabs = [
  {
    id: 1,
    title: "Переводы физлицу",
    PreOrderComponent: PreOrderPhysicalContent,
    Component: PhysicalTransfersPage,
    path: PHYS_TRANS_ROUTE,
  },
  {
    id: 2,
    title: "Переводы юрлицу",
    PreOrderComponent: PreOrderCompanyContent,
    Component: CompanyTransfersPage,
    path: COMPANY_TRANS_ROUTE,
  },
  {
    id: 3,
    title: "Прием из-за рубежа",
    PreOrderComponent: PreOrderFromAbroadContent,
    Component: ReceptionFromAbroadPage,
    path: RECEPTION_ROUTE,
  },
  {
    id: 4,
    title: "Выдача наличных",
    PreOrderComponent: PreOrderCashContent,
    Component: CashWithdrawPage,
    path: CASH_ROUTE,
  },
];

const TransfersPage = () => {
  const { setSelectedSubItem, selectedSubItem, selectedMenuItem } =
    useContext(RouteContext);
  const { order, setOrder, chat, chatLoading, getChat } =
    useContext(DataContext);
  const { getChatLoading } = useContext(ApiContext);

  useEffect(() => {
    setOrder();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedSubItem]);

  const navigate = useNavigate();

  useEffect(() => {
    if (!selectedSubItem) {
      setSelectedSubItem({ id: 1, title: "Перевод юрлицу" });
    }
  }, []);

  if (chat?.error) {
    return (
      <div className="transfers-page">
        <div style={{ padding: "0 24px" }}>
          <Breadcrumbs />
        </div>
        <div className="transfers-page-error">
          <span>
            Произошла ошибка. Свяжитесь с{" "}
            <a href={"https://t.me/mpstart"} rel="noreferrer" target="_blank">
              https://t.me/mpstart
            </a>{" "}
            для получения помощи.
          </span>
        </div>
      </div>
    );
  }

  return (
    <div className="transfers-page">
      <div
        style={{
          padding: "0 24px",
          display: "flex",
          alignItems: "end",
          justifyContent: "space-between",
        }}
      >
        <Breadcrumbs />
        {/* <div style={{ padding: '6px 0' }}>
          <LargeTextButton
            value={'Контрагенты'}
            icon={<SuitcaseIcon />}
            onClick={() => navigate(COUNTERPARTIES_ROUTE)}
          />
        </div> */}
      </div>

      <div className="transfers-page-content">
        <TransferTabs
          tabs={tabs}
          activeTab={selectedSubItem}
          setActiveTab={setSelectedSubItem}
        />
        {getChatLoading ? (
          <div className="transfers-page-loading">
            <Spinner />
          </div>
        ) : (
          <TransfersContent tabs={tabs} activeTab={selectedSubItem} />
        )}
      </div>
    </div>
  );
};

export default TransfersPage;
