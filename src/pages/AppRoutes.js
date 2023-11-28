import React, { useState } from 'react';
import { authRoutes, publicRoutes } from '../routes';
import { Navigate, Route, Routes } from 'react-router-dom';
import AuthProvider from '../providers/AuthProvider';
import ProtectedRoute from './ProtectedRoute';
import Header from '../components/Header';
import HomeMenu from './HomePage/HomeMenu';
import NotAuthRoute from './NotAuthRoute';
import { AUTH_ROUTE } from '../utils/consts';
import DataProvider from '../providers/DataProvider';
import AppBar from '../components/AppBar';
import TabBar from '../components/TabBar';
import RouteProvider from '../providers/RouteProvider';
import ScrollToTop from './ScrollToTop';

const AppRoutes = () => {
  const [open, setOpen] = useState(true);

  return (
    <AuthProvider>
      <RouteProvider>
        <div className="wrapper">
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
                          <Component path={path} nestedRoutes={nestedRoutes} />
                        </ProtectedRoute>
                      }
                      exact
                    />
                  );
                })}
                <Route
                  path="*"
                  element={<Navigate to={AUTH_ROUTE} replace />}
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
  );
};

export default AppRoutes;
