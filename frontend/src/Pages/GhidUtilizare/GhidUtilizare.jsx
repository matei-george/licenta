// eslint-disable-next-line no-unused-vars
import React from "react";

// Componente
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";

// Stiluri
import "../../shared.css";
import "./GhidUtilizare.css";

// Asseturi
import user from "../../Components/Assets/Icons/icons8-user-50.png";
import cart from "../../Components/Assets/Icons/icons8-shopping-cart-50.png";

const GhidUtilizare = () => {
   return (
      <main className="flex flex-col">
         <Navbar />
         <div className="gu-content mx-auto my-8 flex-1">
            <h1 className="text-6xl gu-title text-center mb-8">Ghid de Utilizare</h1>
            <p className="font-bold">Bine ai venit!</p>
            <p className="mb-4">
               Această pagină este creată pentru a oferi toate informațiile necesare pentru ca tu să beneficiezi de maximul poențial al platformei noastre,
               <span className="font-semibold mx-1">WebHub</span>. Nu-ți fă griji dacă ești la început, sau te-ai blocat în privința unor lucruri, acest ghid este conceput
               pentru a fi cât mai simplu și intuitiv de parcurs 😀
            </p>
            <p className="font-bold text-xl">Cum creăm un cont nou?</p>
            <ul className="list-decimal px-8">
               <li>
                  Navighează către iconița <img src={user} alt="user-icon" className="inline w-5" /> prezentă din meniul de navigație.
               </li>
               <li>
                  Vei fi trimis către secțiunea de logare. Deoarece noi dorim să creăm un cont nou, efectuează click pe textul <span className="font-bold">aici</span> plasat
                  sub butonul de autentificare.
               </li>
               <li>Introdu informațiile necesare : nume, adresă de email și alegem o parolă sigură.</li>
               <li>
                  Apasă pe butonul <span className="font-bold">Înregistrare</span> pentru a finaliza procesul.
               </li>
            </ul>
            <p className="font-bold text-xl mt-4">Plasarea unei comenzi</p>
            <ul className="list-disc px-8">
               <li>
                  După ce ai creat contul și te-ai autentificat, navighează prin site-ul nostru pentru a descoperi produsele noastre. Folosește cu încredere atât secțiunile
                  disponibile din bara de navigație : <span className="font-bold">Toate Produsele, Categorii</span> cât și medotele de sortare disponibile pentru a găși ceea
                  ce dorești. De asemenea, dacă ai întrebări sau ești indecis, nicio problemă, apelează cu încredere la asistentul nostru virtual, gata în orice moment să te
                  ajute!
               </li>
               <li>
                  Pe pagina produsului pe care dorești să-l comanzi, apasă butonul <span className="font-bold">Adaugă în Coș</span>. Vezi detalii suplimentare despre produs și
                  asigură-te că este ceea ce îți dorești.
               </li>
               <li>
                  Navighează la <img src={cart} alt="cart-icon" className="inline w-5" /> pentru a vedea toate produsele adăugate. Verifică cantitățile și prețurile, apoi
                  apasă butonul <span className="font-bold">Continuă către plată</span>. Completează informațiile de livrare și facturare, selectează opțiunea de plată și
                  apasă <span className="font-bold">Trimite Comanda</span>.
               </li>
            </ul>
            <p className="font-bold text-xl mt-4">Gestionarea Contului</p>
            <ul className="list-disc px-8">
               <li>
                  În pagina <span className="font-bold mx-1">Contul Meu</span> , poți modifica informațiile personale, adresa de livrare, parola și altele. Fă clic pe
                  secțiunea corespunzătoare pentru a face modificările dorite.
               </li>
               <li>
                  În <span className="font-bold mx-1">Contul Meu</span> , poți accesa secțiunea <span className="font-bold mx-1">Istoricul Comenzilor</span>pentru a vedea
                  toate comenzile plasate anterior. Aici vei găsi detalii despre produse, sumele plătite și statusul comenzii.
               </li>
            </ul>
            <p className="font-bold text-xl mt-4">Suport și Asistență</p>
            <ul className="list-disc px-8">
               <li>
                  Dacă ai întrebări sau probleme, nu ezita să ne contactezi de pe pagina de <span className="font-bold">Contact</span> disponibilă în bara de navigație
               </li>
               <li>
                  Pentru informații rapide, consultă secțiunea noastră de <span className="font-bold ml-1">Întrebări Frecvente</span>. Aici vei găsi răspunsuri la întrebările
                  comune legate de produsele și serviciile noastre.
               </li>
            </ul>
            <p className="my-4">
               Acum ești pregătit să începi să folosești produsele noastre web! Dacă ai nevoie de ajutor suplimentar sau dacă întâlnești orice dificultate, nu ezita să ne
               contactezi. Echipa noastră este aici pentru a te ajuta să ai o experiență online plăcută și fără probleme.
            </p>
            <p className="mt-8 mb-2">Mulțumim pentru utilizarea platformei noastre!</p>
            <p className="mb-8 font-bold">Echipa WebHub.</p>
         </div>
         <Footer />
      </main>
   );
};

export default GhidUtilizare;
