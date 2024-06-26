import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useGetFilteredProductsQuery } from "../../redux/api/productApiSlice";
import { useFetchCategoriesQuery } from "../../redux/api/categoryApiSlice";

import { setCategories, setProducts, setChecked } from "../../redux/features/shop/shopSlice";
import Loader from "../../Components/Loader/Loader";
import ProductCard from "../../Components/ProductCard/ProductCard";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";

import "./Shop.css";

const Shop = () => {
   const dispatch = useDispatch();
   const { categories, products, checked, radio } = useSelector((state) => state.shop);

   const categoriesQuery = useFetchCategoriesQuery();
   const [priceFilter, setPriceFilter] = useState("");

   const filteredProductsQuery = useGetFilteredProductsQuery({
      checked,
      radio,
   });

   useEffect(() => {
      if (!categoriesQuery.isLoading) {
         dispatch(setCategories(categoriesQuery.data));
      }
   }, [categoriesQuery.data, dispatch]);

   useEffect(() => {
      if (!checked.length || !radio.length) {
         if (!filteredProductsQuery.isLoading) {
            // Filter products based on both checked categories and price filter
            const filteredProducts = filteredProductsQuery.data.filter((product) => {
               // Check if the product price includes the entered price filter value
               return product.price.toString().includes(priceFilter) || product.price === parseInt(priceFilter, 10);
            });

            dispatch(setProducts(filteredProducts));
         }
      }
   }, [checked, radio, filteredProductsQuery.data, dispatch, priceFilter]);

   const handleBrandClick = (brand) => {
      const productsByBrand = filteredProductsQuery.data?.filter((product) => product.brand === brand);
      dispatch(setProducts(productsByBrand));
   };

   const handleCheck = (value, id) => {
      const updatedChecked = value ? [...checked, id] : checked.filter((c) => c !== id);
      dispatch(setChecked(updatedChecked));
   };

   // Add "All Brands" option to uniqueBrands
   const uniqueBrands = [...Array.from(new Set(filteredProductsQuery.data?.map((product) => product.brand).filter((brand) => brand !== undefined)))];

   const handlePriceChange = (e) => {
      // Update the price filter state when the user types in the input field
      setPriceFilter(e.target.value);
   };

   return (
      <>
         <Navbar />
         <h1 className="text-5xl text-center my-10 shop-header font-semibold">Toate produsele noastre</h1>
         <div className="container mx-auto my-8 px-12">
            <div className="flex md:flex-row">
               <div className="bg-white p-3 mt-2 mb-2 shadow-lg rounded-lg filter-container">
                  <h2 className="h4 text-center py-2 text-white rounded mb-2 shop-filter-label">Filtrează după categorii</h2>

                  <div className="p-5 w-[15rem]">
                     {categories?.map((c) => (
                        <div key={c._id} className="mb-2">
                           <div className="flex items-center mr-4">
                              <input
                                 type="checkbox"
                                 id={`category-checkbox-${c._id}`}
                                 onChange={(e) => handleCheck(e.target.checked, c._id)}
                                 className="w-4 h-4 text-[#466990] bg-gray-100 border-gray-300 rounded focus:ring-[#1c4563] dark:bg-gray-700 dark:border-gray-600"
                              />

                              <label htmlFor={`category-checkbox-${c._id}`} className="ml-2 text-sm font-medium text-black dark:text-gray-400">
                                 {c.name}
                              </label>
                           </div>
                        </div>
                     ))}
                  </div>

                  <h2 className="h4 text-center py-2 bg-black text-white rounded mb-2 shop-filter-label">Filtrează după brand</h2>

                  <div className="p-5">
                     {uniqueBrands?.map((brand) => (
                        <div key={brand} className="flex items-center mr-4 mb-5">
                           <input
                              type="radio"
                              id={brand}
                              name="brand"
                              onChange={() => handleBrandClick(brand)}
                              className="w-4 h-4 text-[#466990] bg-gray-100 border-gray-300 focus:ring-[#1c4563] dark:focus:ring-[#1c4563] dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                           />

                           <label htmlFor={brand} className="ml-2 text-sm font-medium text-black dark:text-gray-400">
                              {brand}
                           </label>
                        </div>
                     ))}
                  </div>

                  <h2 className="h4 text-center py-2 bg-black text-white rounded mb-2 shop-filter-label">Filtrează după preț</h2>

                  <div className="p-5 w-[15rem]">
                     <input
                        type="text"
                        placeholder="Introduceți prețul"
                        value={priceFilter}
                        onChange={handlePriceChange}
                        className="w-full px-3 py-2 placeholder-gray-400 border rounded-lg focus:outline-none focus:ring focus:border-[#466990]"
                     />
                  </div>

                  <div className="p-5 pt-0">
                     <button className="w-full border my-4 p-4 filter-reset text-white" onClick={() => window.location.reload()}>
                        Resetează filtrele
                     </button>
                  </div>
               </div>

               <div className="p-3 flex-1">
                  <h2 className="h4 mb-2 text-black px-10 font-semibold">Se afișează {products?.length} produse</h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                     {products.length === 0 ? (
                        <Loader />
                     ) : (
                        products?.map((p) => (
                           <div key={p._id}>
                              <ProductCard p={p} />
                           </div>
                        ))
                     )}
                  </div>
               </div>
            </div>
         </div>
         <Footer />
      </>
   );
};

export default Shop;
