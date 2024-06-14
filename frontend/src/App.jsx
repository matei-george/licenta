import { Outlet } from "react-router";
import { ToastContainer } from "react-toastify";
import "react-toastify";

export default function App() {
   return (
      <>
         <ToastContainer />
         <main>
            <Outlet />
         </main>
      </>
   );
}
