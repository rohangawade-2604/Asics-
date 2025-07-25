import React from 'react'
import men from '../assets/Mens1.png'
import Tennisw from '../assets/tennisw.png'
import Indoorsw from '../assets/indoorw.png'
import Runningw from '../assets/runningw.png'
import Womengel from '../assets/womengel.png'
import Liteshow from '../assets/Liteshow.png'
import Blastw from '../assets/Blastw.png'
import sportstylew from '../assets/sportstylew.png'
import Apparelw from '../assets/Apparelw.png'

export const Women = () => {
  return (
    <>
      <div className="women">

        <div className="women_container">

          {/*----------- women foot wear img section------------- */}

          <div className="img">
            <figure>
              <img src={Apparelw} alt="" />
            </figure>
          </div>

          {/*---------------- Mens_Collections section------------------ */}

          <div className="Mens_Collections">

            <h1 className='text-[36px] my-5 text-center text-[#312955] '>Womens Collections</h1>

            <div className="buttons flex flex-row justify-around mx-10 my-7 mb-10 ">

              <button type='button' className='border-2 gap-1 w-45 h-13  rounded-[25px] bg-[#001f62] text-white transition delay-100 ease-in-out hover:bg-amber-800 cursor-pointer'>Footwear</button>

              <button type='button' className='border-2 gap-1 w-45 h-13  rounded-[25px] bg-[#001f62] text-white transition delay-100 ease-in-out hover:bg-amber-800 cursor-pointer'>Clothing</button>

              <button type='button' className='border-2 gap-1 w-45 h-13  rounded-[25px] bg-[#001f62] text-white transition delay-100 ease-in-out hover:bg-amber-800 cursor-pointer'>Accessiories</button>

              <button type='button' className='border-2 gap-1 w-45 h-13  rounded-[25px] bg-[#001f62] text-white transition delay-100 ease-in-out hover:bg-amber-800 cursor-pointer'>SportStyle</button>

              <button type='button' className='border-2 gap-1 w-45 h-13  rounded-[25px] bg-[#001f62] text-white transition delay-100 ease-in-out hover:bg-amber-800 cursor-pointer'>Sale Oulet</button>

            </div>
            <hr className='mx-20' />
          </div>

          {/*-------------------- Shop by Sports Sections----------------------- */}

          <div className="Sports">

            <h1 className='text-[36px] text-center text-[#312955] my-5'>Shop by Sports</h1>

            <div className="cards_Sections flex  justify-evently mx-30  my-7 mb-10 gap-5 ">

              <div className="cards overflow-hidden ">
                <img src={Runningw} alt="" className='h-60 w-120 transition delay-100 ease-in-out hover:scale-[1.1]' />
                <button className='border-2 w-45 h-10 rounded-[25px] my-5 ml-30 cursor-pointer text-white bg-[#001f62]  transition delay-100 ease-in-out hover:bg-amber-800 '>Running</button>
              </div>

              <div className="cards1 overflow-hidden">
                <img src={Indoorsw} alt="" className='h-60 w-120 transition delay-100 ease-in-out hover:scale-[1.1]' />
                <button className='border-2 w-45 h-10 rounded-[25px] my-5 ml-30 cursor-pointer text-white bg-[#001f62]  transition delay-100 ease-in-out hover:bg-amber-800 '>Tennis</button>
              </div>

              <div className="cards2 overflow-hidden">
                <img src={Tennisw} alt="" className='h-60 w-120 transition delay-100 ease-in-out hover:scale-[1.1]' />
                <button className='border-2 w-45 h-10 rounded-[25px] my-5 ml-30 cursor-pointer text-white bg-[#001f62]  transition delay-100 ease-in-out hover:bg-amber-800 '>Indoors</button>
              </div>

            </div>
          </div>

            {/* ------------- GEL-KAYANO Section ------------------ */}

            <div className="gelkayano">
              <h1 className='text-[36px] text-center text-[#312955]'>GEL-KAYANO™ 32</h1>
              <img src={Womengel} alt="" className='cursor-pointer' />
            </div>


            {/* ------------- LiteShow ection ------------------ */}

            <div className="gelkayano">
              <h1 className='text-[36px] text-center text-[#312955]'>LITE-SHOW™ Collection</h1>
              <img src={Liteshow} alt="" className='cursor-pointer' />
            </div>

            
            {/* ------------- Blast Women ection ------------------ */}

            <div className="gelkayano">
              <h1 className='text-[36px] text-center text-[#312955]'>LITE-SHOW™ Collection</h1>
              <img src={Blastw} alt="" className='cursor-pointer' />
            </div>

             {/* ------------- SportStyle Women ection ------------------ */}

            <div className="gelkayano">
              <h1 className='text-[36px] text-center text-[#312955]'>LITE-SHOW™ Collection</h1>
              <img src={sportstylew} alt="" className='cursor-pointer' />
            </div>

            {/* ------------- Apparel collection Women ection ------------------ */}

            <div className="gelkayano">
              <h1 className='text-[36px] text-center text-[#312955]'>Apparel Collection</h1>
              <img src={Apparelw} alt="" className='cursor-pointer' />
            </div>

        </div>
      </div>
    </>
  )
}


