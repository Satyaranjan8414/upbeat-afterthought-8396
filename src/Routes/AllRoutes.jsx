import React from "react";
import { Route, Routes } from "react-router-dom";
// import HomePage from "./HomePage";
// import Hotels from "./Hotels";
// import SingleProduct from "./SingleProduct";
// import CheckoutPage from "./CheckoutPage";
// import CreateHotel from "./CreateHotal";
 import Pagenot from "../pages/Pagenot";
// import CreateAccount from "./SignUp";
import Login from "../pages/Login";
// import ProfileEdit from "./ProfileEdit";
// import ConfirmBooking from "./ConfirmBooking";
// import Trips from "./Trips";
const AllRoutes = () => {
  return (
    <div>
      <Routes>
      
        <Route path="/" element={<Login />} />
        <Route path="*" element={<Pagenot />} />
      </Routes>
    </div>
  );
};

export default AllRoutes;
