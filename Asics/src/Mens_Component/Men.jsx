import React from 'react'
import men from '../assets/Mens1.png'
import men1 from '../assets/Mens2.png'
import './Men.css'
export const Men = () => {
  return (
    <>
      <div className="mens">

        <div className="mens_container">

          {/*---------------- image_Slider section------------------ */}

            <div className="image1">
              <figure>
                <img src={men} alt="" />
                <img src={men1} alt="" />
                <img src={men} alt="" />
                <img src={men1} alt="" />
                <img src={men} alt="" />
              </figure>

            </div>


          {/*---------------- Mens_Collections section------------------ */}

          <div className="Mens_Collections">

            <h1 className='text-[36px] text-center text-[#312955] '>Mens Collections</h1>

            <div className="buttons flex flex-row justify-around mx-10 my-7 mb-10 ">

                  <button type='button' className='border-2 gap-1 w-45 h-13  rounded-[25px] bg-[#001f62] text-white transition delay-100 ease-in-out hover:bg-amber-800 cursor-pointer'>Footwear</button>

                  <button type='button' className='border-2 gap-1 w-45 h-13  rounded-[25px] bg-[#001f62] text-white transition delay-100 ease-in-out hover:bg-amber-800 cursor-pointer'>Clothing</button>

                  <button type='button' className='border-2 gap-1 w-45 h-13  rounded-[25px] bg-[#001f62] text-white transition delay-100 ease-in-out hover:bg-amber-800 cursor-pointer'>Accessiories</button>

                  <button type='button' className='border-2 gap-1 w-45 h-13  rounded-[25px] bg-[#001f62] text-white transition delay-100 ease-in-out hover:bg-amber-800 cursor-pointer'>SportStyle</button>

                  <button type='button' className='border-2 gap-1 w-45 h-13  rounded-[25px] bg-[#001f62] text-white transition delay-100 ease-in-out hover:bg-amber-800 cursor-pointer'>Online Exclusive</button>

                  <button type='button' className='border-2 gap-1 w-45 h-13  rounded-[25px] bg-[#001f62] text-white transition delay-100 ease-in-out hover:bg-amber-800 cursor-pointer'>Sale Oulet</button>

            </div>
              <hr className='mx-20' />
          </div>

        {/*-------------------- Shop by Sports Sections----------------------- */}

          <div className="Sports">

            <h1 className='text-[36px] text-center text-[#312955] '>Shop by Sports</h1> 
          </div>


        </div>
      </div>

    </>
  )
}


