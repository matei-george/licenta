import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { Route, RouterProvider, createRoutesFromElements } from "react-router";
import { createBrowserRouter } from "react-router-dom";
import { PayPalScriptProvider } from "@paypal/react-paypal-js";
import { Provider } from "react-redux";
import store from "./redux/store.js";

// Rute esentiale
import PrivateRoute from "./Components/PrivateRoutes/PrivateRoute.jsx";
import AdminRoute from "./Components/AdminRoute/AdminRoute.jsx";

// Componente admin
import UserList from "./Components/UserList/UserList.jsx";
import CategoryList from "./Components/CategoryList/CategoryList.jsx";
import ProductList from "./Components/ProductList/ProductList.jsx";
import ProductUpdate from "./Components/ProductUpdate/ProductUpdate.jsx";
import AllProducts from "./Components/AllProducts/AllProducts.jsx";
import OrderList from "./Components/OrderList/OrderList.jsx";
import AdminDashboard from "./Components/AdminDashboard/AdminDashboard.jsx";

// Componente user
import Login from "./Pages/Login/Login.jsx";
import Register from "./Pages/Register/Register.jsx";
import Profile from "./Components/Profile/Profile.jsx";
import Homepage from "./Homepage.jsx";
import Favorite from "./Pages/Favorite/Favorite.jsx";
import ProductDetails from "./Pages/ProductDetails/ProductDetails.jsx";
import Cart from "./Pages/Cos/Cos.jsx";
import Shop from "./Pages/Shop/Shop.jsx";
import Shipping from "./Pages/Comenzi/Shipping.jsx";
import PlaceOrder from "./Components/PlaseazaComanda/PlaceOrder.jsx";
import Order from "./Pages/Comenzi/Order.jsx";
import UserOrder from "./Pages/Comenzi/UserOrder.jsx";
import Politica from "./Pages/PoliticaConf/Politica.jsx";
import Despre from "./Pages/Despre/Despre.jsx";
import Copyright from "./Pages/Copyright/Copyright.jsx";
import TermeniCond from "./Pages/TermeniCond/TermeniCond.jsx";
import Contact from "./Pages/Contact/Contact.jsx";
import FAQ from "./Pages/FAQ/FAQ.jsx";
import GhidUtilizare from "./Pages/GhidUtilizare/GhidUtilizare.jsx";

const router = createBrowserRouter(
   createRoutesFromElements(
      <Route path="/" element={<App />}>
         {/* Public Routes */}
         <Route path="/home" element={<Homepage />} />
         <Route path="/login" element={<Login />} />
         <Route path="/register" element={<Register />} />
         <Route path="/" index element={<Homepage />} />
         <Route path="/favourite" element={<Favorite />} />
         <Route path="/product/:id" element={<ProductDetails />} />
         <Route path="/cart" element={<Cart />} />
         <Route path="/produse" element={<Shop />} />
         <Route path="/shipping" element={<Shipping />} />
         <Route path="/placeorder" element={<PlaceOrder />} />
         <Route path="/order/:id" element={<Order />} />
         <Route path="/user-orders" element={<UserOrder />} />
         <Route path="/politica" element={<Politica />} />
         <Route path="/despre" element={<Despre />} />
         <Route path="/copyright" element={<Copyright />} />
         <Route path="/termeni" element={<TermeniCond />} />
         <Route path="/contact" element={<Contact />} />
         <Route path="/faq" element={<FAQ />} />
         <Route path="/ghid" element={<GhidUtilizare />} />

         {/* Private Routes */}
         <Route path="" element={<PrivateRoute />}>
            <Route path="/profile" element={<Profile />} />
         </Route>

         {/* Admin Routes */}
         <Route path="/admin" element={<AdminRoute />}>
            <Route path="userlist" element={<UserList />} />
            <Route path="categorylist" element={<CategoryList />} />
            <Route path="productlist" element={<ProductList />} />
            <Route path="product/update/:_id" element={<ProductUpdate />} />
            <Route path="allproductslist" element={<AllProducts />} />
            <Route path="orderlist" element={<OrderList />} />
            <Route path="dashboard" element={<AdminDashboard />} />
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
