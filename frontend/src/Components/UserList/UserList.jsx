import { useEffect, useState } from "react";
import { FaTrash, FaEdit, FaCheck, FaTimes } from "react-icons/fa";
import Loader from "../Loader/Loader";
import Message from "../Message/Message";
import { useDeleteUserMutation, useGetUsersQuery, useUpdateUserMutation } from "../../redux/api/usersApiSlice";
import { toast } from "react-toastify";
import AdminNavbar from "../AdminNavbar/AdminNavbar";

const UserList = () => {
   const { data: users, refetch, isLoading, error } = useGetUsersQuery();

   const [deleteUser] = useDeleteUserMutation();

   const [editableUserId, setEditableUserId] = useState(null);
   const [editableUserName, setEditableUserName] = useState("");
   const [editableUserEmail, setEditableUserEmail] = useState("");

   const [updateUser] = useUpdateUserMutation();

   useEffect(() => {
      refetch();
   }, [refetch]);

   const deleteHandler = async (id) => {
      if (window.confirm("Ești sigur?")) {
         try {
            await deleteUser(id);
            refetch();
         } catch (err) {
            toast.error(err?.data?.message || err.error);
         }
      }
   };

   const toggleEdit = (id, username, email) => {
      setEditableUserId(id);
      setEditableUserName(username);
      setEditableUserEmail(email);
   };

   const updateHandler = async (id) => {
      try {
         await updateUser({
            userId: id,
            username: editableUserName,
            email: editableUserEmail,
         });
         setEditableUserId(null);
         refetch();
      } catch (err) {
         toast.error(err?.data?.message || err.error);
      }
   };

   return (
      <>
         <AdminNavbar />
         <div className="p-4">
            <h1 className="text-3xl font-semibold text-center my-10">Utilizatori</h1>
            {isLoading ? (
               <Loader />
            ) : error ? (
               <Message variant="danger">{error?.data?.message || error.error}</Message>
            ) : (
               <div className="flex flex-col md:flex-row">
                  <table className="w-full md:w-4/5 mx-auto border-collapse">
                     <thead>
                        <tr className="border-b">
                           <th className="px-4 py-2 text-left font-semibold border-r">ID</th>
                           <th className="px-4 py-2 text-left font-semibold border-r">NUME</th>
                           <th className="px-4 py-2 text-left font-semibold border-r">EMAIL</th>
                           <th className="px-4 py-2 text-left font-semibold border-r">ESTE ADMIN?</th>
                           <th className="px-4 py-2 text-left font-semibold">Șterge</th>
                        </tr>
                     </thead>
                     <tbody>
                        {users.map((user) => (
                           <tr key={user._id} className="border-b">
                              <td className="px-4 py-2 border-r">{user._id}</td>
                              <td className="px-4 py-2 border-r">
                                 {editableUserId === user._id ? (
                                    <div className="flex items-center">
                                       <input
                                          type="text"
                                          value={editableUserName}
                                          onChange={(e) => setEditableUserName(e.target.value)}
                                          className="w-full p-2 border rounded-lg"
                                       />
                                       <button onClick={() => updateHandler(user._id)} className="ml-2 bg-blue-500 text-white py-2 px-4 rounded-lg">
                                          <FaCheck />
                                       </button>
                                    </div>
                                 ) : (
                                    <div className="flex items-center">
                                       {user.username}{" "}
                                       <button onClick={() => toggleEdit(user._id, user.username, user.email)}>
                                          <FaEdit className="ml-[1rem]" />
                                       </button>
                                    </div>
                                 )}
                              </td>
                              <td className="px-4 py-2 border-r">
                                 {editableUserId === user._id ? (
                                    <div className="flex items-center">
                                       <input
                                          type="text"
                                          value={editableUserEmail}
                                          onChange={(e) => setEditableUserEmail(e.target.value)}
                                          className="w-full p-2 border rounded-lg"
                                       />
                                       <button onClick={() => updateHandler(user._id)} className="ml-2 bg-blue-500 text-white py-2 px-4 rounded-lg">
                                          <FaCheck />
                                       </button>
                                    </div>
                                 ) : (
                                    <div className="flex items-center">
                                       <a href={`mailto:${user.email}`}>{user.email}</a>{" "}
                                       <button onClick={() => toggleEdit(user._id, user.name, user.email)}>
                                          <FaEdit className="ml-[1rem]" />
                                       </button>
                                    </div>
                                 )}
                              </td>
                              <td className="px-4 py-2 border-r">{user.isAdmin ? <FaCheck style={{ color: "green" }} /> : <FaTimes style={{ color: "red" }} />}</td>
                              <td className="px-4 py-2">
                                 {!user.isAdmin && (
                                    <div className="flex">
                                       <button onClick={() => deleteHandler(user._id)} className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
                                          <FaTrash />
                                       </button>
                                    </div>
                                 )}
                              </td>
                           </tr>
                        ))}
                     </tbody>
                  </table>
               </div>
            )}
         </div>
      </>
   );
};

export default UserList;
