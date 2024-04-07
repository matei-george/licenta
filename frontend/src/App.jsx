// eslint-disable-next-line no-unused-vars
import React from "react";
import { Register } from "./Pages/Register/Register";
import { Login } from "./Pages/Login/Login";
export default function App() {
   return (
      <div className="flex">
         <Register />
         <Login />
      </div>
   );
}
