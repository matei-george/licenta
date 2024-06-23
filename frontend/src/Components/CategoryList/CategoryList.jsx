import { useState } from "react";
import { useCreateCategoryMutation, useUpdateCategoryMutation, useDeleteCategoryMutation, useFetchCategoriesQuery } from "../../redux/api/categoryApiSlice.js";
import CategoryForm from "../CategoryForm/CategoryForm.jsx";
import AdminNavbar from "../AdminNavbar/AdminNavbar.jsx";

const CategoryList = () => {
   const { data: categories } = useFetchCategoriesQuery();
   const [name, setName] = useState("");
   const [selectedCategory, setSelectedCategory] = useState(null);
   const [updatingName, setUpdatingName] = useState("");

   const [createCategory] = useCreateCategoryMutation();
   const [updateCategory] = useUpdateCategoryMutation();
   const [deleteCategory] = useDeleteCategoryMutation();

   const handleCreateCategory = async (e) => {
      e.preventDefault();

      if (!name) {
         alert("Category name is required");
         return;
      }

      try {
         const result = await createCategory({ name }).unwrap();
         if (result.error) {
            alert(result.error);
         } else {
            setName("");
            alert(`${result.name} a fost creată.`);
         }
      } catch (error) {
         console.error(error);
         alert("Nu a fost posibilă crearea categoriei.");
      }
   };

   const handleUpdateCategory = async (e) => {
      e.preventDefault();

      if (!updatingName) {
         alert("Numele categoriei este necesar!");
         return;
      }

      try {
         const result = await updateCategory({
            categoryId: selectedCategory._id,
            updatedCategory: {
               name: updatingName,
            },
         }).unwrap();

         if (result.error) {
            alert(result.error);
         } else {
            alert(`${result.name} a fost actualizată.`);
            setSelectedCategory(null);
            setUpdatingName("");
         }
      } catch (error) {
         console.error(error);
         alert("Nu a fost posibilă actualizarea categoriei.");
      }
   };

   const handleDeleteCategory = async () => {
      try {
         const result = await deleteCategory(selectedCategory._id).unwrap();

         if (result.error) {
            alert(result.error);
         } else {
            alert(`${result.name} a fost ștearsă.`);
            setSelectedCategory(null);
         }
      } catch (error) {
         console.error(error);
         alert("Nu a fost posibilă ștergerea categoriei.");
      }
   };

   return (
      <>
         <AdminNavbar />
         <div className="ml-[10rem] flex flex-col md:flex-row">
            <div className="w-full px-12 mr-24">
               <div className="h-12 text-3xl text-center font-semibold my-8">Gestionează categoriile</div>
               <CategoryForm value={name} setValue={setName} handleSubmit={handleCreateCategory} />
               <br />
               <hr />

               <div className="flex flex-wrap">
                  {categories?.map((category) => (
                     <div key={category._id}>
                        <button
                           className="bg-white border py-2 px-4 rounded-lg hover:font-bold m-3 focus:outline-none focus:ring-2  focus:ring-opacity-50 "
                           onClick={() => {
                              setSelectedCategory(category);
                              setUpdatingName(category.name);
                           }}
                        >
                           {category.name}
                        </button>
                     </div>
                  ))}
               </div>
               {selectedCategory && (
                  <CategoryForm
                     value={updatingName}
                     setValue={(value) => setUpdatingName(value)}
                     handleSubmit={handleUpdateCategory}
                     buttonText="Actualizează"
                     handleDelete={handleDeleteCategory}
                  />
               )}
            </div>
         </div>
      </>
   );
};

export default CategoryList;
