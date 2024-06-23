import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { savePaymentMethod, saveShippingAddress } from "../../redux/features/cart/cartSlice.js";
import ProgressSteps from "../../Components/ProgressSteps/ProgressSteps.jsx";

import "./Shipping.css";

const Shipping = () => {
   const cart = useSelector((state) => state.cart);
   const { shippingAddress } = cart;

   const [paymentMethod, setPaymentMethod] = useState("PayPal");
   const [address, setAddress] = useState(shippingAddress.address || "");
   const [city, setCity] = useState(shippingAddress.city || "");
   const [postalCode, setPostalCode] = useState(shippingAddress.postalCode || "");
   const [country, setCountry] = useState(shippingAddress.country || "");

   const dispatch = useDispatch();
   const navigate = useNavigate();

   const submitHandler = (e) => {
      e.preventDefault();

      dispatch(saveShippingAddress({ address, city, postalCode, country }));
      dispatch(savePaymentMethod(paymentMethod));
      navigate("/placeorder");
   };

   // Payment
   useEffect(() => {
      if (!shippingAddress.address) {
         navigate("/shipping");
      }
   }, [navigate, shippingAddress]);

   return (
      <div className="container mx-auto mt-10">
         <ProgressSteps step1 step2 />
         <div className="mt-[10rem] flex justify-around items-center flex-wrap">
            <form onSubmit={submitHandler} className="w-[40rem]">
               <h1 className="text-2xl font-semibold mb-4">Date de facturare</h1>
               <div className="mb-4">
                  <label className="block mb-2">Stradă, Număr, etc.</label>
                  <input type="text" className="w-full p-2 border rounded" placeholder="Enter address" value={address} required onChange={(e) => setAddress(e.target.value)} />
               </div>
               <div className="mb-4">
                  <label className="block mb-2">Orașul</label>
                  <input type="text" className="w-full p-2 border rounded" placeholder="Enter city" value={city} required onChange={(e) => setCity(e.target.value)} />
               </div>
               <div className="mb-4">
                  <label className="block mb-2">Codul poștal</label>
                  <input
                     type="text"
                     className="w-full p-2 border rounded"
                     placeholder="Enter postal code"
                     value={postalCode}
                     required
                     onChange={(e) => setPostalCode(e.target.value)}
                  />
               </div>
               <div className="mb-4">
                  <label className="block mb-2">Țara</label>
                  <input type="text" className="w-full p-2 border rounded" placeholder="Enter country" value={country} required onChange={(e) => setCountry(e.target.value)} />
               </div>
               <div className="mb-4">
                  <label className="block text-gray-400">Metoda de plată</label>
                  <div className="mt-2">
                     <label className="inline-flex items-center">
                        <input
                           type="radio"
                           className="form-radio text-pink-500"
                           name="paymentMethod"
                           value="PayPal"
                           checked={paymentMethod === "PayPal"}
                           onChange={(e) => setPaymentMethod(e.target.value)}
                        />

                        <span className="ml-2">Card de Credit</span>
                     </label>
                  </div>
               </div>

               <button className="text-white py-2 px-4 rounded-full text-lg w-full facturare-button" type="submit">
                  Continuă
               </button>
            </form>
         </div>
      </div>
   );
};

export default Shipping;
