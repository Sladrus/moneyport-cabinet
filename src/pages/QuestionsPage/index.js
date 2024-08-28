import React from "react";

import "./QuestionsPage.css";

import Breadcrumbs from "../../components/Breadcrumbs";
import QuestionsList from "./QuestionsList";
// import LargeButton from '../../components/Buttons/LargeButton';

const QuestionsPage = () => {
  // const { balances } = useContext(DataContext);

  return (
    <div className="questions-page">
      <div className="questions-page-content">
        <Breadcrumbs />
        <QuestionsList />
      </div>
    </div>
  );
};

export default QuestionsPage;
