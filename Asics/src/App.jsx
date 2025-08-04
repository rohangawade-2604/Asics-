import React from 'react'
import './App.css'
import { Routes, Route } from 'react-router-dom'
import { Footer } from './Footer_Compo/Footer'
import { Navbar } from './Navbar/Navbar'
import { Men } from './Mens_Component/Men'
import { Women } from './Home/Women'
import { Kids } from './Home/Kids'
import { SportStyle } from './Home/SportStyle'
import { Home } from './Asics_Home/Home'
import { Descript } from './Asics_Home/Descript'
import {Running_club} from './RunningClub/Running_club'

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
        <Route path="/Running_club" element={<Running_club/>}/>
      </Routes>


    <Descript/>
    <Footer/>
    
    </>
  )
}

export default App
