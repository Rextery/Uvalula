import React from "react";
import Cards from "./components/Cards";
import Navbar from "./components/NavBar";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
      
          <Navbar/>
        

        <Routes>
          <Route path="/ordenar" element={<Cards />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
