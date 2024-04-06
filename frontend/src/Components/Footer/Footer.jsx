// eslint-disable-next-line no-unused-vars
import React from "react";
import "./Footer.css";
import "../../shared.css";

// Iconite
import facebook from "../Assets/Icons/icons8-facebook-50.png";
import instagram from "../Assets/Icons/icons8-instagram-50.png";
import tiktok from "../Assets/Icons/icons8-tiktok-50.png";
import youtube from "../Assets/Icons/icons8-youtube-50.png";

export const Footer = () => {
   return (
      <footer className="footer p-8 pt-4 mt-16 mb-1">
         <div className="container mx-auto grid grid-cols-4 gap-4">
            <div>
               <h3 className="text-lg font-semibold">COMPANIE</h3>
               <ul className="mt-4">
                  <li>
                     <a href="#" className="footer__link">
                        Despre noi
                     </a>
                  </li>
                  <li>
                     <a href="#" className="footer__link">
                        Echipa noastră
                     </a>
                  </li>
                  <li>
                     <a href="#" className="footer__link">
                        Politica de Confidențialitate
                     </a>
                  </li>
                  <li>
                     <a href="#" className="footer__link">
                        Termeni și Condiții
                     </a>
                  </li>
               </ul>
            </div>
            <div>
               <h3 className="text-lg font-semibold">AJUTOR</h3>
               <ul className="mt-4">
                  <li>
                     <a href="#" className="footer__link">
                        Contact
                     </a>
                  </li>
                  <li>
                     <a href="#" className="footer__link">
                        FAQ
                     </a>
                  </li>
               </ul>
            </div>
            <div>
               <h3 className="text-lg font-semibold">GHID</h3>
               <ul className="mt-4">
                  <li>
                     <a href="#" className="footer__link">
                        Cum functionează
                     </a>
                  </li>
                  <li>
                     <a href="#" className="footer__link">
                        Ghid de utilizare
                     </a>
                  </li>
               </ul>
            </div>
            <div>
               <h3 className="text-lg font-semibold mb-6">Urmărește-ne</h3>
               <ul className="container flex justify-start gap-4">
                  <li>
                     <a href="#">
                        <img src={facebook} alt="facebook-icon" className="footer__icon" />
                     </a>
                  </li>
                  <li>
                     <a href="#">
                        <img src={instagram} alt="instagram-icon" className="footer__icon" />
                     </a>
                  </li>
                  <li>
                     <a href="#">
                        <img src={tiktok} alt="tiktok-icon" className="footer__icon" />
                     </a>
                  </li>
                  <li>
                     <a href="#">
                        <img src={youtube} alt="youtube-icon" className="footer__icon" />
                     </a>
                  </li>
               </ul>
            </div>
            <div className="col-span-2 sm:col-span-4">
               <p className="text-center text-sm font-semibold">© 2024 WEBHUB</p>
            </div>
         </div>
      </footer>
   );
};
