import React from 'react'
import './App.css'
import { Router, Route } from 'react-router-dom'
import { Footer } from './Footer_Compo/Footer'
import { Navbar } from './Navbar/Navbar'


function App() {
  

  return (
    <>
    <Navbar/>
    <Router>
      <Route path="/" element={<Men/>}/>
      <Route path="/" element={<Women/>}/>
      <Route path="/" element={<Kids/>}/>
      <Route path="/" element={<SportStyle/>}/>
      <Route path="/" element={<Collections/>}/>
      <Route path="/" element={<Clothing/>}/>
      <Route path="/" element={<SALE/>}/>
      <Route path="/" element={<Running Club/>}/>
      <Route path="/" element={<Bulking Enquiry/>}/>bb

    </Router>

    <Footer/>
    </>
  )
}

export default App
