// eslint-disable-next-line no-unused-vars
import React from "react";

// Componente
import { Navbar } from "../../Components/Navbar/Navbar";
import { Footer } from "../../Components/Footer/Footer";

// Stiluri
import "../../shared.css";
import "./Copyright.css";

// TODO
// [] > Revizie politica

export const Copyright = () => {
   return (
      <main className="flex flex-col">
         <Navbar />
         <div className="copyright-content mx-auto">
            <h1 className="text-6xl copyright-title text-center mb-2 mt-8">Politica de Copyright</h1>
            <p className="font-semibold text-xs mb-6">Ultima actualizare : 10 Mai 2024</p>
            <p className="mb-4">
               Bine ați venit la WebHub! Această politică de copyright reglementează utilizarea și distribuția componentelor web disponibile pe platforma noastră. Prin
               utilizarea acestor componente, sunteți de acord cu termenii și condițiile de mai jos
            </p>
            <ol className="list-decimal px-4">
               <li className="text-lg font-bold mb-1">Drepturi de Autor pentru Componentele Web</li>
               <p>
                  Toate componentele web disponibile pe website-ul nostru, inclusiv dar fără a se limita la teme, plugin-uri, șabloane, scripturi și alte resurse, sunt
                  proprietatea noastră și sunt protejate de Legea dreptului de autor și drepturilor conexe din România. Aceste componente web nu pot fi reproduse, distribuite,
                  transmise, expuse sau vândute fără permisiunea noastră explicită.
               </p>
               <ul className="list-disc px-8">
                  <li>
                     <span className="font-bold">Reproducere:</span> Nu puteți crea copii ale componentelor web fără permisiunea noastră. Orice utilizare neautorizată a
                     componentelor web este interzisă și poate duce la acțiuni legale.
                  </li>
                  <li>
                     <span className="font-bold">Distribuție:</span> Nu puteți distribui sau partaja componentele web către alte persoane sau entități fără permisiunea
                     noastră. Aceasta include împrumutarea, închirierea sau transferul de proprietate a componentelor web.
                  </li>
                  <li>
                     <span className="font-bold">Transmitere:</span> Nu puteți transmite sau partaja componentele web prin intermediul rețelelor publice sau private fără
                     permisiunea noastră. Orice formă de transfer neautorizat este interzisă.
                  </li>
                  <li>
                     <span className="font-bold">Vânzare</span> Nu puteți vinde sau oferi spre vânzare componentele web către terți fără permisiunea noastră. Orice tranzacție
                     care implică componentele web trebuie să fie aprobată de către noi în prealabil.
                  </li>
               </ul>
               <li className="text-lg font-bold mb-1">Licență de Utilizare</li>
               <p>
                  Prin achiziționarea unei componente web de pe platforma noastră, vă acordăm o licență limitată, neexclusivă, nepotrivită pentru a utiliza acea componentă web
                  în conformitate cu termenii și condițiile specificate la momentul achiziției. Aceasta vă permite utilizarea acelei componente web pentru un singur
                  website/client, conform licenței achiziționate.
               </p>
               <li className="text-lg font-bold mb-1">Distribuția Componentelor Web</li>
               <p>
                  Nu este permisă redistribuirea sau vânzarea componentelor web achiziționate de pe platforma noastră fără permisiunea noastră explicită. Împărțirea sau
                  distribuirea componentelor web fără acordul nostru contravine acestei politici de drepturi de autor și poate duce la sancțiuni legale.
               </p>
               <ul className="list-disc px-8">
                  <li>
                     <span className="font-bold">Excepții și Parteneriate:</span> Dacă sunteți interesat să distribuiți sau să vindeți componentele web dezvoltate de noi, vă
                     rugăm să ne contactați pentru a discuta posibilitatea unui parteneriat sau a unei colaborări. Orice formă de distribuție sau vânzare a componentelor web
                     trebuie să fie convenită de ambele părți.
                  </li>
               </ul>
               <li className="text-lg font-bold mb-1">Politica de Returnare</li>
               <p>
                  Componentele web achiziționate nu sunt rambursabile, deoarece oferim acces instantaneu la conținutul digital. Asigurați-vă că examinați bine detaliile și
                  demonstrațiile disponibile pentru componentele web înainte de achiziție.
               </p>
               <ul className="list-disc px-8">
                  <li>
                     <span className="font-bold">Excepții și Garanții:</span> În cazuri excepționale, în care există o problemă majoră cu componenta web achiziționată, vă
                     rugăm să ne contactați în termen de <span className="font-bold">90 zile</span> de la achiziție pentru a discuta posibilitatea unei rambursări sau soluții
                     alternative. Păstrăm dreptul de a oferi garanții sau rambursări la discreția noastră, în funcție de circumstanțe.
                  </li>
               </ul>
               <li className="text-lg font-bold mb-1">DMCA și Reclamații pentru Încălcarea Drepturilor de Autor</li>
               <p>
                  Ne angajăm să respectăm prevederile Directivei UE privind Drepturile de Autor în Piața Digitală și vom procesa prompt reclamațiile referitoare la încălcările
                  drepturilor de autor. Dacă credeți că un conținut pe care îl găsiți pe platforma noastră încalcă drepturile de autor, vă rugăm să trimiteți o notificare
                  către
                  <a href="mailto:suport@webhub.ro">
                     <span className="font-semibold"> suport@webhub.ro </span>
                  </a>
                  și vom acționa în conformitate cu legile aplicabile.
               </p>
               <li className="text-lg font-bold mb-1">Contact</li>
               <p>
                  Pentru orice întrebări sau nelămuriri legate de această politică de drepturi de autor sau de utilizarea componentelor web, vă rugăm să ne contactați prin
                  intermediul mijloacelor disponibile la pagina <span className="font-semibold">Contact</span>
               </p>
               <li className="text-lg font-bold mb-1">Acceptarea Termenilor</li>
               <p>
                  Utilizând componentele web disponibile pe platforma noastră, sunteți de acord cu termenii și condițiile acestei Politici de Drepturi de Autor pentru
                  Componentele Web.
               </p>
            </ol>
            <p className="mt-8 mb-2">Mulțumim pentru utilizarea platformei noastre!</p>
            <p className="mb-8 font-bold">Echipa WebHub</p>
         </div>
         <Footer />
      </main>
   );
};
