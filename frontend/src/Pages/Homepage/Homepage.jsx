// eslint-disable-next-line no-unused-vars
import React from "react";

// Componente
import { Navbar } from "../../Components/Navbar/Navbar";
import { Footer } from "../../Components/Footer/Footer";

// Stiluri
import "../../shared.css";
import "./Homepage.css";

// Asseturi
import wip_icon from "../../Components/Assets/Icons/icons8-work-in-progress-64.png";

export const Homepage = () => {
   return (
      <main className="flex flex-col">
         <Navbar />
         <div className="flex-1 flex align-center justify-center flex-col gap-4">
            <p className="font-bold text-4xl text-center">Work In Progress</p>
            <img src={wip_icon} alt="" className="work-in-progress mx-auto" />
         </div>
         <Footer />
      </main>
   );
};
