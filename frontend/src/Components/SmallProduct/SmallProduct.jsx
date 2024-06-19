import React from "react";
import { Link } from "react-router-dom";
import HeartIcon from "../Assets/Icons/icons8-heart-50.png"; // Correct import path

const SmallProduct = ({ product }) => {
   return (
      <div className="w-[20rem] ml-[2rem] p-3">
         <div className="relative">
            <img src={product.image} alt={product.name} className="h-auto rounded" />
            <img src={HeartIcon} alt="Heart Icon" className="absolute top-2 right-2 w-6 h-6" />
         </div>

         <div className="p-4">
            <Link to={`/product/${product._id}`}>
               <h2 className="flex justify-between items-center">
                  <div>{product.name}</div>
                  <span className="bg-pink-100 text-pink-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded-full dark:bg-pink-900 dark:text-pink-300">
                     RON {product.price}
                  </span>
               </h2>
            </Link>
         </div>
      </div>
   );
};

export default SmallProduct;
