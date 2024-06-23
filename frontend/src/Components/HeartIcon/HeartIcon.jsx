import React, { useEffect } from "react";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { useSelector, useDispatch } from "react-redux";
import { addToFavorites, removeFromFavorites, setFavorites } from "../../redux/features/favourites/favouriteSlice.js";
import { addFavoriteToLocalStorage, getFavoritesFromLocalStorage, removeFavoriteFromLocalStorage } from "../../Utils/localStorage";

const HeartIcon = ({ product, className }) => {
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

   // Heart icon color
   const heartColor = isFavorite ? "#466990" : "#000"; // Pink when favorite, white when not

   return (
      <div className={className} onClick={toggleFavorites} style={{ cursor: "pointer" }}>
         {isFavorite ? <FaHeart className="text-pink-500" style={{ color: heartColor }} /> : <FaRegHeart className="text-black" style={{ color: heartColor }} />}
      </div>
   );
};

export default HeartIcon;
