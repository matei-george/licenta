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
import Profile from "./Components/Profile/Profile.jsx";
import ProductList from "./Components/ProductList/ProductList.jsx";
import ProductUpdate from "./Components/ProductUpdate/ProductUpdate.jsx";
import AllProducts from "./Components/AllProducts/AllProducts.jsx";
import Homepage from "./Homepage.jsx";
import Favorite from "./Pages/Favorite/Favorite.jsx";
import ProductDetails from "./Pages/ProductDetails/ProductDetails.jsx";
import Cart from "./Pages/Cos/Cos.jsx";
import Shop from "./Pages/Shop/Shop.jsx";
import Shipping from "./Pages/Comenzi/Shipping.jsx";
import PlaceOrder from "./Components/PlaseazaComanda/PlaceOrder.jsx";
import Order from "./Pages/Comenzi/Order.jsx";
import { PayPalScriptProvider } from "@paypal/react-paypal-js";

const router = createBrowserRouter(
   createRoutesFromElements(
      <Route path="/" element={<App />}>
         <Route path="" element={<PrivateRoute />}>
            <Route path="/profile" element={<Profile />}></Route>
         </Route>

         <Route path="/home" element={<Homepage />}></Route>
         <Route path="/login" element={<Login />}></Route>
         <Route path="/register" element={<Register />}></Route>
         <Route path="/" index={true} element={<Homepage />}></Route>
         <Route path="/favourite" element={<Favorite />}></Route>
         <Route path="/product/:id" element={<ProductDetails />}></Route>
         <Route path="/cart" element={<Cart />}></Route>
         <Route path="/produse" element={<Shop />}></Route>
         <Route path="/shipping" element={<Shipping />}></Route>
         <Route path="/placeorder" element={<PlaceOrder />}></Route>
         <Route path="/order/:id" element={<Order />}></Route>

         {/* Rute admin */}
         <Route path="/admin" element={<AdminRoute />}>
            <Route path="userlist" element={<UserList />}></Route>
            <Route path="categorylist" element={<CategoryList />}></Route>
            <Route path="productlist" element={<ProductList />}></Route>
            <Route path="product/update/:_id" element={<ProductUpdate />}></Route>
            <Route path="allproductslist" element={<AllProducts />}></Route>
         </Route>
      </Route>
   )
);

ReactDOM.createRoot(document.getElementById("root")).render(
   <Provider store={store}>
      <PayPalScriptProvider>
         <RouterProvider router={router} />
      </PayPalScriptProvider>
   </Provider>
);
