import React from "react";
import { useParams } from "react-router-dom";
import { useGetProductsQuery } from "./redux/api/productApiSlice";
import Loader from "./Components/Loader/Loader";
import Message from "./Components/Message/Message";
import SmallProduct from "./Components/SmallProduct/SmallProduct";
import Navbar from "./Components/Navbar/Navbar.jsx";
import Footer from "./Components/Footer/Footer.jsx";

import "./shared.css";
import "./Pages/Homepage/Homepage.css";

import Banner from "../../frontend/src/Components/Assets/Images/banner.png";
import Banner_1 from "../../frontend/src/Components/Assets/Images/banner_1.png";
import Banner_2 from "../../frontend/src/Components/Assets/Images/banner_2.png";
import Banner_3 from "../../frontend/src/Components/Assets/Images/banner_3.png";

const Homepage = () => {
   const { keyword } = useParams();
   const { data, isLoading, isError } = useGetProductsQuery({ keyword });

   // Loading state
   if (isLoading) {
      return <Loader />;
   }

   // Error state
   if (isError) {
      return <Message variant="danger">Eroare la încărcarea produselor.</Message>;
   }

   // Data loaded successfully
   const products = data?.products || [];

   return (
      <main className="homepage">
         <Navbar />
         <h1 className="website-title py-10 mb-4">Bine ai venit pe WebHub!</h1>
         <div className="banner-container flex gap-2 mb-40">
            <p className="banner-text font-semibold">Locul pentru cele mai bune componente web în HTML și CSS!</p>
            <img src={Banner} alt="Banner image" className="banner-image rounded-xl shadow-2xl" />
         </div>
         <h1 className="text-3xl text-center font-semibold mb-12">Noi îți oferim o soluție modulară de construire a paginilor web!</h1>
         <div className="grid grid-cols-2 gap-12 mb-48">
            <img src={Banner_1} alt="Banner image" className="banner-image-1 place-self-end rounded-xl shadow-2xl" />
            <div className="container pe-72 place-self-center">
               <p className="font-bold text-4xl banner-promo">Componente accesibile, la un click distanță</p>
               <br />
               <p className="text-2xl">
                  La <span className="font-bold">WebHub</span> ai la dispoziție o gamă variată de componente construite în HTML și CSS. Procesul este simplu: Alege unul dintre
                  produsele noastre, adaugă-l în coșul de cumpărături, descarcă-l în format ZIP și integrează-l în proiectul tău.
               </p>
            </div>
         </div>
         <div className="grid grid-cols-2 gap-12 mb-48">
            <div className="container px-24 ps-80 place-self-center">
               <p className="font-bold text-4xl banner-promo">Plătește în siguranță cu cardul bancar</p>
               <br />
               <p className="text-2xl">
                  <span className="font-bold">WebHub</span> foloseste terminalul integrat de plăți PayPal, pentru a ne asigura că tranzacțiile se efectuează în siguranță
                  păstrând confidențiale datele tale sensibile.
               </p>
            </div>
            <img src={Banner_2} alt="Banner image" className="banner-image-1 place-self-start rounded-xl shadow-2xl" />
         </div>
         <div className="grid grid-cols-2 gap-12 mb-40">
            <img src={Banner_3} alt="Banner image" className="banner-image-1 place-self-end rounded-xl shadow-2xl " />
            <div className="container px-24 pe-72 place-self-center">
               <p className="font-bold text-4xl banner-promo">Libertate creativă, principala prioritate</p>
               <br />
               <p className="text-2xl">
                  Nu te mulțumesc culorile componentelor? Dorești alte dimensiuni, umbre și efecte? Fără probleme, ai libera alegere de a le adapta după bunul tău plac, fără
                  de depinde de limitările tehnologice și creative impuse de către alte tehnologii.
               </p>
            </div>
         </div>
         <p className="homepage-text text-xl px-24 font-bold">Printre produsele noastre, se numără:</p>
         <div className="container mx-auto px-4">
            <div className="flex justify-around">
               <div className="grid grid-cols-4 gap-4">
                  {products.length > 0 ? (
                     products.map((product) => (
                        <div key={product._id}>
                           <SmallProduct product={product} />
                        </div>
                     ))
                  ) : (
                     <p>Nu există produse de afișat.</p>
                  )}
               </div>
            </div>
         </div>
         <Footer />
      </main>
   );
};

export default Homepage;
