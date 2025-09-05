import React from 'react'
import './Sportstyle.css'
import Drop from '../assets/Drop.png'
import Coming from '../assets/Coming.png'
import Dropping from '../assets/Dropping.png'
import Coming2 from '../assets/Coming2.png'
import Collabrations from '../assets/Collabration.png'
import Edition1 from '../assets/Edition1.png'
import Edition2 from '../assets/Edition2.png'
import Apparel_Collect from '../assets/Apparel_Collect.png'
import { Chance } from '../SportStyle_Component/Chance'
import {Latest} from '../SportStyle_Component/Latest'

export const SportStyle = () => {
  return (
    <>
      <div className="SportStyle">
        <div className="SportStyle_Container">

          {/*------------------ Image Container----------------- */}
          <div className="SportStyle_img">
            <img src={Drop} alt="" className='cursor-pointer' />
          </div>

          {/*------------------ Launches Container----------------- */}
          <div className="Launches">
            <h1 className='text-[36px] text-center text-[#312955] my-3 font-courier'>Upcoming Launches</h1>
            <div className="Launches_Container flex justify-evenly my-10">
              <img src={Coming} alt="" className='w-110' />
              <img src={Dropping} alt="" className='w-110' />
              <img src={Coming2} alt="" className='w-110' />
            </div>
          </div>

          {/*--------------- Shop by Category-------------------- */}

          <div className="Category text-center">
            <h1 className='text-[36px] text-center text-[#312955] my-3 font-courier leading-[45px]'>Shop by Category</h1>

            <div className="buttons flex gap-10 justify-around my-5">
              <button className='border-2 p-2 w-75 rounded-[20px] bg-black text-white font-bold cursor-pointer'>Shop All Men</button>
              <button className='border-2 p-2 w-75 rounded-[20px] bg-black text-white font-bold cursor-pointer'>Shop All Womens</button>
            </div>
          </div>


          {/*-------------------------- Latest Drops -------------------*/}

          <Latest/>


          {/*------------------ Asics collabrations---------------------------- */}

          <div className="collabrations">
            <h1 className='text-[36px] text-center text-[#312955] my-3 font-courier'>Asics Collabrations</h1>
            <img src={Collabrations} alt="" className='px-25 cursor-pointer' />
          </div>

          {/*------------------ Limited Series Edition---------------------------- */}
          <div className="Edition">
            <h1 className='text-[36px] text-center text-[#312955] my-3 font-courier'>Limited Series Edition</h1>

            <div className="image2 cursor-pointer">
              <figure>
                <img src={Edition1} alt="" />
                <img src={Edition2} alt="" />
                <img src={Edition1} alt="" />
                <img src={Edition2} alt="" />
              </figure>

            </div>
          </div>

          {/*---------------- SportStyle Apparel Collection----------------------- */}

          <div className="SportStyle_Apparel my-5">
            <h1 className='text-[36px] text-center text-[#312955] my-3 font-courier'>SportStyle Apparel Collection</h1>
            <img src={Apparel_Collect} alt="" className='cursor-pointer' />
          </div>

          {/*---------------------- Last chance to buy----------------------- */}

          <Chance />

        </div>
      </div>
    </>
  )
}


