import React from 'react'
import men from '../assets/Mens1.png'
import men1 from '../assets/Mens2.png'
import './Men.css'
export const Men = () => {
  return (
    <div>
      <div className="mens">

        <div className="mens_container">

            <div className="image1">
              <figure>
                <img src={men} alt="" />
                <img src={men1} alt="" />
                <img src={men} alt="" />
                <img src={men1} alt="" />
                <img src={men} alt="" />
              </figure>

            </div>


            <div className="Mens_Collections">
              
            </div>


        </div>



      </div>

    </div>
  )
}


