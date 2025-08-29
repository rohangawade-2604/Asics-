import React from 'react'
import './App.css'
import { Routes, Route } from 'react-router-dom'
import { Footer } from './Footer_Compo/Footer'
import { Navbar } from './Navbar/Navbar'
import { Men } from './Mens_Component/Men'
import { Women } from './Home/Women'
import { Kids } from './Home/Kids'
import { SportStyle } from './SportStyle_Component/Sportstyle'
import { Home } from './Asics_Home/Home'
import { Descript } from './Asics_Home/Descript'
import {Running_club} from './RunningClub/Running_club'
import { Bulk_Enquiry } from './Home/Bulk_Enquiry'

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
        <Route path="/Bulk_Enquiry" element={<Bulk_Enquiry/>}/>
      </Routes>


    <Descript/>
    <Footer/>
    
    </>
  )
}

export default App
