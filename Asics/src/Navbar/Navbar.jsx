import React from 'react'
import Asics from '../assets/Asics.png'
import { Link } from 'react-router-dom'

export const Navbar = () => {
  return (
    <>
      <header>

        <div className="logo">
            <img src={Asics} alt="" />
        </div>

        <ul>
            <li>
                <Link to='/men'>Men</Link>
            </li>

            <li>
                <Link to='/women'>Women</Link>
            </li>

            <li>
                <Link to='/kids'>Kids</Link>
            </li>

            <li>
                <Link to='/sportstyle'>SportStyle</Link>
            </li>

            <li>
                <Link to='/'>Collections</Link>
            </li>

            <li>
                <Link to='/'>Clothing</Link>
            </li>

            <li>
                <Link to='/'>SALE</Link>
            </li>

            <li>
                <Link to='/'>Running Club</Link>
            </li>

            <li>
                <Link to='/'>Bulk Enquiry</Link>
            </li>
        </ul>

      </header>
    </>
  )
}


