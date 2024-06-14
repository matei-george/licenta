// eslint-disable-next-line no-unused-vars
import React from "react";
import "./Navbar.css";
import "../../shared.css";
import logo from "../Assets/Images/WebHub_Logo_t.png";
import userIcon from "../Assets/Icons/icons8-user-50.png";
import cart from "../Assets/Icons/icons8-shopping-cart-50.png";
import favourite from "../Assets/Icons/icons8-heart-50.png";

import { useSelector, useDispatch } from "react-redux";
import { useLoginMutation } from "../../redux/api/usersApiSlice";
import { logout } from "../../redux/features/auth/authSlice";
import { Link, useNavigate } from "react-router-dom";

export const Navbar = () => {
   const { userInfo } = useSelector((state) => state.auth);
   const dispatch = useDispatch();
   const navigate = useNavigate();

   const [logoutApiCall] = useLoginMutation();

   const logoutHandler = async () => {
      try {
         await logoutApiCall().unwrap();
         dispatch(logout());
         navigate("/login");
      } catch (error) {
         console.error(error);
      }
   };

   return (
      <nav className="navbar shadow-xl p-2 mt-6">
         <div className="container mx-auto flex justify-between items-center">
            <div className="flex items-center">
               <img src={logo} alt="Logo" className="navbar__logo mr-14" />
               <span className="font-bold text-3xl navbar__title">Webhub</span>
            </div>
            <ul className="flex flex-1 justify-center gap-4">
               <li className="mr-6">
                  <Link to="/" className="nav-link font-semibold text-lg">
                     Acasă
                  </Link>
               </li>
               <li className="mr-6">
                  <Link to="/produse" className="nav-link font-semibold text-lg">
                     Toate Produsele
                  </Link>
               </li>
               <li className="mr-6">
                  <Link to="/categorii" className="nav-link font-semibold text-lg">
                     Categorii
                  </Link>
               </li>
               <li className="mr-6">
                  <Link to="/despre" className="nav-link font-semibold text-lg">
                     Despre
                  </Link>
               </li>
               <li className="mr-6">
                  <Link to="/contact" className="nav-link font-semibold text-lg">
                     Contact
                  </Link>
               </li>
            </ul>
            <div className="relative">
               {userInfo ? (
                  <div className="flex items-center gap-5">
                     <span className="text-black">{userInfo.username}</span>
                     <button onClick={logoutHandler} className="text-black font-semibold">
                        Logout
                     </button>
                  </div>
               ) : (
                  <Link to="/login">
                     <img src={userIcon} alt="user-icon" className="navbar__icons" />
                  </Link>
               )}
            </div>
            <div className="flex items-center gap-5 mr-12">
               <Link to="/favourite">
                  <img src={favourite} alt="favourite-icon" className="navbar__icons" />
               </Link>
               <Link to="/cart">
                  <img src={cart} alt="cart-icon" className="navbar__icons" />
               </Link>
            </div>
         </div>
      </nav>
   );
};
