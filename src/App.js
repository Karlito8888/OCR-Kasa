import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Logements from "./pages/Logements";
import About from "./pages/About";
import NotFound from "./pages/NotFound";
import { DataProvider } from "./context/DataContext";

const App = () => {
  return (
    <BrowserRouter>
      <DataProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/fiche-logement/:id" element={<Logements />} />
          <Route path="/about" element={<About />} />
          <Route path="/not-found" element={<NotFound />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </DataProvider>
    </BrowserRouter>
  );
};

export default App;
