import React from "react";
import { useSelector } from "react-redux";
import { selectFavoriteProduct } from "../../redux/features/favourites/favouriteSlice.js";
import SmallProduct from "../../Components/SmallProduct/SmallProduct.jsx";

const Favorite = () => {
   const favorites = useSelector(selectFavoriteProduct);

   return (
      <div className="ml-[10rem]">
         <h1 className="text-lg font-bold ml-[3rem] mt-[3rem]">Produse favorite</h1>

         <div className="flex flex-wrap">
            {favorites.map((product) => (
               <SmallProduct key={product._id} product={product} />
            ))}
         </div>
      </div>
   );
};

export default Favorite;
