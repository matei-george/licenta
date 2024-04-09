// eslint-disable-next-line no-unused-vars
import React from "react";

import { Copyright } from "./Pages/Copyright/Copyright";
import { Login } from "./Pages/Login/Login";
import { Register } from "./Pages/Register/Register";
import { Contact } from "./Pages/Contact/Contact";
import { Politica } from "./Pages/PoliticaConf/Politica";
import { TermeniCond } from "./Pages/TermeniCond/TermeniCond";
export default function App() {
   return (
      <div>
         <Copyright />
         <Contact />
         <Politica />
         <TermeniCond />
         <div className="container flex">
            <Login />
            <Register />
         </div>
      </div>

      // https://codeshare.io/aiimaseaua
   );
}
