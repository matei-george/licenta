import { useState } from "react";
import { useCreateCategoryMutation, useUpdateCategoryMutation, useDeleteCategoryMutation, useFetchCategoriesQuery } from "../../redux/api/categoryApiSlice.js";
import CategoryForm from "../CategoryForm/CategoryForm.jsx";
import AdminMenu from "../AdminMenu/AdminMenu.jsx";

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
      <div className="ml-[10rem] flex flex-col md:flex-row">
         <AdminMenu />
         <div className="md:w-3/4 p-3">
            <div className="h-12">Gestionează categoriile</div>
            <CategoryForm value={name} setValue={setName} handleSubmit={handleCreateCategory} />
            <br />
            <hr />

            <div className="flex flex-wrap">
               {categories?.map((category) => (
                  <div key={category._id}>
                     <button
                        className="bg-white border border-pink-500 text-pink-500 py-2 px-4 rounded-lg m-3 hover:bg-pink-500 hover:text-white focus:outline-none focus:ring-2 focus:ring-pink-500 focus:ring-opacity-50"
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
   );
};

export default CategoryList;
