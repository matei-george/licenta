import { Outlet } from "react-router";
import { ToastContainer } from "react-toastify";
import "react-toastify";
import { Navbar } from "./Components/Navbar/Navbar";

export default function App() {
   return (
      <>
         <ToastContainer />
         <main>
            <Outlet />
            <Navbar />
         </main>
      </>
   );
}
