import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./pages/Root";
import Home from "./pages/Home";
import Logements from "./pages/Logements";
import About from "./pages/About";
import NotFound from "./pages/NotFound";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <NotFound />,
    children: [
      { path: "", element: <Home /> },
      {
        path: "details/:id",
        element: <Logements />,
        errorElement: <NotFound />,
      },
      { path: "about", element: <About /> },
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
]);

function App() {
     return <RouterProvider router={router} />;
}

export default App;
