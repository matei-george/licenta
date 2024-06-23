// eslint-disable-next-line no-unused-vars
import React from "react";

// Componente
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";

// Stiluri
import "../../shared.css";
import "./Politica.css";

const Politica = () => {
   return (
      <main className="flex flex-col">
         <Navbar />
         <div className="pc-content mx-auto">
            <h1 className="text-6xl pc-title text-center mb-2 mt-8">Politica de Confidențialitate</h1>
            <p className="font-semibold text-xs mb-6">Ultima actualizare : 8 Aprilie 2024</p>
            <ol className="list-decimal px-4">
               <p className="mb-4">
                  Mulțumim că ați ales să vizitați WebHub și să utilizați serviciile noastre. Politica noastră de confidențialitate este concepută pentru a vă explica cum
                  colectăm, folosim și protejăm informațiile dumneavoastră atunci când vizitați site-ul nostru și utilizați serviciile noastre.
               </p>
               <p className="mb-4">
                  Prin accesarea sau utilizarea site-ului nostru &lpar;denumit în continuare &quot;WebHub&quot;&rpar;, sunteți de acord cu practicile descrise în această
                  politică de confidențialitate. Această politică se aplică atât informațiilor pe care le furnizați când utilizați serviciile noastre, cât și informațiilor
                  colectate automat în timpul utilizării site-ului.
               </p>
               <li className="text-lg font-bold mb-1">Informațiile Colectate</li>
               <ul className="list-disc px-8">
                  <p className=" mb-2">Atunci când utilizați WebHub, putem colecta următoarele tipuri de informații:</p>
                  <li>
                     <span className="font-bold">Informații de Contact: </span>
                     Atunci când creați un cont sau plasați o comandă, vi se poate solicita să furnizați informații personale, cum ar fi numele și adresa de e-mail.
                  </li>
                  <li>
                     <span className="font-bold">Informații de Plată: </span>
                     Atunci când efectuați o achiziție, vi se poate solicita să furnizați informații de plată, cum ar fi numărul cardului de credit sau alte informații de
                     plată.
                  </li>
                  <li>
                     <span className="font-bold">Informații de Dispozitiv: </span>
                     Colectăm informații despre dispozitivul dumneavoastră, cum ar fi adresa IP, tipul de browser, limbajul browserului, sistemul de operare și alte informații
                     similare.
                  </li>
               </ul>
               <li className="text-lg font-bold mb-1">Cum Folosim Informațiile</li>
               <p>
                  Utilizăm informațiile colectate în principal pentru a vă oferi serviciile noastre, pentru a procesa comenzile și pentru a vă oferi suportul necesar. În
                  special, folosim informațiile pentru:
               </p>
               <ul className="list-disc px-8">
                  <li>Procesarea comenzilor și livrarea produselor către dumneavoastră.</li>
                  <li>Comunicarea cu dumneavoastră în legătură cu comenzile, întrebările sau solicitările dumneavoastră.</li>
                  <li>Personalizarea și îmbunătățirea experienței dumneavoastră pe WebHub.</li>
                  <li>Analiza modului în care utilizați site-ul nostru pentru a ne ajuta să îmbunătățim serviciile noastre.</li>
                  <li>Respectarea legilor și reglementărilor aplicabile.</li>
               </ul>
               <li className="text-lg font-bold mb-1">Partajarea Informațiilor</li>
               <p>
                  Nu vindem, închiriem sau transferăm informațiile dumneavoastră personale altor părți terțe, cu excepția cazurilor în care este necesar pentru furnizarea
                  serviciilor noastre. Acest lucru poate include:
               </p>
               <ul className="list-disc px-8">
                  <li>Furnizorii de servicii terțe care ne ajută să operăm site-ul nostru sau să livrăm produsele.</li>
                  <li>Parteneri de afaceri cu care colaborăm pentru a vă oferi servicii sau promoții..</li>
                  <li>
                     În cazuri excepționale, pentru a răspunde unor cereri legale sau pentru a proteja drepturile, proprietatea sau siguranța noastră sau a altor persoane..
                  </li>
               </ul>
               <li className="text-lg font-bold mb-1">Securitatea Informațiilor</li>
               <p>
                  Ne angajăm să protejăm informațiile dumneavoastră și luăm măsuri adecvate pentru a asigura securitatea datelor. Folosim protocoale și standarde de securitate
                  pentru a proteja informațiile dumneavoastră, inclusiv utilizarea conexiunilor securizate la serverele noastre.
               </p>
               <li className="text-lg font-bold mb-1">Drepturile Dumneavoastră</li>
               <ul className="list-disc px-8">
                  <li>
                     <span className="font-bold">Acces:</span>Puteți accesa și actualiza informațiile dumneavoastră personale în contul dumneavoastră de pe WebHub.
                  </li>
                  <li>
                     <span className="font-bold">Rectificare:</span>Puteți corecta sau actualiza informațiile dumneavoastră personale prin accesarea contului dumneavoastră pe
                     WebHub sau contactându-ne direct.
                  </li>
                  <li>
                     <span className="font-bold">Ștergere:</span>Puteți solicita ștergerea informațiilor dumneavoastră personale din sistemul nostru prin contactarea echipei
                     noastre.
                  </li>
               </ul>

               <li className="text-lg font-bold mb-1">Actualizări ale Politicii de Confidențialitate</li>
               <p>
                  Această politică de confidențialitate poate fi actualizată din când în când pentru a reflecta schimbările aduse serviciilor noastre sau reglementărilor
                  aplicabile. Orice modificare semnificativă va fi notificată pe site-ul nostru sau prin alte mijloace de comunicare.{" "}
               </p>
               <li className="text-lg font-bold mb-1">Contact</li>
               <p>
                  Pentru orice întrebări sau nelămuriri legate de această politică de drepturi de autor sau de utilizarea componentelor web, vă rugăm să ne contactați prin
                  intermediul mijloacelor disponibile la pagina <span className="font-semibold">Contact</span>
               </p>
               <li className="text-lg font-bold mb-1">Acceptarea Termenilor</li>
               <p>
                  Utilizând componentele web disponibile pe platforma noastră, sunteți de acord cu termenii și condițiile acestei Politici de Confidenșialitate pentru
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

export default Politica;
