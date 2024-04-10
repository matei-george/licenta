// eslint-disable-next-line no-unused-vars
import React from "react";
import "./Navbar.css";
import "../../shared.css";
import logo from "../Assets/Images/WebHub_Logo_t.png";
import user from "../Assets/Icons/icons8-user-50.png";
import cart from "../Assets/Icons/icons8-shopping-cart-50.png";
import favourite from "../Assets/Icons/icons8-heart-50.png";

export const Navbar = () => {
   return (
      <nav className="navbar shadow-xl p-2 mt-6">
         <div className="container mx-auto flex justify-between items-center">
            <div className="flex items-center">
               <img src={logo} alt="Logo" className="navbar__logo mr-14" />
               <span className="font-bold text-3xl navbar__title">Webhub</span>
            </div>
            <ul className="flex flex-1 justify-center gap-4">
               <li className="mr-6">
                  <a href="/" className="nav-link font-semibold text-lg">
                     Acasă
                  </a>
               </li>
               <li className="mr-6">
                  <a href="/" className="nav-link font-semibold text-lg">
                     Toate Produsele
                  </a>
               </li>
               <li className="mr-6">
                  <a href="/" className="nav-link font-semibold text-lg">
                     Categorii
                  </a>
               </li>
               <li className="mr-6">
                  <a href="/despre" className="nav-link font-semibold text-lg">
                     Despre
                  </a>
               </li>
               <li className="mr-6">
                  <a href="/contact" className="nav-link font-semibold text-lg ">
                     Contact
                  </a>
               </li>
            </ul>
            <div className="flex items-center gap-5 mr-12 ">
               <a href="/login">
                  <img src={user} alt="user-icons" className="navbar__icons" />
               </a>
               <a href="/">
                  <img src={favourite} alt="user-icons" className="navbar__icons" />
               </a>
               <a href="/">
                  <img src={cart} alt="user-icons" className="navbar__icons" />
               </a>
            </div>
         </div>
      </nav>
   );
};
