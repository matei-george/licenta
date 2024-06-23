import React from "react";
import { useSelector } from "react-redux";
import { FaShoppingCart } from "react-icons/fa";

import "./CartCount.css";

const CartCount = () => {
   const cartItems = useSelector((state) => state.cart.cartItems);

   const cartItemsCount = cartItems.reduce((total, item) => total + item.quantity, 0);

   return (
      <div className="relative">
         <FaShoppingCart className="text-black text-2xl" />
         {cartItemsCount > 0 && <span className="cart-count  bg-black text-white rounded-full px-1 py-0 text-xs">{cartItemsCount}</span>}
      </div>
   );
};

export default CartCount;
