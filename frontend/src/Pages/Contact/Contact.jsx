// eslint-disable-next-line no-unused-vars
import React from "react";

// Componente
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";

// Stiluri
import "../../shared.css";
import "./Contact.css";

// Asseturi
import email from "../../Components/Assets/Icons/icons8-email-50.png";
import phone from "../../Components/Assets/Icons/icons8-phone-50.png";
import fax from "../../Components/Assets/Icons/icons8-fax-50.png";

const Contact = () => {
   return (
      <main className="flex flex-col">
         <Navbar />
         <div className="contact-content mx-auto my-8 flex-1">
            <h1 className="text-6xl contact-title text-center mb-8">Doriți să ne contactați?</h1>
            <p className="font-bold">Excelent!</p>
            <p>
               Ne bucurăm să vă avem aici! Dacă aveți întrebări, feedback sau orice altceva doriți să împărtășiți cu noi, vă rugăm să nu ezitați să ne contactați. Suntem aici
               pentru a vă ajuta și a răspunde la toate solicitarile dumneavoastră. Indiferent dacă aveți întrebări despre produsele noastre, doriți să faceți o programare sau
               pur și simplu să ne transmiteți un gând bun, suntem aici pentru voi. Echipa noastră va răspunde cu promptitudine și va face tot posibilul să vă ofere o
               experiență plăcută.
            </p>
            <p className="my-6">Apreciem încrederea dumneavoastră și suntem dedicați să vă oferim servicii de cea mai înaltă calitate.</p>
            <p className="mb-4">Cu stimă și profesionalism,</p>
            <p className="font-bold mb-8">Echipa WebHub</p>
            {/* The icons container */}
            <div className="contact flex justify-around mb-4">
               <a href="mailto:suport@webhub.com" className="flex items-center gap-4 font-semibold">
                  <img src={email} alt="email-icon" className="contact__icon" />
                  suport@webhub.ro
               </a>
               <a href="#" className="flex items-center gap-4 font-semibold">
                  <img src={phone} alt="phone-icon" className="contact__icon" />
                  +40 741 588 244
               </a>
               <a href="#" className="flex items-center gap-4 font-semibold">
                  <img src={fax} alt="fax-icon" className="contact__icon" />
                  +19292070142
               </a>
            </div>
         </div>
         <Footer />
      </main>
   );
};

export default Contact;
