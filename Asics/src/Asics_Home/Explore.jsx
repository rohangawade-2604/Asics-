import React from 'react'
import Explore1 from "../assets/explore1.png"
import Explore2 from "../assets/explore2.png"
import Explore3 from "../assets/explore3.png"
import Explore4 from "../assets/explore4.png"
import Explore5 from "../assets/explore5.png"
import Explore6 from "../assets/explore6.png"

export const Explore = () => {
  return (
    <>
      <div className="Explore">
        <h1 className='text-[36px] text-center text-[#312955] my-5 mt-7 '>Explore Timeless Legends</h1>
        
        <div className="cards flex justify-center items-center gap-4 my-7 mb-10 mx-5 ">

          <div className="card1 w-100% overflow-hidden">
            <img src={Explore1} alt="" className='pic transition delay-100 ease-in-out hover:scale-[1.1] '/>
          </div>

           <div className="card1 w-100% overflow-hidden">
            <img src={Explore2} alt="" className='pic transition delay-100 ease-in-out hover:scale-[1.1]'/>
          </div>

           <div className="card1 w-100% overflow-hidden">
            <img src={Explore3} alt="" className='pic transition delay-100 ease-in-out hover:scale-[1.1]'/>
          </div>

           <div className="card1 w-100% overflow-hidden">
            <img src={Explore4} alt="" className='pic transition delay-100 ease-in-out hover:scale-[1.1]'/>
          </div>

           <div className="card1 w-100% overflow-hidden">
            <img src={Explore5} alt="" className='pic transition delay-100 ease-in-out hover:scale-[1.1]'/>
          </div>

           <div className="card1 w-100% overflow-hidden">
            <img src={Explore6} alt="" className='pic transition delay-100 ease-in-out hover:scale-[1.1] '/>
          </div>




        </div>
      </div>
    </>
  )
}


