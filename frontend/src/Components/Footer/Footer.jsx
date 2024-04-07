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
      <footer className="footer p-8 pb-4 pt-4 mb-1">
         <div className="container mx-auto grid grid-cols-4 gap-4">
            <div>
               <h3 className="text-lg font-semibold footer-tag">COMPANIE</h3>
               <ul className="mt-4">
                  <li>
                     <a href="#" className="footer__link text-sm">
                        Despre noi
                     </a>
                  </li>
                  <li>
                     <a href="#" className="footer__link text-sm">
                        Echipa noastră
                     </a>
                  </li>
                  <li>
                     <a href="#" className="footer__link text-sm">
                        Politica de Confidențialitate
                     </a>
                  </li>
                  <li>
                     <a href="#" className="footer__link text-sm">
                        Termeni și Condiții
                     </a>
                  </li>
               </ul>
            </div>
            <div>
               <h3 className="text-lg font-semibold footer-tag">AJUTOR</h3>
               <ul className="mt-4">
                  <li>
                     <a href="#" className="footer__link text-sm">
                        Contact
                     </a>
                  </li>
                  <li>
                     <a href="#" className="footer__link text-sm">
                        FAQ
                     </a>
                  </li>
               </ul>
            </div>
            <div>
               <h3 className="text-lg font-semibold footer-tag">GHID</h3>
               <ul className="mt-4">
                  <li>
                     <a href="#" className="footer__link text-sm">
                        Cum functionează
                     </a>
                  </li>
                  <li>
                     <a href="#" className="footer__link text-sm">
                        Ghid de utilizare
                     </a>
                  </li>
               </ul>
            </div>
            <div>
               <h3 className="text-lg font-semibold mb-6 pl-5 footer-tag uppercase">Urmărește-ne</h3>
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
               <p className="text-center text-xs font-semibold about">© 2024 WEBHUB</p>
            </div>
         </div>
      </footer>
   );
};
