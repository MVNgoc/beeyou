import React from 'react';
import { Routes, Route } from 'react-router-dom';
import MasterLayout from '../layouts/MasterLayout';
import HomePage from '../pages/HomePage';

const routes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<MasterLayout type="header" />}>
          <Route
            index
            element={
              <React.Suspense>
                <HomePage />
              </React.Suspense>
            }
          />
        </Route>
      </Routes>
    </>
  );
};

export default routes;
