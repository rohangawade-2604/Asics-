import React from 'react'
import Asics from '../assets/Asics.png'
import { Link } from 'react-router-dom'

export const Navbar = () => {
  return (
    <>
      <header className='flex justify-around items-center my-3  mx-13 '>

        <div className="logo">
            <img src={Asics} alt="" />
        </div>

        <ul className='flex justify-around gap-4 items-center'>
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
                <Link to='/'>Running Club</Link>
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

      </header>
    </>
  )
}


