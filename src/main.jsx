import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider, Route, Link } from 'react-router-dom';

// Components
import About from './Components/About.jsx'
import Product from './Components/Product.jsx'
import Contact from './Components/Contact.jsx'
import Home from './Components/Home.jsx';
import Recommend from './Components/Recommend.jsx';

const router = createBrowserRouter ([
  {
    path: "/",
    element: <Home /> 
  },
  {
    path: "About",
    element: <About /> 
  },

  {
    path: "Product",
    element: <Product /> 
  },
  {
    path: "Contact",
    element: <Contact /> 
  },
  {
    path: "Recommend",
    element: <Recommend /> 
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(

    <RouterProvider router={router} />
 
);
