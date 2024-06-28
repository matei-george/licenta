import React, { useState } from "react";

// Asseturi
import logo from "../Assets/Images/WebHub_Logo_t.png";
import userIcon from "../Assets/Icons/icons8-user-50.png";

// Componente
import { useSelector, useDispatch } from "react-redux";
import { useLogoutMutation } from "../../redux/api/usersApiSlice";
import { logout } from "../../redux/features/auth/authSlice";
import { Link, useNavigate, NavLink } from "react-router-dom";

import "./AdminNavbar.css";
import "../../shared.css";

const AdminNavbar = () => {
   const { userInfo } = useSelector((state) => state.auth);
   const dispatch = useDispatch();
   const navigate = useNavigate();
   const [logoutApiCall] = useLogoutMutation();
   const [dropdownVisible, setDropdownVisible] = useState(false);

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
               <span className="font-bold text-3xl navbar__title">WebHub</span>
               <span className="font-semibold text-xs adm__subtitle">ADMIN PANEL</span>
            </div>
            <ul className="flex flex-1 justify-center gap-4">
               {userInfo && userInfo.isAdmin && (
                  <>
                     <li className="mr-6">
                        <NavLink to="/admin/dashboard" className="nav-link font-semibold text-lg" activeClassName="active">
                           Dashboard
                        </NavLink>
                     </li>
                     <li className="mr-6">
                        <NavLink to="/admin/categorylist" className="nav-link font-semibold text-lg" activeClassName="active">
                           Gestionează categoriile
                        </NavLink>
                     </li>
                     <li className="mr-6">
                        <NavLink to="/admin/productlist" className="nav-link font-semibold text-lg" activeClassName="active">
                           Crează produs
                        </NavLink>
                     </li>
                     <li className="mr-6">
                        <NavLink to="/admin/allproductslist" className="nav-link font-semibold text-lg" activeClassName="active">
                           Gestionează produsele
                        </NavLink>
                     </li>
                     <li className="mr-6">
                        <NavLink to="/admin/userlist" className="nav-link font-semibold text-lg" activeClassName="active">
                           Gestionează utilizatorii
                        </NavLink>
                     </li>
                     <li className="mr-6">
                        <NavLink to="/admin/orderlist" className="nav-link font-semibold text-lg" activeClassName="active">
                           Gestionează comenzile
                        </NavLink>
                     </li>
                  </>
               )}
            </ul>
            <div className="relative flex items-center gap-5 dropdown">
               {userInfo ? (
                  <div className="flex items-center gap-5 relative">
                     <img src={userIcon} alt="user-icon" className="navbar__icons cursor-pointer" onClick={toggleDropdown} />
                     {dropdownVisible && (
                        <div className="dropdown-content absolute right-0 mr-4 mt-1 w-48 shadow-md rounded-lg bg-white">
                           <p className="p-2 border-b text-center font-smibold">{userInfo.username}</p>
                           <NavLink to="/profile" className="block px-4 py-2 hover:font-bold">
                              Profil
                           </NavLink>
                           <button onClick={logoutHandler} className="w-full text-center p-2 hover:font-bold delogare-button">
                              Delogare
                           </button>
                        </div>
                     )}
                  </div>
               ) : (
                  <NavLink to="/login">
                     <img src={userIcon} alt="user-icon" className="navbar__icons" />
                  </NavLink>
               )}
            </div>
         </div>
      </nav>
   );
};

export default AdminNavbar;
