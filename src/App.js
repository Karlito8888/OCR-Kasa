import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Logement from "./pages/Logement";
import About from "./pages/About";
import NotFound from "./pages/NotFound";

const App = () => {
  return (
   <BrowserRouter>
   <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/fiche-logement" element={<Logement />} />
    <Route path="/about" element={<About />} />
    <Route path="*" element={<NotFound />} />
   </Routes>
   </BrowserRouter>
  );
};

export default App;
