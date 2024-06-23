import Message from "../Message/Message";
import Loader from "../Loader/Loader";
import { Link } from "react-router-dom";
import { useGetOrdersQuery } from "../../redux/api/orderApiSlice";
import AdminNavbar from "../AdminNavbar/AdminNavbar";

const OrderList = () => {
   const { data: orders, isLoading, error } = useGetOrdersQuery();

   return (
      <>
         <AdminNavbar />
         <h1 className="text-3xl font-semibold text-center my-10">Comenzi</h1>
         {isLoading ? (
            <Loader />
         ) : error ? (
            <Message variant="danger">{error?.data?.message || error.error}</Message>
         ) : (
            <table className="container mx-auto my-4">
               <thead className="w-full border">
                  <tr className="mb-[5rem]">
                     <th className="text-left pl-1 font-semibold">Item</th>
                     <th className="text-left pl-1 font-semibold">ID</th>
                     <th className="text-left pl-1 font-semibold">Utilizator</th>
                     <th className="text-left pl-1 font-semibold">Data</th>
                     <th className="text-left pl-1 font-semibold">Total</th>
                     <th className="text-left pl-1 font-semibold">Plătit</th>
                     <th></th>
                  </tr>
               </thead>

               <tbody>
                  {orders.map((order) => (
                     <tr key={order._id}>
                        <td>
                           <img src={order.orderItems[0].image} alt={order._id} className="w-[5rem] pt-4" />
                        </td>
                        <td>{order._id}</td>

                        <td>{order.user ? order.user.username : "N/A"}</td>

                        <td>{order.createdAt ? order.createdAt.substring(0, 10) : "N/A"}</td>

                        <td>LEI {order.totalPrice}</td>

                        <td className="py-2">
                           {order.isPaid ? (
                              <p className="p-1 text-center bg-green-400 w-[6rem] rounded-full">Completat</p>
                           ) : (
                              <p className="p-1 text-center bg-red-400 w-[6rem] rounded-full">În curs</p>
                           )}
                        </td>

                        <td>
                           <Link to={`/order/${order._id}`}>
                              <button>Detalii</button>
                           </Link>
                        </td>
                     </tr>
                  ))}
               </tbody>
            </table>
         )}
      </>
   );
};

export default OrderList;
