import React from "react";
import { useSelector } from "react-redux";
import { FaShoppingCart } from "react-icons/fa";

const CartCount = () => {
   const cartItems = useSelector((state) => state.cart.cartItems); // Assuming your cart items are stored in state.cart.cartItems

   const cartItemsCount = cartItems.reduce((total, item) => total + item.quantity, 0); // Calculate total quantity of items in cart

   return (
      <div className="relative">
         <FaShoppingCart className="text-pink-500 text-2xl" />
         {cartItemsCount > 0 && <span className="cart-count absolute top-12 right-0 bg-white text-black rounded-full px-1 py-0 text-xs">{cartItemsCount}</span>}
      </div>
   );
};

export default CartCount;
