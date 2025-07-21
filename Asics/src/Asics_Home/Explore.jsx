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
        <h1>Explore Timeless Legends</h1>
        
        <div className="cards">

          <div className="card1">
            <img src={Explore1} alt="" className='pic'/>
          </div>

           <div className="card1">
            <img src={Explore2} alt="" className='pic'/>
          </div>

           <div className="card1">
            <img src={Explore3} alt="" className='pic'/>
          </div>

           <div className="card1">
            <img src={Explore4} alt="" className='pic'/>
          </div>

           <div className="card1">
            <img src={Explore5} alt="" className='pic'/>
          </div>

           <div className="card1">
            <img src={Explore6} alt="" className='pic'/>
          </div>




        </div>
      </div>
    </>
  )
}


