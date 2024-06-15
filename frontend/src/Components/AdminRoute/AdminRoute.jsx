// eslint-disable-next-line no-unused-vars
import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";

const AdminRoute = () => {
   const { userInfo } = useSelector((state) => state.auth);

   return userInfo && userInfo.isAdmin ? <Outlet /> : <Navigate to="/login" reaplce />;
};

export default AdminRoute;
