import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { FaTrash } from "react-icons/fa";
import { addToCart, removeFromCart } from "../../redux/features/cart/cartSlice";

import "./Cos.css";

const Cart = () => {
   const navigate = useNavigate();
   const dispatch = useDispatch();

   const cart = useSelector((state) => state.cart);
   const { cartItems } = cart;

   const addToCartHandler = (product, qty) => {
      dispatch(addToCart({ ...product, qty }));
   };

   const removeFromCartHandler = (id) => {
      dispatch(removeFromCart(id));
   };

   const checkoutHandler = () => {
      navigate("/login?redirect=/shipping");
   };

   return (
      <div className="container mx-auto mt-8">
         <div className="flex flex-col items-center">
            {cartItems.length === 0 ? (
               <div className="text-2xl font-semibold">Coșul este gol</div>
            ) : (
               <div className="w-full md:w-3/4 lg:w-2/3">
                  <h1 className="text-3xl font-semibold mb-6">Coș de cumpărături</h1>

                  {cartItems.map((item) => (
                     <div key={item._id} className="flex items-center mb-4 pb-2 border-b border-gray-300">
                        <div className="w-20 h-20">
                           <img src={item.image} alt={item.name} className="w-full h-full object-cover rounded" />
                        </div>

                        <div className="flex-1 ml-4">
                           <Link to={`/product/${item._id}`} className="text-blue-600">
                              {item.name}
                           </Link>

                           <div className="mt-2 text-black">{item.brand}</div>
                           <div className="mt-2 text-black font-bold">LEI {item.price}</div>
                        </div>

                        <div>
                           <button className="text-red-500" onClick={() => removeFromCartHandler(item._id)}>
                              <FaTrash />
                           </button>
                        </div>
                     </div>
                  ))}

                  <div className="p-4 rounded-lg">
                     <h2 className="text-xl font-semibold mb-2">Produse ({cartItems.reduce((acc, item) => acc + item.qty, 0)})</h2>

                     <div className="text-2xl font-bold">LEI {cartItems.reduce((acc, item) => acc + item.qty * item.price, 0).toFixed(2)}</div>

                     <button
                        className="bg-blue-600 text-white mt-4 py-2 px-4 rounded-full text-lg checkout-button"
                        disabled={cartItems.length === 0}
                        onClick={checkoutHandler}
                     >
                        Continuă la checkout
                     </button>
                  </div>
               </div>
            )}
         </div>
      </div>
   );
};

export default Cart;
