import React from 'react'
import { Shoes_Slider } from './Shoes_Slider'
import { Explore } from './Explore'
import { SportCollecton } from './SportCollecton'
import { ShopColor } from './ShopColor'
import Gelkayano from '../assets/GelKayano.png'
import Dynablast from '../assets/Dynablast.png'
import Apparel from '../assets/Apparel.png'
import Aboutasics from '../assets/Aboutasics.mp4'

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

                   {/* ------------Shoes_slider Section------------      */}

                <div className='shoes_slider'>
                    <Shoes_Slider />
                </div>
                
                {/* ------------Explore Section------------      */}

                <div className="explore">
                    <Explore />
                </div>
                
                {/* ------------Sport Collection Section------------      */}

                <div className="sport_collection">
                    <SportCollecton />
                </div>

                {/* ------------Shop By Color Section------------      */}

                <div className="shopColor">
                    <ShopColor />
                </div>

                {/* ------------- GEL-KAYANO Section ------------------ */}

                <div className="gelkayano">
                    <h1 className='text-[36px] text-center text-[#312955]'>GEL-KAYANO™ Series</h1>
                    <img src={Gelkayano} alt="" className='cursor-pointer' />
                </div>

                {/* ------------- DYNABLAST Section ------------------ */}

                <div className="Dynablast">
                    <h1 className='text-[36px] text-center text-[#312955]'>DYNABLAST™ 5 Collection</h1>
                    <img src={Dynablast} alt="" className='cursor-pointer' />
                </div>

                {/* ------------- Apparel Section ------------------ */}

                <div className="Apparel">
                    <h1 className='text-[36px] text-center text-[#312955]'>Apparel Collection</h1>
                    <img src={Apparel} alt="" className='cursor-pointer' />
                </div>


                {/* ------------- About Asics Section ------------------ */}


                <div className="About_Asics  ">

                    <div className="container flex justify-around items-center mx-20 gap-10 my-20">
                        <div className="video">
                            <video width="650" height="700" controls autoPlay loop muted poster="thumbnail.jpg">
                                <source src={Aboutasics} type="video/mp4"></source>
                            </video>
                        </div>

                        <div className="description w-[50%] flex flex-col  gap-5">
                            <h1 className='text-[36px] text-[#312955]'>About ASICS</h1>
                            <p className='text-[#312955]'>ASICS has been developing sports footwear and apparel for more than 50 years. In this time, innovation has been the key to our introduction of design philosophies that have revolutionised the world of sports. At our research and development centre in Kobe, Japan, we work in close collaboration with male and female athletes. Through our scientific approach we have strived to create highly innovative sports product solutions that our customers rely upon. Technologies, such as core GEL cushioning system and Flytefoam are renown for enabling the most comfortable and performance-enhancing footwear and apparel on the market, for athletes and active consumers alike.</p>
                            <button type='button' className='text-[#312955] border-2 p-2 font-semibold text-[12px] w-30 rounded-[20px] cursor-pointer'>Read More</button>
                        </div>
                    </div>





                </div>

            </div>

        </>
    )
}


