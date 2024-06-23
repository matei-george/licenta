import React, { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { PayPalButtons, usePayPalScriptReducer } from "@paypal/react-paypal-js";
import { useSelector } from "react-redux";
import Message from "../../Components/Message/Message";
import Loader from "../../Components/Loader/Loader";
import { useDeliverOrderMutation, useGetOrderDetailsQuery, useGetPaypalClientIdQuery, usePayOrderMutation } from "../../redux/api/orderApiSlice";
import { useDownloadProductZipMutation } from "../../redux/api/productApiSlice";

const Order = () => {
   const { id: orderId } = useParams();

   const { data: order, refetch, isLoading, error } = useGetOrderDetailsQuery(orderId);

   const [payOrder, { isLoading: loadingPay }] = usePayOrderMutation();
   const [deliverOrder, { isLoading: loadingDeliver }] = useDeliverOrderMutation();
   const [downloadProductZip] = useDownloadProductZipMutation();
   const { userInfo } = useSelector((state) => state.auth);

   const [{ isPending }, paypalDispatch] = usePayPalScriptReducer();

   const { data: paypal, isLoading: loadingPayPal, error: errorPayPal } = useGetPaypalClientIdQuery();

   useEffect(() => {
      if (!errorPayPal && !loadingPayPal && paypal.clientId) {
         const loadingPayPalScript = async () => {
            paypalDispatch({
               type: "resetOptions",
               value: {
                  "client-id": paypal.clientId,
                  currency: "EUR",
               },
            });
            paypalDispatch({ type: "setLoadingStatus", value: "pending" });
         };

         if (order && !order.isPaid) {
            if (!window.paypal) {
               loadingPayPalScript();
            }
         }
      }
   }, [errorPayPal, loadingPayPal, order, paypal, paypalDispatch]);

   const handleDownload = async (filename) => {
      const cleanedFilename = filename.split(/[\\/]/).pop(); // Remove all slashes and get the filename
      console.log(cleanedFilename); // Verify the cleaned filename
      try {
         const response = await fetch(`http://localhost:5000/api/uploads/download/${cleanedFilename}`);
         if (!response.ok) {
            throw new Error("Network response was not ok");
         }
         const blob = await response.blob();
         const url = window.URL.createObjectURL(blob);
         const link = document.createElement("a");
         link.href = url;
         link.setAttribute("download", cleanedFilename);
         document.body.appendChild(link);
         link.click();
         link.remove();
      } catch (error) {
         console.error("Fișierul ZIP nu a putut fi descărcat:", error);
      }
   };

   function onApprove(data, actions) {
      return actions.order.capture().then(async function (details) {
         try {
            await payOrder({ orderId, details });
            refetch();
            alert("Comandă achitată cu succes.");
         } catch (error) {
            alert(error?.data?.message || error.message);
         }
      });
   }

   function createOrder(data, actions) {
      return actions.order
         .create({
            purchase_units: [{ amount: { value: order.totalPrice } }],
         })
         .then((orderID) => {
            return orderID;
         });
   }

   function onError(err) {
      alert(err.message);
   }

   const deliverHandler = async () => {
      await deliverOrder(orderId);
      refetch();
   };

   return isLoading ? (
      <Loader />
   ) : error ? (
      <Message variant="danger">{error.data.message}</Message>
   ) : (
      <div className="container flex flex-col ml-[10rem] md:flex-row">
         <div className="md:w-2/3 pr-4">
            <div className="border gray-300 mt-5 pb-4 mb-5">
               {order.orderItems.length === 0 ? (
                  <Message>Comanda nu are produse</Message>
               ) : (
                  <div className="overflow-x-auto">
                     <table className="w-[80%]">
                        <thead className="border-b-2">
                           <tr>
                              <th className="p-2">Imagine</th>
                              <th className="p-2">Nume Produs</th>
                              <th className="p-2 text-center">Cantitate</th>
                              <th className="p-2">Prețul unității</th>
                              <th className="p-2">Total</th>
                              <th className="p-2">Descărcabil</th>
                           </tr>
                        </thead>

                        <tbody>
                           {order.orderItems.map((item, index) => (
                              <tr key={index}>
                                 <td className="p-2">
                                    <img src={item.image} alt={item.name} className="w-16 h-16 object-cover" />
                                 </td>
                                 <td className="p-2">
                                    <Link to={`/product/${item.product}`}>{item.name}</Link>
                                 </td>
                                 <td className="p-2 text-center">{item.qty}</td>
                                 <td className="p-2 text-center">{item.price}</td>
                                 <td className="p-2 text-center">&euro;{(item.qty * item.price).toFixed(2)}</td>
                                 <td className="p-2 text-center">
                                    {order.isPaid && item.zipfile && (
                                       <button onClick={() => handleDownload(item.zipfile)} className="bg-blue-500 text-white py-2 px-4">
                                          Descarcă ZIP
                                       </button>
                                    )}
                                 </td>
                              </tr>
                           ))}
                        </tbody>
                     </table>
                  </div>
               )}
            </div>
         </div>

         <div className="md:w-1/3">
            <div className="mt-5 border-gray-300 pb-4 mb-4">
               <h2 className="text-xl font-bold mb-2">Date facturare</h2>
               <p className="mb-4 mt-4">
                  <strong className="text-pink-500">Comanda:</strong> {order._id}
               </p>

               <p className="mb-4">
                  <strong className="text-pink-500">Nume:</strong> {order.user.username}
               </p>

               <p className="mb-4">
                  <strong className="text-pink-500">Email:</strong> {order.user.email}
               </p>

               <p className="mb-4">
                  <strong className="text-pink-500">Adresă:</strong> {order.shippingAddress.address}, {order.shippingAddress.city} {order.shippingAddress.postalCode},{" "}
                  {order.shippingAddress.country}
               </p>

               <p className="mb-4">
                  <strong className="text-pink-500">Metodă de plată:</strong> {order.paymentMethod}
               </p>

               {order.isPaid ? <Message variant="success">Achitat pe {order.paidAt}</Message> : <Message variant="danger">Neachitat</Message>}
            </div>

            <h2 className="text-xl font-bold mb-2 mt-[3rem]">Sumarul comenzii</h2>
            <div className="flex justify-between mb-2">
               <span>Valoare produse</span>
               <span>&euro;{order.itemsPrice}</span>
            </div>
            <div className="flex justify-between items-center mb-2">
               <span>Taxe</span>
               <span>&euro;{order.taxPrice}</span>
            </div>
            <div className="flex justify-between items-center mb-2">
               <span>Total</span>
               <span>&euro;{order.totalPrice}</span>
            </div>

            {!order.isPaid && (
               <div>
                  {loadingPay && <Loader />}{" "}
                  {isPending ? (
                     <Loader />
                  ) : (
                     <div>
                        <div>
                           <PayPalButtons createOrder={createOrder} onApprove={onApprove} onError={onError}></PayPalButtons>
                        </div>
                     </div>
                  )}
               </div>
            )}
         </div>
      </div>
   );
};

export default Order;
