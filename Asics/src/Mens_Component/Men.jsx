import React from 'react'
import men from '../assets/Mens1.png'
import men1 from '../assets/Mens2.png'
import './Men.css'
import Running from '../assets/Running.png'
import Tennis from '../assets/Tennis.png'
import Indoors from '../assets/Indoor.png'
import Cricket from '../assets/Cricket.png'
import Homepic2 from '../assets/Homepic2.png'
import MensGel from '../assets/MensGel.png'
import Blast from '../assets/Blast.png'
import RunCollec from '../assets/RunCollec.png'
import Mensports from '../assets/Mensport.png'
import Asclothing from '../assets/Asclothing.png'
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

            <h1 className='text-[36px] text-center text-[#312955] my-5'>Shop by Sports</h1>

            <div className="cards_Sections flex flex-row justify-around mx-20 my-7 mb-10 gap-10 ">

              <div className="cards ">
                <img src={Running} alt="" className='h-60 ' />
                <button className='border-2 w-45 h-10 rounded-[25px] my-3 ml-15 cursor-pointer text-white bg-[#001f62]  transition delay-100 ease-in-out hover:bg-amber-800 '>Running</button>
              </div>

              <div className="cards1">
                <img src={Tennis} alt="" className='h-60' />
                <button className='border-2 w-45 h-10 rounded-[25px] my-3 ml-15 cursor-pointer text-white bg-[#001f62]  transition delay-100 ease-in-out hover:bg-amber-800 '>Tennis</button>
              </div>

              <div className="cards2">
                <img src={Indoors} alt="" className='h-60' />
                <button className='border-2 w-45 h-10 rounded-[25px] my-3 ml-15 cursor-pointer text-white bg-[#001f62]  transition delay-100 ease-in-out hover:bg-amber-800 '>Indoors</button>
              </div>

              <div className="cards3">
                <img src={Cricket} alt="" className='h-60' />
                <button className='border-2 w-45 h-10 rounded-[25px] my-3 ml-15 cursor-pointer text-white bg-[#001f62]  transition delay-100 ease-in-out hover:bg-amber-800 '>Cricket</button>
              </div>
            </div>
          </div>

          {/*--------------- LUXE PACK Sections------------------- */}

          <div className="Luxe_Pack">

            <h1 className='text-[36px] text-center text-[#312955] my-5'>Luxe Pack</h1>

            <img src={Homepic2} alt="" />
          </div>

          {/* ------------- GEL-KAYANO Section ------------------ */}

          <div className="gelkayano">
            <h1 className='text-[36px] text-center text-[#312955]'>GEL-KAYANO™ 32</h1>
            <img src={MensGel} alt="" className='cursor-pointer' />
          </div>


            {/* ------------- Blast Section ------------------ */}

          <div className="Blast my-5">
            <h1 className='text-[36px] text-center text-[#312955]'>BLAST Series</h1>
            <img src={Blast} alt="" className='cursor-pointer' />
          </div>

           {/* ------------- Running Collections Section ------------------ */}

          <div className="Running_Collections my-5">
            <h1 className='text-[36px] text-center text-[#312955]'>Running Collections</h1>
            <img src={RunCollec} alt="" className='cursor-pointer' />
          </div>

            {/* ------------- SPORTSTYLE COLLECTION Section ------------------ */}

          <div className="Running_Collections my-5">
            <h1 className='text-[36px] text-center text-[#312955]'>SPORTSTYLE COLLECTION</h1>
            <img src={Mensports} alt="" className='cursor-pointer' />
          </div>

           {/* ------------- ASICS Clothing Section ------------------ */}

          <div className="Running_Collections my-5">
            <h1 className='text-[36px] text-center text-[#312955]'>ASICS Clothing</h1>
            <img src={Asclothing} alt="" className='cursor-pointer' />
          </div>



        </div>
      </div>

    </>
  )
}


