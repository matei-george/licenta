import "./App.css";
import { Navbar } from "./Components/Navbar/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Acasa } from "./Pages/Acasa";
import { Componente } from "./Pages/Componente";
import { Despre } from "./Pages/Despre";
import { Contact } from "./Pages/Contact";
import { Pagini } from "./Pages/Pagini";
import { ShopCategory } from "./Pages/ShopCategory";
import { Produs } from "./Pages/Produs";
import { CosCumparaturi } from "./Pages/CosCumparaturi";
import { LoginSignup } from "./Pages/LoginSignup";

function App() {
   return (
      <div>
         <BrowserRouter>
            <Navbar />
            <Routes>
               <Route path="/" element={<Acasa />}></Route>
               <Route path="/componente" element={<ShopCategory category="componente" />}></Route>
               <Route path="/pagini" element={<ShopCategory category="pagini" />}></Route>
               <Route path="/despre" element={<Despre />}></Route>
               <Route path="/contact" element={<Contact />}></Route>
               <Route path="/produs" element={<Produs />}>
                  <Route path=":productId" element={<Produs />}></Route>
               </Route>
               <Route path="/cos" element={<CosCumparaturi />}></Route>
               <Route path="/login" element={<LoginSignup />}></Route>
            </Routes>
         </BrowserRouter>
      </div>
   );
}

export default App;
