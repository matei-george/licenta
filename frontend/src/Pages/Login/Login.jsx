// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useLoginMutation } from "../../redux/api/usersApiSlice";
import { setCredentials } from "../../redux/features/auth/authSlice";
import { toast } from "react-toastify";
import "../../shared.css";
import "./Login.css";

const Login = () => {
   const [email, setEmail] = useState("");
   const [password, setPassword] = useState("");
   const dispatch = useDispatch();
   const navigate = useNavigate();
   const [login, { isLoading }] = useLoginMutation();
   const { userInfo } = useSelector((state) => state.auth);

   const { search } = useLocation();
   const sp = new URLSearchParams(search);
   const redirect = sp.get("redirect") || "/";

   useEffect(() => {
      if (userInfo) {
         navigate(redirect); // Redirect to the specified redirect path or "/"
      }
   }, [navigate, redirect, userInfo]);

   const handleSubmit = async (e) => {
      e.preventDefault();
      try {
         const { data } = await login({ email, password }).unwrap(); // Perform the login mutation
         dispatch(setCredentials(data)); // Dispatch action to set user credentials in Redux
         navigate("/"); // Redirect to homepage upon successful login
      } catch (err) {
         console.error("Failed to log in:", err);
         // Handle login error (e.g., display error message)
         toast.error(err?.data?.message || err.error);
      }
   };

   return (
      <main className="login-bg flex justify-center items-center">
         <div className="max-w-lg mx-auto p-8 login-register-card rounded-lg overflow-hidden shadow-2xl">
            <div className="px-6 py-4">
               <p className="text-left text-lg mb-4 font-bold register-text">Autentificare</p>
               <h2 className="text-center text-3xl mb-8 title">Bine ai venit pe Webhub!</h2>
               <form onSubmit={handleSubmit}>
                  <div className="mb-4">
                     <label htmlFor="email" className="block text-sm font-semibold mb-2">
                        Adresa de Email
                     </label>
                     <input
                        type="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="block w-full px-3 py-2 border rounded shadow appearance-none leading-tight focus:outline-none focus:shadow-outline"
                        required
                     />
                  </div>
                  <div className="mb-4">
                     <label htmlFor="password" className="block text-sm font-semibold mb-2">
                        Parola
                     </label>
                     <input
                        type="password"
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="block w-full px-3 py-2 border rounded shadow appearance-none leading-tight focus:outline-none focus:shadow-outline"
                        required
                     />
                  </div>
                  <div className="flex items-center mb-2">
                     <button type="submit" className="text-white font-bold py-2 px-4 focus:outline-none focus:shadow-outline login-cta" disabled={isLoading}>
                        {isLoading ? "Autentificare..." : "Autentificare"}
                     </button>
                  </div>
               </form>
               <div>
                  <p className="text-center text-sm mb-6">
                     Nu ai cont? Crează unul
                     <Link to="/register" className="font-bold ml-1 here-link">
                        aici!
                     </Link>
                  </p>
               </div>
               <div>
                  <p className="text-left text-xs">
                     Autentificându-mă, sunt de acord cu{" "}
                     <Link to="/termeni" className="font-semibold underline underline-offset-2 here-link">
                        Termenii și Condițiile
                     </Link>
                     ,
                     <Link to="/copyright" className="font-semibold underline underline-offset-2 here-link">
                        Politica de Copyright
                     </Link>
                     ,respectiv{" "}
                     <Link to="/politica" className="font-semibold underline underline-offset-2 here-link">
                        Politica de Confidențialitate
                     </Link>
                     . <span className="font-bold">WebHub</span> își rezervă dreptul de a le modifica la liberă alegere reflectând modul de gestionare al produselor afișate,
                     respectiv gestionarea datelor cu caracter personal.
                  </p>
               </div>
            </div>
         </div>
      </main>
   );
};

export default Login;
