import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCreateProductMutation, useUploadProductImageMutation, useUploadProductZipMutation } from "../../redux/api/productApiSlice";
import { useFetchCategoriesQuery } from "../../redux/api/categoryApiSlice";
import AdminNavbar from "../AdminNavbar/AdminNavbar";

import "./ProductList.css";

const ProductList = () => {
   const [image, setImage] = useState("");
   const [name, setName] = useState("");
   const [description, setDescription] = useState("");
   const [price, setPrice] = useState("");
   const [category, setCategory] = useState("");
   const [brand, setBrand] = useState("");
   const [stock, setStock] = useState(0);
   const [imageUrl, setImageUrl] = useState(null);
   const [zipFile, setZipFile] = useState("");
   const [zipUrl, setZipUrl] = useState(null);
   const [quantity, setQuantity] = useState("");
   const navigate = useNavigate();

   const [uploadProductImage] = useUploadProductImageMutation();
   const [uploadProductZip] = useUploadProductZipMutation();
   const [createProduct] = useCreateProductMutation();
   const { data: categories } = useFetchCategoriesQuery();

   const handleSubmit = async (e) => {
      e.preventDefault();

      try {
         const productData = new FormData();
         productData.append("image", image);
         productData.append("name", name);
         productData.append("description", description);
         productData.append("price", price);
         productData.append("category", category);
         productData.append("brand", brand);
         productData.append("quantity", 9999);
         productData.append("countInStock", stock);
         productData.append("zipfile", zipFile);

         const { data } = await createProduct(productData);

         if (data.error) {
            alert("Nu a fost posibilă crearea produsului.");
         } else {
            alert(`${data.name} a fost creat.`);
            navigate("/");
         }
      } catch (error) {
         console.error(error);
         alert("Nu a fost posibilă crearea produsului.");
      }
   };

   const uploadImageHandler = async (e) => {
      const formData = new FormData();
      formData.append("image", e.target.files[0]);

      try {
         const res = await uploadProductImage(formData).unwrap();
         alert(res.message);
         setImage(res.image);
         setImageUrl(res.image);
      } catch (error) {
         alert(error?.data?.message || "Eroare la încărcarea imaginii.");
      }
   };

   const uploadZipHandler = async (e) => {
      const formData = new FormData();
      formData.append("zipfile", e.target.files[0]);

      try {
         const res = await uploadProductZip(formData).unwrap();
         alert(res.message);
         setZipFile(res.file);
         setZipUrl(res.file);
      } catch (error) {
         alert(error?.data?.message || "Eroare la încărcarea fișierului ZIP.");
      }
   };

   return (
      <>
         <AdminNavbar />

         <div className="container xl:mx-[9rem] sm:mx-[0]">
            <div className="flex flex-col md:flex-row">
               <div className="w-full px-12 mr-24">
                  <div className="h-12 text-3xl text-center font-semibold my-8">Crează un produs</div>

                  {imageUrl && (
                     <div className="text-center">
                        <img src={imageUrl} alt="product" className="block mx-auto max-h-[200px]" />
                     </div>
                  )}

                  <div className="mb-3 border rounded-lg p-4">
                     <label className="block w-full text-center rounded-lg cursor-pointer font-bold py-11">
                        {image ? image.name : "Încarcă imaginea"}
                        <input type="file" name="image" accept="image/*" onChange={uploadImageHandler} className="hidden" />
                     </label>
                  </div>

                  {zipUrl && (
                     <div className="text-center">
                        <p className="block mx-auto">ZIP File Uploaded: {zipUrl}</p>
                     </div>
                  )}

                  <div className="mb-3 border rounded-lg p-4">
                     <label className="block w-full text-center rounded-lg cursor-pointer font-bold py-11">
                        {zipFile ? zipFile.name : "Încarcă fișierul ZIP"}
                        <input type="file" name="zipfile" accept=".zip" onChange={uploadZipHandler} className="hidden" />
                     </label>
                  </div>

                  <div className="p-3">
                     <div className="flex flex-wrap mb-6">
                        <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                           <label htmlFor="name" className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                              Nume
                           </label>
                           <input
                              type="text"
                              className="block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                              value={name}
                              onChange={(e) => setName(e.target.value)}
                           />
                        </div>
                        <div className="w-full md:w-1/2 px-3">
                           <label htmlFor="price" className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                              Preț
                           </label>
                           <input
                              type="number"
                              className="block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                              value={price}
                              onChange={(e) => setPrice(e.target.value)}
                           />
                        </div>
                     </div>
                     <div className="flex flex-wrap mb-6">
                        <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                           <label htmlFor="brand" className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                              Brand
                           </label>
                           <input
                              type="text"
                              className="block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                              value={brand}
                              onChange={(e) => setBrand(e.target.value)}
                           />
                        </div>
                        <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                           <label htmlFor="stock" className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                              Număr pe stoc
                           </label>
                           <input
                              type="number"
                              className="block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                              value={stock}
                              onChange={(e) => setStock(e.target.value)}
                           />
                        </div>
                     </div>

                     <label htmlFor="description" className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                        Descriere
                     </label>
                     <textarea
                        id="description"
                        className="block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                     ></textarea>

                     <div className="flex flex-wrap mb-6">
                        <div className="w-full md:w-1/2 px-3">
                           <label htmlFor="category" className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                              Categorie
                           </label>
                           <select
                              id="category"
                              className="block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                              onChange={(e) => setCategory(e.target.value)}
                           >
                              <option value="">Selectează categoria</option>
                              {categories?.map((c) => (
                                 <option key={c._id} value={c._id}>
                                    {c.name}
                                 </option>
                              ))}
                           </select>
                        </div>
                     </div>

                     <button onClick={handleSubmit} className="py-4 px-10 rounded-lg text-lg font-bold bg-blue-500 text-white create-product-button">
                        Crează
                     </button>
                  </div>
               </div>
            </div>
         </div>
      </>
   );
};

export default ProductList;
