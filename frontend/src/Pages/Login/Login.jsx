// eslint-disable-next-line no-unused-vars
import React from "react";
import "../../shared.css";
import "./Login.css";
/**
 * TODO
 * [] > Rute pentru linkuri
 * [] > Cleanup, daca e nevoie
 */
export const Login = () => {
   return (
      <div className="max-w-lg mx-auto p-8 pb-4 login-register-card rounded-lg overflow-hidden shadow-2xl">
         <div className="px-6 py-4">
            <p className="text-left text-lg  mb-4 font-bold register-text">Înregistrare</p>
            <h2 className="text-center text-3xl mb-8 title">Bine ai venit pe Webhub!</h2>
            <div className="mb-4">
               <label htmlFor="username" className="block text-sm font-semibold mb-2">
                  Nume utilizator
               </label>
               <input
                  type="text"
                  id="username"
                  className="block w-full px-3 py-2 border rounded shadow appearance-none  leading-tight focus:outline-none focus:shadow-outline"
               />
            </div>
            <div className="mb-4">
               <label htmlFor="email" className="block text-sm font-semibold mb-2">
                  Adresa de Email
               </label>
               <input type="email" id="email" className="block w-full px-3 py-2 border rounded shadow appearance-none leading-tight focus:outline-none focus:shadow-outline" />
            </div>
            <div className="mb-4">
               <label htmlFor="password" className="block text-sm font-semibold mb-2">
                  Parola
               </label>
               <input
                  type="password"
                  id="password"
                  className="block w-full px-3 py-2 border rounded shadow appearance-none leading-tight focus:outline-none focus:shadow-outline"
               />
            </div>
            <div className="mb-6">
               <label htmlFor="password" className="block text-sm font-semibold mb-2">
                  Confirmă Parola
               </label>
               <input
                  type="password"
                  id="password"
                  className="block w-full px-3 py-2 border rounded shadow appearance-none leading-tight focus:outline-none focus:shadow-outline"
               />
            </div>
            <div className="flex items-center mb-2">
               <button className=" text-white font-bold py-2 px-4 focus:outline-none focus:shadow-outline login-cta" type="button">
                  Înregistrare
               </button>
            </div>
            <div>
               <p className="text-center text-sm mb-6">
                  Ai deja un cont? Autentifică-te
                  <a href="#" className="font-bold ml-1 here-link">
                     aici!
                  </a>
               </p>
            </div>
            <div>
               <p className="text-left text-xs">
                  Înregistrându-mă, sunt de acord cu{" "}
                  <a href="#" className="font-semibold underline underline-offset-2 here-link">
                     Termenii și Condițiile
                  </a>
                  ,
                  <a href="#" className="font-semibold underline underline-offset-2 here-link">
                     Politica de Copyright
                  </a>
                  ,respectiv{" "}
                  <a href="#" className="font-semibold underline underline-offset-2 here-link">
                     Politica de Confidențialitate
                  </a>{" "}
                  . <span className="font-bold">WebHub</span> își rezervă dreptul de a le modifica la liberă alegere reflectând modul de gestionare al produselor afișate,
                  respectiv gestionarea datelor cu caracter personal.
               </p>
            </div>
         </div>
      </div>
   );
};
