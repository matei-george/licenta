import React from "react";
import { Link } from "react-router-dom";
import HeartIcon from "../HeartIcon/HeartIcon.jsx";

import "./SmallProduct.css";

const Produs = ({ product }) => {
   return (
      <div className="w-[20rem] ml-[1rem] p-3 relative">
         <div className="relative">
            <img src={product.image} alt={product.name} className="w-[20rem] rounded" />
            <HeartIcon product={product} className="absolute top-2 right-2 w-4 h-4" />
         </div>

         <div className="p-4">
            <Link to={`/product/${product._id}`}>
               <h2 className="flex justify-between items-center">
                  <div className="text-sm">{product.name}</div>
                  <span className="product-price text-xs font-medium mr-2 px-3 py-1 rounded-full">&euro; {product.price}</span>
               </h2>
            </Link>
         </div>
      </div>
   );
};

export default Produs;
