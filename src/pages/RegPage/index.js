import React from "react";
import { Helmet } from "react-helmet-async";
import { useLocation } from "react-router-dom";
import Mockup from "../../components/Mockup";
import RegForm from "./RegForm";
import "./RegPage.css";

const RegPage = () => {
  return (
    <div className="reg-page">
      <RegForm className="reg-form" />
      <Mockup className="mockup" />
    </div>
  );
};

export default RegPage;
