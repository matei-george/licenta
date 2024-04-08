// eslint-disable-next-line no-unused-vars
import React from "react";

import { Copyright } from "./Pages/Copyright/Copyright";
import { Login } from "./Pages/Login/Login";
import { Register } from "./Pages/Register/Register";
import { Contact } from "./Pages/Contact/Contact";

export default function App() {
   return (
      <div>
         <Copyright />
         <Contact />
         <div className="container flex">
            <Login />
            <Register />
         </div>
      </div>
   );
}
