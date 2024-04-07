// eslint-disable-next-line no-unused-vars
import React from "react";
import { Register } from "./Pages/Register/Register";
import { Login } from "./Pages/Login/Login";
import { Navbar } from "./Components/Navbar/Navbar";
import { Footer } from "./Components/Footer/Footer";

export default function App() {
   return (
      <div className="flex flex-col gap-8">
         <div className="container flex">
            <Login />
            <Register />
         </div>
         <div className="container flex flex-col">
            <Navbar />
            <Footer />
         </div>
      </div>
   );
}
