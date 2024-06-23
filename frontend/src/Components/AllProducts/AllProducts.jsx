import { Link } from "react-router-dom";
import moment from "moment";
import { useAllProductsQuery } from "../../redux/api/productApiSlice";
import AdminNavbar from "../AdminNavbar/AdminNavbar";

import "./AllProducts.css";

const AllProducts = () => {
   const { data: products, isLoading, isError } = useAllProductsQuery();

   if (isLoading) {
      return <div>Loading...</div>;
   }

   if (isError) {
      return <div>Error loading products</div>;
   }

   return (
      <>
         <AdminNavbar />
         <div className="container mx-[9rem] my-12">
            <div className="flex flex-col  md:flex-row">
               <div className="p-3">
                  <div className="ml-[2rem] text-xl font-bold h-12">Toate produsele ({products.length})</div>
                  <div className="flex flex-wrap justify-around items-center">
                     {products.map((product) => (
                        <Link key={product._id} to={`/admin/product/update/${product._id}`} className="block mb-4 overflow-hidden">
                           <div className="flex">
                              <img src={product.image} alt={product.name} className="w-[10rem] object-cover" />
                              <div className="p-4 flex flex-col justify-around">
                                 <div className="flex justify-between">
                                    <h5 className="text-xl font-semibold mb-2">{product?.name}</h5>

                                    <p className="text-gray-400 text-xs">{moment(product.createdAt).format("MMMM Do YYYY")}</p>
                                 </div>

                                 <p className="text-gray-400 xl:w-[30rem] lg:w-[30rem] md:w-[20rem] sm:w-[10rem] text-sm mb-4">{product?.description?.substring(0, 160)}...</p>

                                 <div className="flex justify-between">
                                    <Link
                                       to={`/admin/product/update/${product._id}`}
                                       className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white rounded focus:ring-4 focus:outline-none update-product-button"
                                    >
                                       Actualizează produs
                                       <svg className="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                          <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M1 5h12m0 0L9 1m4 4L9 9" />
                                       </svg>
                                    </Link>
                                    <p>LEI {product?.price}</p>
                                 </div>
                              </div>
                           </div>
                        </Link>
                     ))}
                  </div>
               </div>
            </div>
         </div>
      </>
   );
};

export default AllProducts;
