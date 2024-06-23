// FavoritesCount.jsx
import React from "react";
import { useSelector } from "react-redux";
import "./FavoritesCount.css";

const FavoritesCount = () => {
   const favorites = useSelector((state) => state.favorites);
   const favoriteCount = favorites.length;

   return (
      <div className="absolute left-2 top-2">
         {favoriteCount > 0 && <span className="px-1 py-0 favorites-count text-sm text-black bg-white rounded-full">{favoriteCount}</span>}
      </div>
   );
};

export default FavoritesCount;
