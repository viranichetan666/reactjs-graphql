import React, { FunctionComponent } from "react";
import { Routes, Route } from 'react-router-dom';
import MainLayout from 'containers/MainLayout';
import Login from 'containers/Auth/Login';
import Register from 'containers/Auth/Register';

interface AppRoutesProps {}

const AppRoutes: FunctionComponent<AppRoutesProps> = () => {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/dashboard/*" element={<MainLayout />} />
    </Routes>
  );
};

export default AppRoutes;