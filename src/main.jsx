import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";

import Home from "./Components/Home.jsx";
import About from "./Components/About.jsx";
import Product from "./Components/Product.jsx";
import Recommend from "./Components/Recommend.jsx";
import Contact from "./Components/Contact.jsx";

const router = createBrowserRouter([
  { path: "/", element: <Home /> },
  { path: "/About", element: <About /> },
  { path: "/Product", element: <Product /> },
  { path: "/Product/:slug", element: <Product /> },
  { path: "/Recommend", element: <Recommend /> },
  { path: "/Contact", element: <Contact /> },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
