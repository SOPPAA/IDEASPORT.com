import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


// Components

import Home from './Components/Home'
import Recommend from './Components/Recommend'
import About from './Components/About'
import Product from './Components/Product'
import Contact from './Components/Contact'

function App() {
  

  return (
    <>
     

      <Home />
      <About />
      <Product />
      {/* <Recommend /> */}
      <Contact />
      
     
    </>
  )
}

export default App
