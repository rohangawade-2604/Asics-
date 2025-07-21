import React from 'react'
import SportColl from '../assets/Sport-coll.png'
import SportColl1 from '../assets/Sport-coll-1.png'
import SportColl2 from '../assets/Sport-coll-2.png'
import './Sport_collection.css'

export const SportCollecton = () => {
  return (
    <>
       <h1 className='text-[36px] text-center text-[#312955] my-5 mt-7'>SPORTSTYLE Collection</h1>
            <div className="slider">
              <figure className='figure'>
                <img src={SportColl} alt="" />
                <img src={SportColl1} alt="" />
                <img src={SportColl2} alt="" />
                <img src={SportColl} alt="" />
              
               
              
              </figure>
            </div>
    </>
  )
}


