import React, { useEffect } from "react";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { useSelector, useDispatch } from "react-redux";
import { addToFavorites, removeFromFavorites, setFavorites } from "../../redux/features/favorites/favoriteSlice";
import { addFavoriteToLocalStorage, getFavoritesFromLocalStorage, removeFavoriteFromLocalStorage } from "../../Utils/localStorage";

const HeartIcon = ({ product }) => {
   const dispatch = useDispatch();
   const favorites = useSelector((state) => state.favorites) || [];
   const isFavorite = favorites.some((p) => p._id === product._id);

   useEffect(() => {
      const favoritesFromLocalStorage = getFavoritesFromLocalStorage();
      dispatch(setFavorites(favoritesFromLocalStorage));
   }, [dispatch]);

   const toggleFavorites = () => {
      if (isFavorite) {
         dispatch(removeFromFavorites(product));
         removeFavoriteFromLocalStorage(product._id);
      } else {
         dispatch(addToFavorites(product));
         addFavoriteToLocalStorage(product);
      }
   };

   return (
      <div className="relative">
         <div className="absolute top-8 right-5 cursor-pointer" onClick={toggleFavorites}>
            {isFavorite ? <FaHeart className="text-pink-500" /> : <FaRegHeart className="text-black" />}
         </div>
      </div>
   );
};

export default HeartIcon;
