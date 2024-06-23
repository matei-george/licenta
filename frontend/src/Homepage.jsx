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
         <div className="banner-container flex gap-2 mb-8">
            <p className="banner-text font-semibold">Locul pentru cele mai bune componente web în HTML și CSS!</p>
            <img src={Banner} alt="Banner image" className="banner-image" />
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
