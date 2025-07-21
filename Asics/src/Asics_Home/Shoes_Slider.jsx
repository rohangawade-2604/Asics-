import React from 'react'
import Homepic from '../assets/Homepic.png'
import Homepic2 from '../assets/Homepic2.png'
import Homepic3 from '../assets/Homepic3.png'
import './Shoes_Slider.css'
import HomePic4 from '../assets/Homepic4.png'   

export const Shoes_Slider = () => {
  return (
    <>
    <h1 className='text-[36px] text-center'>Limited Series Collection</h1>
      <div className="slider1">
        <figure className='figure1'>
            <img src={Homepic} alt="" />
            <img src={Homepic2} alt="" />
            <img src={Homepic3} alt="" />
            <img src={HomePic4} alt="" />
            <img src={Homepic} alt="" />
        
        </figure>
      </div>
    </>
  )
}

