// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import "../../shared.css";
import "./Register.css";
import { useRegisterMutation } from "../../redux/api/usersApiSlice";
import { useDispatch } from "react-redux";
import { setCredentials } from "../../redux/features/auth/authSlice";
import { useNavigate } from "react-router";

const Register = () => {
   const [username, setUsername] = useState("");
   const [email, setEmail] = useState("");
   const [password, setPassword] = useState("");
   const [confirmPassword, setConfirmPassword] = useState("");
   const [register, { isLoading }] = useRegisterMutation();
   const dispatch = useDispatch();
   const navigate = useNavigate();

   const handleSubmit = async (e) => {
      e.preventDefault();
      if (password !== confirmPassword) {
         alert("Parolele nu coincid.");
         return;
      }

      try {
         const userData = { username, email, password };
         const newUser = await register(userData).unwrap();
         dispatch(setCredentials(newUser)); // Assuming newUser contains user info
         // Optionally, perform additional actions after registration
         alert("Inregistrare cu succes! Bine ai venit pe WebHub!");
         navigate("/");
      } catch (error) {
         alert(error.message || "Eroare la înregistrare.");
         // Handle error: display message, reset form, etc.
      }
   };

   return (
      <main className="flex register-bg justify-center items-center">
         <div className="max-w-lg mx-auto p-8 pb-4 login-register-card rounded-lg overflow-hidden shadow-2xl">
            <div className="px-6 py-4">
               <p className="text-left text-lg mb-4 font-bold register-text">Înregistrare</p>
               <h2 className="text-center text-3xl mb-8 title">Bine ai venit pe WebHub!</h2>
               <form onSubmit={handleSubmit}>
                  <div className="mb-4">
                     <label htmlFor="username" className="block text-sm font-semibold mb-2">
                        Nume utilizator
                     </label>
                     <input
                        type="text"
                        id="username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        className="block w-full px-3 py-2 border rounded shadow appearance-none leading-tight focus:outline-none focus:shadow-outline"
                        required
                     />
                  </div>
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
                  <div className="mb-6">
                     <label htmlFor="confirmPassword" className="block text-sm font-semibold mb-2">
                        Confirmă Parola
                     </label>
                     <input
                        type="password"
                        id="confirmPassword"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        className="block w-full px-3 py-2 border rounded shadow appearance-none leading-tight focus:outline-none focus:shadow-outline"
                        required
                     />
                  </div>
                  <div className="flex items-center mb-2">
                     <button type="submit" className="text-white font-bold py-2 px-4 focus:outline-none focus:shadow-outline login-cta" disabled={isLoading}>
                        Înregistrare
                     </button>
                  </div>
               </form>
               <div>
                  <p className="text-center text-sm mb-6">
                     Ai deja un cont? Autentifică-te
                     <a href="/login" className="font-bold ml-1 here-link">
                        aici!
                     </a>
                  </p>
               </div>
               <div>
                  <p className="text-left text-xs">
                     Înregistrându-mă, sunt de acord cu{" "}
                     <a href="/termeni" className="font-semibold underline underline-offset-2 here-link">
                        Termenii și Condițiile
                     </a>
                     ,{" "}
                     <a href="/copyright" className="font-semibold underline underline-offset-2 here-link">
                        Politica de Copyright
                     </a>
                     , respectiv{" "}
                     <a href="/politica" className="font-semibold underline underline-offset-2 here-link">
                        Politica de Confidențialitate
                     </a>
                     . <span className="font-bold">WebHub</span> își rezervă dreptul de a le modifica la liberă alegere reflectând modul de gestionare al produselor afișate,
                     respectiv gestionarea datelor cu caracter personal.
                  </p>
               </div>
            </div>
         </div>
      </main>
   );
};

export default Register;
