import React, { useState } from "react";

// Asseturi
import logo from "../Assets/Images/WebHub_Logo_t.png";
import userIcon from "../Assets/Icons/icons8-user-50.png";
import { FaShoppingCart, FaHeart } from "react-icons/fa"; // Import FaShoppingCart and FaHeart icons

// Componente
import { useSelector, useDispatch } from "react-redux";
import { useLogoutMutation } from "../../redux/api/usersApiSlice";
import { logout } from "../../redux/features/auth/authSlice";
import { Link, useNavigate } from "react-router-dom";
import FavoritesCount from "../FavoritesCount/FavoritesCount";
import { selectCartItemsCount } from "../../redux/features/cart/cartSlice";
import CartCount from "../CartCount/CartCount.jsx";

import "./Navbar.css";
import "../../shared.css";

const Navbar = () => {
   const { userInfo } = useSelector((state) => state.auth);
   const dispatch = useDispatch();
   const navigate = useNavigate();
   const [logoutApiCall] = useLogoutMutation();
   const [dropdownVisible, setDropdownVisible] = useState(false);

   const cartItemsCount = useSelector(selectCartItemsCount);

   const logoutHandler = async () => {
      try {
         await logoutApiCall().unwrap();
         dispatch(logout());
         navigate("/login");
      } catch (error) {
         console.error(error);
      }
   };

   const toggleDropdown = () => {
      setDropdownVisible(!dropdownVisible);
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
                     Produse
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
            <div className="relative flex items-center gap-5 dropdown">
               {userInfo ? (
                  <div className="flex items-center gap-5 relative">
                     <img src={userIcon} alt="user-icon" className="navbar__icons cursor-pointer" onClick={toggleDropdown} />
                     {dropdownVisible && (
                        <div className="dropdown-content absolute right-0 mr-4 mt-1 w-48 shadow-md rounded-lg bg-white">
                           <p className="p-2 border-b text-center font-smibold">{userInfo.username}</p>
                           {userInfo.isAdmin && (
                              <>
                                 <Link to="/admin/dashboard" className="block px-4 py-2 hover:font-bold">
                                    Dashboard
                                 </Link>
                                 <Link to="/admin/productlist" className="block px-4 py-2 hover:font-bold">
                                    Produse
                                 </Link>
                                 <Link to="/admin/categorylist" className="block px-4 py-2 hover:font-bold">
                                    Categorii
                                 </Link>
                                 <Link to="/admin/orderlist" className="block px-4 py-2 hover:font-bold">
                                    Comenzi
                                 </Link>
                                 <Link to="/admin/userlist" className="block px-4 py-2 hover:font-bold">
                                    Utilizatori
                                 </Link>
                              </>
                           )}
                           <Link to="/profile" className="block px-4 py-2 hover:font-bold">
                              Profil
                           </Link>
                           <button onClick={logoutHandler} className="w-full text-center p-2 hover:font-bold delogare-button">
                              Delogare
                           </button>
                        </div>
                     )}
                  </div>
               ) : (
                  <Link to="/login">
                     <img src={userIcon} alt="user-icon" className="navbar__icons" />
                  </Link>
               )}
            </div>
            <div className="flex items-center gap-5 mr-12 ">
               <FavoritesCount />
               <Link to="/favourite" className="navbar__icons">
                  <FaHeart className="text-white text-3xl relative mt-1 ml-2" style={{ stroke: "black", strokeWidth: "25px" }} /> {/* Use FaHeart icon with black outline */}
               </Link>
               <Link to="/cart" className="text-white flex items-center">
                  <FaShoppingCart className="text-white text-3xl" style={{ stroke: "black", strokeWidth: "25px" }} />
                  {cartItemsCount > 0 && <span className="cart-count absolute top-4 right-0 bg-white text-black rounded-full px-1 py-0 text-xs">{cartItemsCount}</span>}
               </Link>
            </div>
         </div>
      </nav>
   );
};

export default Navbar;
