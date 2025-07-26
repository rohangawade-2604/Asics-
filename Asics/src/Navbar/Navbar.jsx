import React from 'react'
import Asics from '../assets/Asics.png'
import { Link } from 'react-router-dom'

export const Navbar = () => {
  return (
    <>
      <header className='sticky top-0 z-20 bg-white my-3 py-3 ' >
        <nav className='flex justify-around items-center mx-15 '>
        <div className="logo">
            <Link to='/'><img src={Asics} /></Link>
            
        </div>

        <ul className='flex justify-around gap-5 items-center cursor-pointer'>

            <li >
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
                <Link to='/running_club'>Running_Club</Link>
            </li>

            <li>
                <Link to='/'>Bulk Enquiry</Link>
            </li>
        </ul>

        <div className="search ml-20">

            <input type="text" placeholder='Search ASICS' className='border-1 h-10 w-65 rounded-[20px] pl-5 cursor-pointer ' />   
        </div>

        <div className="heart cursor-pointer ">
            <i className="fa-regular fa-heart text-[25px]"></i>
        </div>

        <div className="cart cursor-pointer">
            <i className="fa-solid fa-cart-shopping text-[25px]"></i>
        </div>
    </nav>
      </header>
    </>
  )
}


