import React from 'react'
import './App.css'
import { Routes, Route } from 'react-router-dom'
import { Footer } from './Footer_Compo/Footer'
import { Navbar } from './Navbar/Navbar'
import { Men } from './Home/Men'
import { Women } from './Home/Women'
import { Kids } from './Home/Kids'
import { SportStyle } from './Home/SportStyle'
import {Home} from './Home/Home'

function App() {
  

  return (
    <>
    <Navbar/>

    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/men" element={<Men/>}/>
      <Route path="/women" element={<Women/>}/>
      <Route path="/kids" element={<Kids/>}/>
      <Route path="/sportstyle" element={<SportStyle/>}/>
    </Routes>

    <Footer/>
    </>
  )
}

export default App
