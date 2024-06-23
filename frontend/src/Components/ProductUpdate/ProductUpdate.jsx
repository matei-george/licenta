import { useState, useEffect } from "react";
import AdminNavbar from "../AdminNavbar/AdminNavbar.jsx";
import { useNavigate, useParams } from "react-router-dom";
import {
   useUpdateProductMutation,
   useDeleteProductMutation,
   useGetProductByIdQuery,
   useUploadProductImageMutation,
   useUploadProductZipMutation,
} from "../../redux/api/productApiSlice.js";
import { useFetchCategoriesQuery } from "../../redux/api/categoryApiSlice.js";

const AdminProductUpdate = () => {
   const params = useParams();
   const { data: productData } = useGetProductByIdQuery(params._id);

   const [image, setImage] = useState(productData?.image || "");
   const [name, setName] = useState(productData?.name || "");
   const [description, setDescription] = useState(productData?.description || "");
   const [price, setPrice] = useState(productData?.price || "");
   const [category, setCategory] = useState(productData?.category?._id || ""); // Assuming category._id is the correct field
   const [quantity, setQuantity] = useState(productData?.quantity || "");
   const [brand, setBrand] = useState(productData?.brand || "");
   const [stock, setStock] = useState(productData?.countInStock || "");
   const [zipFile, setZipFile] = useState(productData?.zipFile || "");
   const [zipUrl, setZipUrl] = useState(null);

   const navigate = useNavigate();
   const { data: categories = [] } = useFetchCategoriesQuery();
   const [uploadProductImage] = useUploadProductImageMutation();
   const [uploadProductZip] = useUploadProductZipMutation();
   const [updateProduct] = useUpdateProductMutation();
   const [deleteProduct] = useDeleteProductMutation();

   useEffect(() => {
      if (productData && productData._id) {
         setName(productData.name);
         setDescription(productData.description);
         setPrice(productData.price);
         setCategory(productData.category?._id || ""); // Ensure category._id is properly set
         setQuantity(productData.quantity);
         setBrand(productData.brand);
         setImage(productData.image);
         setStock(productData.countInStock);
         setZipFile(productData.zipFile);
      }
   }, [productData]);

   const uploadImageHandler = async (e) => {
      const file = e.target.files[0]; // Assuming only one file is uploaded
      setImage(file); // Update image state to the File object

      const formData = new FormData();
      formData.append("image", file);

      try {
         const res = await uploadProductImage(formData).unwrap();
         alert("Image uploaded successfully");
         setImage(res.image); // Update image state with the URL returned from the server if needed
      } catch (err) {
         console.error("Image upload failed:", err);
         alert("Image upload failed. Try again.");
      }
   };

   const uploadZipHandler = async (e) => {
      const file = e.target.files[0];
      setZipFile(file);

      const formData = new FormData();
      formData.append("zipfile", file);

      try {
         const res = await uploadProductZip(formData).unwrap();
         alert("ZIP file uploaded successfully");
         setZipFile(res.file); // Update zipFile state with the URL returned from the server if needed
         setZipUrl(res.file);
      } catch (err) {
         console.error("ZIP file upload failed:", err);
         alert("ZIP file upload failed. Try again.");
      }
   };

   const handleSubmit = async (e) => {
      e.preventDefault();

      const formData = new FormData();
      formData.append("name", name);
      formData.append("description", description);
      formData.append("price", price);
      formData.append("category", category);
      formData.append("quantity", quantity);
      formData.append("brand", brand);
      formData.append("countInStock", stock);

      // Only append image if it's changed
      if (typeof image === "object") {
         formData.append("image", image); // Assuming image is already a File object
      }

      // Only append zipFile if it's changed
      if (typeof zipFile === "object") {
         formData.append("zipfile", zipFile);
      }

      try {
         const data = await updateProduct({ productId: params._id, formData }).unwrap();

         if (data?.error) {
            alert(data.error);
         } else {
            alert("Product successfully updated");
            navigate("/admin/allproductslist");
         }
      } catch (err) {
         console.error("Product update failed:", err);
         alert("Product update failed. Try again.");
      }
   };

   const handleDelete = async () => {
      try {
         let answer = window.confirm("Are you sure you want to delete this product?");
         if (!answer) return;

         const { data } = await deleteProduct(params._id);
         alert(`"${data.name}" is deleted`);
         navigate("/admin/allproductslist");
      } catch (err) {
         console.error("Delete failed:", err);
         alert("Delete failed. Try again.");
      }
   };

   return (
      <>
         <AdminNavbar />
         <div className="container xl:mx-[9rem] sm:mx-[0]">
            <div className="flex flex-col md:flex-row">
               <div className="w-full px-12 mr-24">
                  <div className="h-12 text-3xl text-center font-semibold my-8">Actualizează un produs</div>

                  {image && (
                     <div className="text-center">
                        <img src={typeof image === "object" ? URL.createObjectURL(image) : image} alt="product" className="block mx-auto max-h-[400px]" />
                     </div>
                  )}

                  <div className="mb-3 border rounded-lg p-4">
                     <label className="block w-full text-center rounded-lg cursor-pointer font-bold py-4">
                        {image ? (typeof image === "object" ? image.name : "Încarcă imaginea") : "Încarcă imaginea"}
                        <input type="file" name="image" accept="image/*" onChange={uploadImageHandler} className="hidden" />
                     </label>
                  </div>

                  {zipUrl && (
                     <div className="text-center">
                        <p className="block mx-auto">Fișier ZIP încărcat: {zipUrl}</p>
                     </div>
                  )}

                  <div className="mb-3 border rounded-lg p-4">
                     <label className="block w-full text-center rounded-lg cursor-pointer font-bold py-4">
                        {zipFile ? (typeof zipFile === "object" ? zipFile.name : "Fișier ZIP încărcat") : "Încarcă fișierul ZIP"}
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
                           <label htmlFor="quantity" className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                              Cantitate
                           </label>
                           <input
                              type="number"
                              className="block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                              value={quantity}
                              onChange={(e) => setQuantity(e.target.value)}
                           />
                        </div>
                        <div className="w-full md:w-1/2 px-3">
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

                        <div className="w-full md:w-1/2 px-3">
                           <label htmlFor="category" className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                              Categorie
                           </label>
                           <select
                              id="category"
                              className="block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                              value={category}
                              onChange={(e) => setCategory(e.target.value)}
                           >
                              <option value="">Selectează categoria</option>
                              {categories.map((c) => (
                                 <option key={c._id} value={c._id}>
                                    {c.name}
                                 </option>
                              ))}
                           </select>
                        </div>
                     </div>

                     <div>
                        <button onClick={handleSubmit} className="py-4 px-10 mt-5 rounded-lg text-lg font-bold mr-6 text-white update-product-button">
                           Actualizează
                        </button>
                        <button onClick={handleDelete} className="py-4 px-10 mt-5 rounded-lg text-lg font-bold bg-pink-600 text-white">
                           Șterge
                        </button>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </>
   );
};

export default AdminProductUpdate;
