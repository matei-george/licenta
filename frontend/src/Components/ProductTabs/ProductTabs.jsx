import { useState } from "react";
import { Link } from "react-router-dom";
import Ratings from "../Ratings/Ratings";
import { useGetTopProductsQuery } from "../../redux/api/productApiSlice";
import SmallProduct from "../SmallProduct/SmallProduct";
import Loader from "../Loader/Loader";
import moment from "moment";

import "./ProductTabs.css";

const ProductTabs = ({ loadingProductReview, userInfo, submitHandler, rating, setRating, comment, setComment, product }) => {
   const { data, isLoading } = useGetTopProductsQuery();
   const [activeTab, setActiveTab] = useState(1);

   const handleTabClick = (tabNumber) => {
      setActiveTab(tabNumber);
   };

   return (
      <div className="flex flex-col md:flex-row">
         <section className="mr-[5rem]">
            <div className={`flex-1 p-4 cursor-pointer text-lg ${activeTab === 1 ? "font-bold" : ""}`} onClick={() => handleTabClick(1)}>
               Adaugă recenzia ta
            </div>
            <div className={`flex-1 p-4 cursor-pointer text-lg ${activeTab === 2 ? "font-bold" : ""}`} onClick={() => handleTabClick(2)}>
               Toate recenziile
            </div>
            <div className={`flex-1 p-4 cursor-pointer text-lg ${activeTab === 3 ? "font-bold" : ""}`} onClick={() => handleTabClick(3)}>
               Produse similare
            </div>
         </section>

         {/* Second Part */}
         <section>
            {activeTab === 1 && (
               <div className="mt-4">
                  {userInfo ? (
                     <form onSubmit={submitHandler}>
                        <div className="my-2">
                           <label htmlFor="rating" className="block text-xl mb-2">
                              Notă
                           </label>
                           <select id="rating" required value={rating} onChange={(e) => setRating(e.target.value)} className="p-2 border rounded-lg xl:w-[40rem] text-black">
                              <option value="">Selectează</option>
                              <option value="1">Nesatisfăcător</option>
                              <option value="2">Satisfăcător</option>
                              <option value="3">Bun</option>
                              <option value="4">Foarte bun</option>
                              <option value="5">Excelent</option>
                           </select>
                        </div>

                        <div className="my-2">
                           <label htmlFor="comment" className="block text-xl mb-2">
                              Comentariu
                           </label>
                           <textarea
                              id="comment"
                              rows="3"
                              required
                              value={comment}
                              onChange={(e) => setComment(e.target.value)}
                              className="p-2 border rounded-lg xl:w-[40rem] text-black"
                           ></textarea>
                        </div>

                        <button type="submit" disabled={loadingProductReview} className="bg-pink-600 text-white py-2 px-4 rounded-lg send-review">
                           Trimite
                        </button>
                     </form>
                  ) : (
                     <p>
                        Te rog <Link to="/login"> autentifică-te </Link> pentru a scrie o recenzie.
                     </p>
                  )}
               </div>
            )}

            {activeTab === 2 && (
               <>
                  <div>{product.reviews.length === 0 && <p>No Reviews</p>}</div>

                  <div>
                     {product.reviews.map((review) => (
                        <div key={review._id} className="bg-white shadow-md rounded-lg p-4 mb-5 xl:ml-[2rem] sm:ml-[0rem] xl:w-[50rem] sm:w-[24rem]">
                           <div className="flex justify-between">
                              <strong className="text-[#B0B0B0]">{review.name}</strong>
                              <p className="text-[#B0B0B0]">{moment(review.createdAt).format("MMM D, YYYY")}</p>
                              {/* Ensure review.createdAt is defined before accessing */}
                           </div>

                           <p className="my-4">{review.comment}</p>
                           <Ratings value={review.rating} />
                        </div>
                     ))}
                  </div>
               </>
            )}

            {activeTab === 3 && (
               <section className="ml-[4rem] flex flex-wrap">
                  {!data ? (
                     <Loader />
                  ) : (
                     data.map((product) => (
                        <div key={product._id}>
                           <SmallProduct product={product} />
                        </div>
                     ))
                  )}
               </section>
            )}
         </section>
      </div>
   );
};

export default ProductTabs;
