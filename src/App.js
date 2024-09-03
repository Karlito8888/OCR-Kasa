import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import Logements from "./pages/Logements";
import About from "./pages/About";
import NotFound from "./pages/NotFound";

const router = createBrowserRouter([
  { path: "/", element: <Home /> },
  { path: "/fiche-logement/:id", element: <Logements /> },
  { path: "/about", element: <About /> },
  { path: "/not-found", element: <NotFound /> },
  { path: "/*", element: <NotFound /> },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
