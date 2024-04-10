// eslint-disable-next-line no-unused-vars
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Pagini
import { Homepage } from "./Pages/Homepage/Homepage";
import { Contact } from "./Pages/Contact/Contact";
import { Copyright } from "./Pages/Copyright/Copyright";
import { Despre } from "./Pages/Despre/Despre";
import { FAQ } from "./Pages/FAQ/FAQ";
import { GhidUtilizare } from "./Pages/GhidUtilizare/GhidUtilizare";
import { Politica } from "./Pages/PoliticaConf/Politica";
import { TermeniCond } from "./Pages/TermeniCond/TermeniCond";

// Login si register
import { Login } from "./Pages/Login/Login";
import { Register } from "./Pages/Register/Register";

export default function App() {
   return (
      <main className="App">
         <Router>
            <Routes>
               {/* Rute principale */}
               <Route path="/" element={<Homepage />} />
               <Route path="/contact" element={<Contact />} />
               <Route path="/copyright" element={<Copyright />} />
               <Route path="/despre" element={<Despre />} />
               <Route path="/faq" element={<FAQ />} />
               <Route path="/ghid" element={<GhidUtilizare />} />
               <Route path="/politica" element={<Politica />} />
               <Route path="/termeni" element={<TermeniCond />} />
               {/* Login si Register */}
               <Route path="/login" element={<Login />} />
               <Route path="/register" element={<Register />} />
            </Routes>
         </Router>
      </main>
   );
}
