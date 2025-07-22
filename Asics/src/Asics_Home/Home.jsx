import React from 'react'
import { Shoes_Slider } from './Shoes_Slider'
import { Explore } from './Explore'
import { SportCollecton } from './SportCollecton'
import { ShopColor } from './ShopColor'
import Gelkayano from '../assets/GelKayano.png'
import Dynablast from '../assets/Dynablast.png'
import Apparel from '../assets/Apparel.png'

export const Home = () => {
    return (
        <>
            <div className="home_container">
                
                <div className="iframe">
                     <iframe
                    loading="lazy"
                    title="Gumlet video player"
                    src="https://play.gumlet.io/embed/687648c0e448cc1c325d4daa?background=true&autoplay=true&loop=true&disableControls=false"
                    style={{
                        border: 'none',
                        height: '100vh',
                        width: '100%',
                        overflow: 'hidden',

                    }}
                    allow="accelerometer; gyroscope; autoplay; encrypted-media; picture-in-picture; fullscreen"
                />
                </div>
               


                <div className='shoes_slider'>
                    <Shoes_Slider />
                </div>

                <div className="explore">
                    <Explore/>
                </div>

                <div className="sport_collection">
                    <SportCollecton/>
                </div>

                <div className="shopColor">
                    <ShopColor/>
                </div>

                <div className="gelkayano">
                    <h1 className='text-[36px] text-center text-[#312955]'>GEL-KAYANO™ Series</h1>
                    <img src={Gelkayano} alt=""  className='cursor-pointer'/>
                </div>

                 <div className="Dynablast">
                    <h1 className='text-[36px] text-center text-[#312955]'>DYNABLAST™ 5 Collection</h1>
                    <img src={Dynablast} alt=""  className='cursor-pointer'/>
                </div>

                <div className="Apparel">
                    <h1 className='text-[36px] text-center text-[#312955]'>Apparel Collection</h1>
                    <img src={Apparel} alt=""  className='cursor-pointer'/>
                </div>

            </div>

        </>
    )
}


