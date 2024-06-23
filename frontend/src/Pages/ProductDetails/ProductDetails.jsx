import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useGetProductDetailsQuery, useCreateReviewMutation } from "../../redux/api/productApiSlice.js";
import Loader from "../../Components/Loader/Loader";
import Message from "../../Components/Message/Message.jsx";
import { FaBox, FaClock, FaShoppingCart, FaStar, FaStore } from "react-icons/fa";
import moment from "moment";
import Ratings from "../../Components/Ratings/Ratings.jsx";
import ProductTabs from "../../Components/ProductTabs/ProductTabs.jsx";
import { addToCart } from "../../redux/features/cart/cartSlice";
import Navbar from "../../Components/Navbar/Navbar.jsx";
import Footer from "../../Components/Footer/Footer.jsx";

import "./ProductDetails.css";

const ProductDetails = () => {
   const { id: productId } = useParams();
   const navigate = useNavigate();
   const dispatch = useDispatch();

   const [rating, setRating] = useState(0);
   const [comment, setComment] = useState("");

   const { data: product, isLoading, refetch, error } = useGetProductDetailsQuery(productId);

   const { userInfo } = useSelector((state) => state.auth);

   const [createReview, { isLoading: loadingProductReview }] = useCreateReviewMutation();

   const submitHandler = async (e) => {
      e.preventDefault();

      try {
         await createReview({
            productId,
            rating,
            comment,
         }).unwrap();
         refetch();
         alert("Review created successfully");
      } catch (error) {
         alert(error?.data || error.message);
      }
   };

   const addToCartHandler = () => {
      dispatch(addToCart({ ...product, qty: 1 }));
      navigate("/cart");
   };

   return (
      <>
         <Navbar />

         {isLoading ? (
            <Loader />
         ) : error ? (
            <Message variant="danger">{error?.data?.message || error.message}</Message>
         ) : (
            <>
               <div className="container mx-auto px-48 py-14">
                  <div className="flex flex-col lg:flex-row items-center lg:items-start">
                     <div className="w-full lg:w-1/3">
                        <img src={product.image} alt={product.name} className="w-full h-128 object-cover mb-4 lg:mb-0" />
                     </div>

                     <div className="flex-1 ml-8">
                        <h2 className="text-3xl font-semibold">{product.name}</h2>
                        <p className="text-gray-600 my-4">{product.description}</p>
                        <p className="text-4xl font-extrabold product-price-details ">LEI {product.price}</p>

                        <div className="flex flex-wrap items-center my-4">
                           <div className="flex items-center text-gray-700 mr-4">
                              <FaStore className="mr-2" /> Brand: {product.brand}
                           </div>
                           <div className="flex items-center text-gray-700 mr-4">
                              <FaClock className="mr-2" /> Adăugat: {moment(product.createAt).fromNow()}
                           </div>
                        </div>

                        <div className="my-4">
                           <p className="mb-2">Recenzii</p>
                           <Ratings value={product.rating} text={`(${product.numReviews})`} />
                        </div>
                        <button onClick={addToCartHandler} disabled={product.countInStock === 0} className="bg-blue-600 text-white py-2 px-4 rounded-lg add-to-cart-product">
                           Adaugă în coș
                        </button>
                     </div>
                  </div>

                  <div className="mt-16">
                     <h3 className="text-2xl font-semibold mb-4">Recenzii ({product.numReviews})</h3>
                     <ProductTabs
                        loadingProductReview={loadingProductReview}
                        userInfo={userInfo}
                        submitHandler={submitHandler}
                        rating={rating}
                        setRating={setRating}
                        comment={comment}
                        setComment={setComment}
                        product={product}
                     />
                  </div>
               </div>
            </>
         )}
         <Footer />
      </>
   );
};

export default ProductDetails;
