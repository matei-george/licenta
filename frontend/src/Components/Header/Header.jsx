import React from "react";
import { useGetTopProductsQuery } from "../../redux/api/productApiSlice.js";
import Loader from "../../Components/Loader/Loader";
import SmallProduct from "../../Components/SmallProduct/SmallProduct";
import ProductCarousel from "../../Components/ProductCarousel/ProductCarousel";

const Header = () => {
   const { data, isLoading, error } = useGetTopProductsQuery();

   if (isLoading) {
      return <Loader />;
   }

   if (error) {
      return <div>Error loading top products</div>;
   }

   // Ensure data is an array before mapping
   const products = Array.isArray(data) ? data : [];

   return (
      <div className="flex justify-around">
         <div className="xl:block lg:hidden md:hidden sm:hidden">
            <div className="grid grid-cols-2">
               {products.map((product) => (
                  <div key={product._id}>
                     <SmallProduct product={product} />
                  </div>
               ))}
            </div>
         </div>
         <ProductCarousel />
      </div>
   );
};

export default Header;
