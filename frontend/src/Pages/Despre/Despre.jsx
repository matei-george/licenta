// eslint-disable-next-line no-unused-vars
import React from "react";

// Componente
import { Navbar } from "../../Components/Navbar/Navbar";
import { Footer } from "../../Components/Footer/Footer";

// Stiluri
import "../../shared.css";
import "./Despre.css";

export const Despre = () => {
   return (
      <main className="flex flex-col">
         <Navbar />
         <div className="despre-content mx-auto my-8 flex-1">
            <h1 className="text-6xl despre-title text-center mb-8">Despre noi</h1>
            <p>
               La WebHub, credem că fiecare idee are potențialul de a deveni o experiență online captivantă și funcțională. Fondat în 2024, ne-am angajat să oferim soluții web
               de înaltă calitate pentru clienții noștri din întreaga lume
            </p>
            <p className="font-bold text-xl mt-2">Cine Suntem</p>
            <p>
               Suntem o echipă dedicată de dezvoltatori web, designeri și experți în experiența utilizatorului (UX/UI) cu o pasiune comună pentru inovație și performanță. Cu o
               experiență combinată de peste 25 ani în industrie, am lucrat cu clienți de diverse industrii și am livrat produse web de succes care nu doar impresionează, ci
               și rezolvă probleme reale.
            </p>
            <p className="font-bold text-xl mt-2">Viziunea Noastră</p>
            <p>
               Misiunea noastră la WebHub este să construim o lume online mai accesibilă, funcțională și plină de inspirație. Ne propunem să aducem valoare și inovație în
               fiecare proiect pe care-l abordăm, oferind soluții personalizate și de încredere pentru nevoile unice ale clienților noștri.
            </p>
            <p className="font-bold text-xl mt-2">Valorile noastre</p>
            <ul className="list-disc px-8">
               <li>
                  <span className="font-semibold">Inovație: </span>
                  Suntem mereu în căutarea noilor tehnologii și tendințe pentru a oferi cele mai bune componente web.
               </li>
               <li>
                  <span className="font-semibold">Calitate: </span>
                  Ne angajăm să livrăm produse web de cea mai înaltă calitate, cu un design impecabil și funcționalitate perfectă.
               </li>
               <li>
                  <span className="font-semibold">Sustenabilitate: </span>
                  Ne dorim să construim parteneriate de lungă durată cu clienții noștri, bazate pe încredere și comunicare deschisă.
               </li>
            </ul>
            <p className="font-bold text-xl mt-2">Contactează-ne</p>
            <p>
               Dacă ești în căutarea unui partener de încredere pentru dezvoltarea și optimizarea proiectului tău online, nu ezita să ne contactezi. Suntem aici pentru a
               transforma ideile tale în realitate pe web.
            </p>
         </div>
         <Footer />
      </main>
   );
};
