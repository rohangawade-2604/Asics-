import React from 'react'
import Black from "../assets/black.png"
import White from "../assets/white.png"
import Blue from "../assets/blue.png"
import Grey from "../assets/grey.png"
import Brown from "../assets/brown.png"
import Red from "../assets/red.png"

export const ShopColor = () => {
  return (
    <>
      <div className="ShopColor">
        <h1 className='text-[30px] text-center text-[#312955] my-5 mt-7 '>Shop By Color</h1>
        
        <div className="cards flex justify-center items-center gap-4 my-7 mb-10 mx-5 ">

          <div className="card1 w-100% overflow-hidden">
            <img src={Black} alt="" className='pic transition delay-100 ease-in-out hover:scale-[1.1] '/>
          </div>

           <div className="card1 w-100% overflow-hidden">
            <img src={White} alt="" className='pic transition delay-100 ease-in-out hover:scale-[1.1]'/>
          </div>

           <div className="card1 w-100% overflow-hidden">
            <img src={Blue} alt="" className='pic transition delay-100 ease-in-out hover:scale-[1.1]'/>
          </div>

           <div className="card1 w-100% overflow-hidden">
            <img src={Grey} alt="" className='pic transition delay-100 ease-in-out hover:scale-[1.1]'/>
          </div>

           <div className="card1 w-100% overflow-hidden">
            <img src={Brown} alt="" className='pic transition delay-100 ease-in-out hover:scale-[1.1]'/>
          </div>

           <div className="card1 w-100% overflow-hidden">
            <img src={Red} alt="" className='pic transition delay-100 ease-in-out hover:scale-[1.1] '/>
          </div>




        </div>
      </div>
    </>
  )
}


