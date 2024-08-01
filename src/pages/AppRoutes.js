import React, { useState } from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import AppBar from "../components/AppBar";
import Header from "../components/Header";
import TabBar from "../components/TabBar";
import AuthProvider from "../providers/AuthProvider";
import DataProvider from "../providers/DataProvider";
import RouteProvider from "../providers/RouteProvider";
import { authRoutes, publicRoutes } from "../routes";
import { AUTH_ROUTE } from "../utils/consts";
import HomeMenu from "./HomePage/HomeMenu";
import NotAuthRoute from "./NotAuthRoute";
import ProtectedRoute from "./ProtectedRoute";
import ScrollToTop from "./ScrollToTop";

const AppRoutes = () => {
  const location = useLocation();

  // console.log(location?.pathname);
  const [open, setOpen] = useState(true);

  return (
    <HelmetProvider>
      <AuthProvider>
        <RouteProvider>
          <div className="wrapper">
            <Helmet>
              <link
                rel="canonical"
                href={`https://app.moneyport.ru${location?.pathname}`}
              />
            </Helmet>
            <DataProvider>
              <NotAuthRoute>
                <HomeMenu open={open} />
              </NotAuthRoute>
              <div className="wrapper-scroll">
                <ScrollToTop />
                <NotAuthRoute>
                  <AppBar />
                  <Header
                    toogleMenu={() => {
                      setOpen(!open);
                    }}
                  />
                </NotAuthRoute>
                <Routes>
                  {publicRoutes.map(({ path, Component }) => {
                    return (
                      <Route
                        index
                        key={path}
                        path={path}
                        element={<Component />}
                        exact
                      />
                    );
                  })}
                  {authRoutes.map(({ path, Component, nestedRoutes }) => {
                    return (
                      <Route
                        key={path}
                        path={path}
                        element={
                          <ProtectedRoute>
                            <Component
                              path={path}
                              nestedRoutes={nestedRoutes}
                            />
                          </ProtectedRoute>
                        }
                        exact
                      />
                    );
                  })}
                  <Route
                    path="*"
                    element={<Navigate to={AUTH_ROUTE} replace />} //поменять
                  />
                </Routes>
                <NotAuthRoute>
                  <TabBar />
                </NotAuthRoute>
              </div>
            </DataProvider>
          </div>
        </RouteProvider>
      </AuthProvider>
    </HelmetProvider>
  );
};

export default AppRoutes;
