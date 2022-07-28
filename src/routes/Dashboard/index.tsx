import React, { FunctionComponent } from "react";
import { Routes, Route } from 'react-router-dom';

interface DashboardRoutesProps {}

const DashboardRoutes: FunctionComponent<DashboardRoutesProps> = () => {
  return (
    <Routes>
      <Route path="/path1" element={<h1>Path 1</h1>} />
      <Route path="/path2" element={<h1>Path 2</h1>} />
    </Routes>
  );
};

export default DashboardRoutes;