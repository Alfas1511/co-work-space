import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import WorkSpaceLayout from "./components/WorkSpaceLayout/WorkSpaceLayout";
import AccountsLayout from "./components/AccountSolutionsLayout/AccountsLayout";

import Home from "./pages/WorkSpace/Home";
import AccountsSolutions from "./pages/AccountSolutions/AccountSolutions";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function App() {
  return (
    <Router>
      <Routes>

        {/* Workspace Pages */}
        <Route element={<WorkSpaceLayout />}>
          <Route path="/" element={<Home />} />
        </Route>

        {/* Accounts Pages */}
        <Route element={<AccountsLayout />}>
          <Route path="/accounts-solutions" element={<AccountsSolutions />} />
        </Route>

      </Routes>
    </Router>
  );
}