// eslint-disable-next-line no-unused-vars
import React from "react";

// Componente
import { Navbar } from "../../Components/Navbar/Navbar";
import { Footer } from "../../Components/Footer/Footer";

// Stiluri
import "../../shared.css";
import "./TermeniCond.css";

export const TermeniCond = () => {
   return (
      <main className="flex flex-col">
         <Navbar />
         <div className="tc-content mx-auto">
            <h1 className="text-6xl tc-title text-center mb-8 mt-8">Termenii și Condițiile WebHub</h1>
            <ol className="list-decimal px-4">
               <li className="text-lg font-bold mb-1">Definiții</li>
               <ul className="list-disc px-8">
                  <li>
                     <span className="font-bold">&quot;WebHub&quot; </span>
                     se referă la platforma online care oferă utilizatorilor săi acces la o varietate de componente web pentru integrarea acestora în proiectele lor.
                  </li>
                  <li>
                     <span className="font-bold">&quot;Utilizator&quot; </span>
                     se referă la persoana fizică sau juridică care accesează și utilizează platforma WebHub pentru achiziționarea de componente web.
                  </li>
               </ul>
               <li className="text-lg font-bold mb-1">Accesul și Utilizarea Platformei</li>
               <ul className="list-disc px-8">
                  <li>
                     Accesul la platforma WebHub este disponibil prin intermediul website-ului oficial și poate fi utilizat pentru vizualizarea, selecția și achiziționarea
                     componentelor web disponibile.
                  </li>
                  <li>
                     Utilizatorii trebuie să își creeze un cont pentru a accesa anumite funcționalități ale platformei. Contul poate fi creat prin completarea formularului de
                     înregistrare și furnizarea informațiilor solicitate.
                  </li>
                  <li>Utilizatorii sunt responsabili pentru menținerea confidențialității datelor de autentificare și pentru orice activitate care are loc pe contul lor.</li>
               </ul>
               <li className="text-lg font-bold mb-1">Componente Web</li>
               <ul className="list-disc px-8">
                  <li>WebHub oferă o varietate de componente web, cum ar fi butoane, slidere, meniuri etc., disponibile pentru achiziționare.</li>
                  <li>Descrierile și specificațiile componentelor web sunt afișate pe platformă împreună cu prețurile și imagini relevante.</li>
                  <li>Utilizatorii pot adăuga componente web în coșul lor de cumpărături, unde vor avea posibilitatea să revizuiască și să finalizeze comanda.</li>
               </ul>
               <li className="text-lg font-bold mb-1">Plată</li>
               <ul className="list-disc px-8">
                  <li>Prețurile componentelor web sunt afișate în platformă și sunt exprimate în leu românesc &lpar;RON&rpar;</li>
                  <li>Utilizatorii pot plăti pentru componentele web utilizând metodele de plată acceptate disponibile pe platformă.</li>
                  <li>WebHub nu va procesa comenzile până când plata nu este confirmată.</li>
               </ul>
               <li className="text-lg font-bold mb-1">Livrare și Returnare</li>
               <ul className="list-disc px-8">
                  <li>Componentele web sunt livrate în format digital, și anume prin link-uri de descărcare disponibile după confirmarea plății.</li>
                  <li>
                     Puteți corecta sau actualiza informațiile dumneavoastră personale prin accesarea contului dumneavoastră pe WebHub sau contactându-ne Nu există
                     posibilitatea returnării componentelor web digitale. În cazul în care există probleme sau întrebări, utilizatorii sunt încurajați să contacteze echipa de
                     suport a WebHub..
                  </li>
               </ul>

               <li className="text-lg font-bold mb-1">Drepturile de Autor</li>
               <ul className="list-disc px-8">
                  <li>Toate drepturile de autor și proprietatea intelectuală asupra componentelor web disponibile pe platformă sunt păstrate de către creatorii acestora.</li>
                  <li>
                     Utilizatorii sunt obligați să respecte normele privind{" "}
                     <a href="" className="font-semibold mr-1">
                        Politica de Copyright
                     </a>
                     în ceea ce privește utilizarea componentelor.
                  </li>
               </ul>
               <li className="text-lg font-bold mb-1">Modificări ale Termenilor și Condițiilor</li>
               <ul className="list-disc px-8">
                  <li>
                     WebHub își rezervă dreptul de a modifica sau actualiza acești Termeni și Condiții în orice moment, iar utilizatorii vor fi informați despre astfel de
                     modificări.
                  </li>
                  <li>Utilizarea continuă a platformei după modificările aduse la Termenii și Condițiile implică acceptarea acestora.</li>
               </ul>
            </ol>
            <p className="mt-8 mb-2">Mulțumim pentru utilizarea platformei noastre!</p>
            <p className="mb-8 font-bold">Echipa WebHub</p>
         </div>
         <Footer />
      </main>
   );
};
