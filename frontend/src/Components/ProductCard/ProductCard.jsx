import { Link } from "react-router-dom";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/features/cart/cartSlice";
import HeartIcon from "../HeartIcon/HeartIcon";

const ProductCard = ({ p }) => {
   const dispatch = useDispatch();

   const addToCartHandler = (product, qty) => {
      dispatch(addToCart({ ...product, qty }));
      alert("Produs adăugat cu success în coș");
   };

   return (
      <div className="max-w-xs relative bg-white rounded-lg mx-2 md:mx-4 lg:mx-6 shadow-xl">
         <section className="relative">
            <Link to={`/product/${p._id}`}>
               <span className="absolute top-2 right-1 bg-[#466990] text-white text-xs font-medium px-2 py-0.5 rounded-full dark:bg-[#1c4563] dark:text-white">
                  {p?.brand}
               </span>
               <img className="cursor-pointer w-full" src={p.image} alt={p.name} style={{ height: "150px", objectFit: "cover" }} />
            </Link>
         </section>

         <div className="p-3">
            <div className="flex justify-between items-center">
               <h5 className="mb-2 text-lg text-black">{p?.name}</h5>
               <p className="text-black font-semibold text-sm">
                  {p?.price?.toLocaleString("en-US", {
                     style: "currency",
                     currency: "LEI",
                  })}
               </p>
            </div>

            <p className="mb-3 font-normal text-gray-600 text-xs">{p?.description?.substring(0, 80)} ...</p>

            <section className="flex justify-between items-center">
               <Link
                  to={`/product/${p._id}`}
                  className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-[#466990] rounded-lg hover:bg-[#1c4563] focus:ring-4 focus:outline-none focus:ring-[#1c4563] dark:bg-[#466990] dark:hover:bg-[#1c4563] dark:focus:ring-[#1c4563]"
               >
                  Mai multe detalii
                  <svg className="w-4 h-4 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                     <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M1 5h12m0 0L9 1m4 4L9 9" />
                  </svg>
               </Link>

               <button className="p-3 rounded-full bg-[#466990] text-white hover:bg-[#1c4563]" onClick={() => addToCartHandler(p, 1)}>
                  <AiOutlineShoppingCart size={25} />
               </button>
               <HeartIcon product={p} />
            </section>
         </div>
      </div>
   );
};

export default ProductCard;
