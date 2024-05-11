import React from 'react';
import { Route, Routes } from 'react-router-dom';
import AppRoutes from './AppRoutes';
import './custom.css';

export default function App() {
  return (
    <>
      <Routes>
        {AppRoutes.map((route, index) => {
          const Page = route.element;
          const Layout = route.layout;
          return <Route path={route.path} element={<Layout><Page /></Layout>} />;
        })}
      </Routes>
    </>
  );
}
