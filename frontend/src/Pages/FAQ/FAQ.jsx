// eslint-disable-next-line no-unused-vars
import React from "react";

// Componente
import { Navbar } from "../../Components/Navbar/Navbar";
import { Footer } from "../../Components/Footer/Footer";

// Stiluri
import "../../shared.css";
import "./FAQ.css";
/**
 * TODO
 * [] > link-uri catre pagini
 */
export const FAQ = () => {
   return (
      <main className="flex flex-col">
         <Navbar />
         <div className="faq-content mx-auto">
            <h1 className="text-6xl faq-title text-center mb-8 mt-8">Întrebări Frecvente</h1>
            <ol className="list-decimal px-4">
               <li className="text-lg font-bold mb-1">Ce este WebHub?</li>
               <p>WebHub este o platformă online care oferă componente web gata de utilizare pentru dezvoltatori și web designeri.</p>
               <li className="text-lg font-bold mb-1">Ce tipuri de componente web pot găsi pe WebHub?</li>
               <p>Pe WebHub găsiți componente precum:</p>
               <ul className="list-disc px-8">
                  <li>Butoane</li>
                  <li>Slidere</li>
                  <li>Meniuri de Navigație</li>
                  <li>Footere</li>
                  <li>... și multe altele</li>
               </ul>
               <li className="text-lg font-bold mb-1">Cum pot achiziționa componente de pe WebHub?</li>
               <p>
                  Pentru a achiziționa componente, trebuie să vă creați un cont gratuit pe WebHub. După autentificare, puteți naviga prin colecția noastră și să le adăugați în
                  coș. Apoi puteți plăti și descărca componentele.
               </p>
               <li className="text-lg font-bold mb-1">Pot personaliza componentele achiziționate?</li>
               <p>
                  Da, majoritatea componentelor sunt personalizabile. Puteți schimba culorile, dimensiunile și alte aspecte folosind codul sursă și opțiunile de configurare
                  disponibile.
               </p>
               <li className="text-lg font-bold mb-1">Care sunt avantajele utilizării componentelor WebHub?</li>
               <ul className="list-disc px-8">
                  <li>Economisiți timp și efort de dezvoltare</li>
                  <li>Obțineți un design profesionist și modern</li>
                  <li>Vă extindeți capabilitățile învâțând cum funcționează acestea</li>
                  <li>Primiți de suport tehnic și actualizări periodice</li>
               </ul>
               <li className="text-lg font-bold mb-1">Pot folosi componentele pe mai multe site-uri?</li>
               <p>
                  Da, acestea pot fi utilizate pe mai multe website-uri cât timp sunt respectate{" "}
                  <a href="" className="font-semibold mr-1">
                     Termenii și Condițiile
                  </a>
                  , respectiv
                  <a href="" className="font-semibold mx-1">
                     Politica de Copyright
                  </a>
                  ale website-ului.
               </p>
               <li className="text-lg font-bold mb-1">Ce se întâmplă dacă nu sunt mulțumit de o componentă achiziționată?</li>
               <p>Dacă nu sunteți mulțumit, puteți solicita o rambursare integrală în termen de 30 de zile de la achiziție.</p>
               <li className="text-lg font-bold mb-1">Cum pot obține suport tehnic?</li>
               <p className="mb-8">
                  Pentru suport tehnic, puteți să ne contactați printr-un email către{" "}
                  <a href="#" className="font-semibold mr-1">
                     suport@webhub.ro
                  </a>
                  sau puteți accesa pagina de
                  <a href="" className="font-semibold mr-1">
                     Contact
                  </a>
                  pentru mai multe modalități de contact.
               </p>
            </ol>
         </div>
         <Footer />
      </main>
   );
};
