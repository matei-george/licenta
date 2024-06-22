import { useState, useEffect } from "react";
import AdminMenu from "../AdminMenu/AdminMenu.jsx";
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
      <div className="container xl:mx-[9rem] sm:mx-[0]">
         <div className="flex flex-col md:flex-row">
            <AdminMenu />
            <div className="md:w-3/4 p-3">
               <div className="h-12">Update / Delete Product</div>

               {image && (
                  <div className="text-center">
                     <img src={typeof image === "object" ? URL.createObjectURL(image) : image} alt="product" className="block mx-auto w-full h-[40%]" />
                  </div>
               )}

               <div className="mb-3">
                  <label className="text-white py-2 px-4 block w-full text-center rounded-lg cursor-pointer font-bold">
                     {image ? (typeof image === "object" ? image.name : "Uploaded image") : "Upload image"}
                     <input type="file" name="image" accept="image/*" onChange={uploadImageHandler} className="text-white" />
                  </label>
               </div>

               {zipUrl && (
                  <div className="text-center">
                     <p className="block mx-auto">ZIP File Uploaded: {zipUrl}</p>
                  </div>
               )}

               <div className="mb-3">
                  <label className="text-white py-2 px-4 block w-full text-center rounded-lg cursor-pointer font-bold">
                     {zipFile ? (typeof zipFile === "object" ? zipFile.name : "Uploaded ZIP File") : "Upload ZIP File"}
                     <input type="file" name="zipfile" accept=".zip" onChange={uploadZipHandler} className="text-white" />
                  </label>
               </div>

               <div className="p-3">
                  <div className="flex flex-wrap">
                     <div className="one">
                        <label htmlFor="name">Name</label> <br />
                        <input
                           type="text"
                           className="p-4 mb-3 w-[30rem] border rounded-lg bg-[#101011] text-white mr-[5rem]"
                           value={name}
                           onChange={(e) => setName(e.target.value)}
                        />
                     </div>

                     <div className="two">
                        <label htmlFor="price">Price</label> <br />
                        <input
                           type="number"
                           className="p-4 mb-3 w-[30rem] border rounded-lg bg-[#101011] text-white"
                           value={price}
                           onChange={(e) => setPrice(e.target.value)}
                        />
                     </div>
                  </div>

                  <div className="flex flex-wrap">
                     <div>
                        <label htmlFor="quantity">Quantity</label> <br />
                        <input
                           type="number"
                           min="1"
                           className="p-4 mb-3 w-[30rem] border rounded-lg bg-[#101011] text-white mr-[5rem]"
                           value={quantity}
                           onChange={(e) => setQuantity(e.target.value)}
                        />
                     </div>
                     <div>
                        <label htmlFor="brand">Brand</label> <br />
                        <input type="text" className="p-4 mb-3 w-[30rem] border rounded-lg bg-[#101011] text-white" value={brand} onChange={(e) => setBrand(e.target.value)} />
                     </div>
                  </div>

                  <label htmlFor="description" className="my-5">
                     Description
                  </label>
                  <textarea className="p-2 mb-3 bg-[#101011] border rounded-lg w-[95%] text-white" value={description} onChange={(e) => setDescription(e.target.value)} />

                  <div className="flex justify-between">
                     <div>
                        <label htmlFor="stock">Count In Stock</label> <br />
                        <input
                           type="text"
                           className="p-4 mb-3 w-[30rem] border rounded-lg bg-[#101011] text-white mr-[5rem]"
                           value={stock}
                           onChange={(e) => setStock(e.target.value)}
                        />
                     </div>

                     <div>
                        <label htmlFor="category">Category</label> <br />
                        <select className="p-4 mb-3 w-[30rem] border rounded-lg bg-[#101011] text-white" value={category} onChange={(e) => setCategory(e.target.value)}>
                           <option value="">Choose Category</option>
                           {categories.map((c) => (
                              <option key={c._id} value={c._id}>
                                 {c.name}
                              </option>
                           ))}
                        </select>
                     </div>
                  </div>

                  <div>
                     <button onClick={handleSubmit} className="py-4 px-10 mt-5 rounded-lg text-lg font-bold bg-green-600 mr-6">
                        Update
                     </button>
                     <button onClick={handleDelete} className="py-4 px-10 mt-5 rounded-lg text-lg font-bold bg-pink-600">
                        Delete
                     </button>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
};

export default AdminProductUpdate;
