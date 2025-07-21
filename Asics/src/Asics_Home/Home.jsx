import React from 'react'
import { Shoes_Slider } from './Shoes_Slider'
import { Explore } from './Explore'

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

            </div>

        </>
    )
}


