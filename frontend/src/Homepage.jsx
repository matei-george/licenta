import React from "react";
import { useParams } from "react-router-dom";
import { useGetProductsQuery } from "./redux/api/productApiSlice";
import Loader from "./Components/Loader/Loader";
import Message from "./Components/Message/Message"; // Assuming Message component handles error messages
import Header from "./Components/Header/Header";
import SmallProduct from "./Components/SmallProduct/SmallProduct";
import Navbar from "./Components/Navbar/Navbar.jsx";

const Homepage = () => {
   const { keyword } = useParams();
   const { data, isLoading, isError } = useGetProductsQuery({ keyword });

   // Loading state
   if (isLoading) {
      return <Loader />;
   }

   // Error state
   if (isError) {
      return <Message variant="danger">Error loading products</Message>;
   }

   // Data loaded successfully
   const products = data?.products || [];

   return (
      <>
         <Navbar />
         <div className="container mx-auto">
            <Header />
            <div className="flex justify-around">
               <div className="grid grid-cols-2 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-4">
                  {products.length > 0 ? (
                     products.map((product) => (
                        <div key={product._id}>
                           <SmallProduct product={product} />
                        </div>
                     ))
                  ) : (
                     <p>No products found</p>
                  )}
               </div>
            </div>
         </div>
      </>
   );
};

export default Homepage;
