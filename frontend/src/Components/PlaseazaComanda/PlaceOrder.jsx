import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Message from "../Message/Message";
import ProgressSteps from "../ProgressSteps/ProgressSteps";
import Loader from "../Loader/Loader";
import { useCreateOrderMutation } from "../../redux/api/orderApiSlice";
import { clearCartItems } from "../../redux/features/cart/cartSlice";
import { PayPalButtons } from "@paypal/react-paypal-js";

import "./PlaceOrder.css";

const PlaceOrder = () => {
   const navigate = useNavigate();
   const cart = useSelector((state) => state.cart);
   const [createOrderMutation, { isLoading, error }] = useCreateOrderMutation();
   const dispatch = useDispatch();

   useEffect(() => {
      if (!cart.shippingAddress.address) {
         navigate("/shipping");
      }
   }, [cart.paymentMethod, cart.shippingAddress.address, navigate]);

   const placeOrderHandler = async () => {
      try {
         const res = await createOrderMutation({
            orderItems: cart.cartItems,
            shippingAddress: cart.shippingAddress,
            paymentMethod: cart.paymentMethod,
            itemsPrice: cart.itemsPrice,
            shippingPrice: cart.shippingPrice,
            taxPrice: cart.taxPrice,
            totalPrice: cart.totalPrice,
         }).unwrap();
         dispatch(clearCartItems());
         navigate(`/order/${res._id}`);
      } catch (error) {
         alert(error.message); // Replace toast with alert
      }
   };

   const createPayPalOrder = (data, actions) => {
      return actions.order.create({
         purchase_units: [
            {
               amount: { value: cart.totalPrice },
            },
         ],
      });
   };

   const onApprove = (data, actions) => {
      return actions.order.capture().then((details) => {
         placeOrderHandler();
      });
   };

   const onError = (err) => {
      alert("An error occurred during the payment process: " + err.message);
   };

   return (
      <>
         <ProgressSteps step1 step2 step3 />

         <div className="container mx-auto mt-4 px-24 text-black p-4 rounded shadow">
            {cart.cartItems.length === 0 ? (
               <Message>Your cart is empty</Message>
            ) : (
               <div className="overflow-x-auto">
                  <table className="w-full border-collapse">
                     <thead>
                        <tr>
                           <td className="px-1 py-2 text-left align-top border-b">Imagine</td>
                           <td className="px-1 py-2 text-left border-b">Nume</td>
                           <td className="px-1 py-2 text-left border-b">Pret</td>
                           <td className="px-1 py-2 text-left border-b">Total</td>
                        </tr>
                     </thead>

                     <tbody>
                        {cart.cartItems.map((item, index) => (
                           <tr key={index} className="border-b">
                              <td className="p-2">
                                 <img src={item.image} alt={item.name} className="w-16 h-16 object-cover" />
                              </td>

                              <td className="p-2">
                                 <Link to={`/product/${item.product}`} className="text-blue-500">
                                    {item.name}
                                 </Link>
                              </td>
                              <td className="p-2">LEI {item.price.toFixed(2)}</td>
                              <td className="p-2">LEI {(item.qty * item.price).toFixed(2)}</td>
                           </tr>
                        ))}
                     </tbody>
                  </table>
               </div>
            )}

            <div className="mt-8">
               <h2 className="text-2xl font-semibold mb-5">Sumarul Comenzii</h2>
               <div className="flex justify-between flex-wrap p-8 rounded shadow-xl">
                  <ul className="text-lg mb-4">
                     <li>
                        <span className="font-semibold">Produse:</span> LEI {cart.itemsPrice}
                     </li>
                     <li>
                        <span className="font-semibold">Taxe:</span> LEI {cart.taxPrice}
                     </li>
                     <li>
                        <span className="font-semibold">Total:</span> LEI {cart.totalPrice}
                     </li>
                  </ul>

                  {error && <Message variant="danger">{error.data.message}</Message>}

                  <div className="mb-4">
                     <h2 className="text-2xl font-semibold mb-4">Facturare</h2>
                     <p>
                        <strong>Address:</strong> {cart.shippingAddress.address}, {cart.shippingAddress.city} {cart.shippingAddress.postalCode}, {cart.shippingAddress.country}
                     </p>
                  </div>

                  <div>
                     <h2 className="text-2xl font-semibold mb-4">Metoda de plată</h2>
                     <strong>Metoda:</strong> {cart.paymentMethod}
                  </div>
               </div>

               <button
                  type="button"
                  className="bg-blue-500 text-white py-2 px-4 rounded-full text-lg w-full mt-4 place-order-button"
                  disabled={cart.cartItems.length === 0}
                  onClick={placeOrderHandler}
               >
                  Plasează comanda
               </button>

               {isLoading && <Loader />}
            </div>
         </div>
      </>
   );
};

export default PlaceOrder;
