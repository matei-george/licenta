// eslint-disable-next-line no-unused-vars
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { Route, RouterProvider, createRoutesFromElements } from "react-router";
import { createBrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./redux/store.js";
import PrivateRoute from "./Components/PrivateRoutes/PrivateRoute.jsx";
import AdminRoute from "./Components/AdminRoute/AdminRoute.jsx";
import UserList from "./Components/UserList/UserList.jsx";
import CategoryList from "./Components/CategoryList/CategoryList.jsx";

import Login from "./Pages/Login/Login.jsx";
import Register from "./Pages/Register/Register.jsx";
import Homepage from "./Pages/Homepage/Homepage.jsx";
import Profile from "./Components/Profile/Profile.jsx";
import ProductList from "./Pages/ProductList/ProductList.jsx";

const router = createBrowserRouter(
   createRoutesFromElements(
      <Route path="/" element={<App />}>
         <Route path="" element={<PrivateRoute />}>
            <Route path="/profile" element={<Profile />}></Route>
         </Route>

         <Route path="/home" element={<Homepage />}></Route>
         <Route path="/login" element={<Login />}></Route>
         <Route path="/register" element={<Register />}></Route>

         {/* Rute admin */}
         <Route path="/admin" element={<AdminRoute />}>
            <Route path="userlist" element={<UserList />}></Route>
            <Route path="categorylist" element={<CategoryList />}></Route>
            <Route path="productlist" element={<ProductList />}></Route>
         </Route>
      </Route>
   )
);

ReactDOM.createRoot(document.getElementById("root")).render(
   <Provider store={store}>
      <RouterProvider router={router} />
   </Provider>
);
