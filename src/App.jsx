import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


// Components
import Nav from './Components/Nav'
import Profile from './Components/Profile'
import Footer from './Components/Footer'
import About from './Components/About'
import Product from './Components/Product'
import Contact from './Components/Contact'
import Home from './Components/Home'

function App() {
  

  return (
    <>
      {/* <Nav />
      <Profile /> */}
      <About />
      <Product />
      <Contact />
      <Home />
      
      {/* <Image /> */}
    </>
  )
}

export default App
