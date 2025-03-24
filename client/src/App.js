/**
 * 
 * רשימת החבילות צד שלישי שהתקנתי
npm install sweetalert2
npm install @fortawesome/fontawesome-svg-core @fortawesome/free-brands-svg-icons @fortawesome/free-solid-svg-icons @fortawesome/react-fontawesome
npm react-script
npm react-scripts
npm install react-toastify
npm install react-router-dom
npm install @mui/material @emotion/react @emotion/styled
 *
 *
 * 
 * 
 */

import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// logic
import { AppEndPoints, LOCAL_SERVER } from "./consts";
import { fetchFromServer } from "./logic/fetch";

// pages
import Home from "./pages/home/Home";
import ViewInvoice from "./pages/invoice/ViewInvoice";
import CreateInvoiceForm from "./pages/CreateInvoiceForm";
import Profile from "./pages/Profile";
import PageNotFound from "./pages/PageNotFound";
import Header from "./components/header/Header";
import Footer from "./components/footer/footer-page";
import BoxInvoice from "./components/home/box-invoice";
import Invoice from "./pages/invoice/invoice";
import ProtectedRoute from "./pages/ProtectedRoute";
import Auth from "./pages/auth/auth";
import "./App.css"



function App() {
  return (
    <div className="root">
      <ToastContainer />
      <Header />
      <main className="main">
        <Routes>
          <Route exact path={AppEndPoints.HOME} element={<Home />} />

          <Route
            exact
            path={`${AppEndPoints.INVOICE}/:invoice_id`}
            element={<ProtectedRoute element={<Invoice />} />}
          />
          <Route
            exact
            path={AppEndPoints.FORM}
            element={<CreateInvoiceForm />}
          />
          <Route exact path={AppEndPoints.PROFILE} element={<Profile />} />
          <Route exact path="*" element={<PageNotFound />} />
          <Route exact path={AppEndPoints.HOME_DEFAULT} element={<Home />} />
          <Route exact path={AppEndPoints.AUTH} element={<Auth />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;