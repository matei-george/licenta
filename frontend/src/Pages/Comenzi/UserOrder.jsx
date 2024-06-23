import Message from "../../Components/Message/Message";
import Loader from "../../Components/Loader/Loader";
import { Link } from "react-router-dom";
import { useGetMyOrdersQuery } from "../../redux/api/orderApiSlice";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";

const UserOrder = () => {
   const { data: orders, isLoading, error } = useGetMyOrdersQuery();

   return (
      <>
         <Navbar />
         <div className="container mx-auto my-8">
            <h2 className="text-2xl font-semibold mb-4 text-center">Comenzile Mele</h2>

            {isLoading ? (
               <Loader />
            ) : error ? (
               <Message variant="danger">{error?.data?.error || error.error}</Message>
            ) : (
               <div className="overflow-x-auto">
                  <table className="w-full mx-auto border-collapse">
                     <thead>
                        <tr className="border-b">
                           <th className="py-2 text-center">Imagine</th>
                           <th className="py-2 text-center">ID</th>
                           <th className="py-2 text-center">Data</th>
                           <th className="py-2 text-center">Total</th>
                           <th className="py-2 text-center">Platita</th>
                        </tr>
                     </thead>

                     <tbody>
                        {orders.map((order) => (
                           <tr key={order._id} className="border-b">
                              <td className="py-2 text-center">
                                 <img src={order.orderItems[0].image} alt={order.user} className="w-16 h-16 object-cover mx-auto" />
                              </td>
                              <td className="py-2 text-center">{order._id}</td>
                              <td className="py-2 text-center">{order.createdAt.substring(0, 10)}</td>
                              <td className="py-2 text-center">$ {order.totalPrice}</td>
                              <td className="py-2 text-center">
                                 {order.isPaid ? (
                                    <p className="p-1 text-center bg-green-400 w-24 mx-auto rounded-full">Completat</p>
                                 ) : (
                                    <p className="p-1 text-center bg-red-400 w-24 mx-auto rounded-full">În curs</p>
                                 )}
                              </td>
                              <td className="py-2 text-center">
                                 <Link to={`/order/${order._id}`}>
                                    <button className="bg-pink-400 text-black py-2 px-3 rounded">Detalii</button>
                                 </Link>
                              </td>
                           </tr>
                        ))}
                     </tbody>
                  </table>
               </div>
            )}
         </div>
         <Footer />
      </>
   );
};

export default UserOrder;
