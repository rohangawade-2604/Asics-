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



                <div className='shoes_slider'>
                    <Shoes_Slider />
                </div>

                <div className="explore">
                    <Explore />
                </div>

                <div className="sport_collection">
                    <SportCollecton />
                </div>

                <div className="shopColor">
                    <ShopColor />
                </div>

                <div className="gelkayano">
                    <h1 className='text-[36px] text-center text-[#312955]'>GEL-KAYANO™ Series</h1>
                    <img src={Gelkayano} alt="" className='cursor-pointer' />
                </div>

                <div className="Dynablast">
                    <h1 className='text-[36px] text-center text-[#312955]'>DYNABLAST™ 5 Collection</h1>
                    <img src={Dynablast} alt="" className='cursor-pointer' />
                </div>

                <div className="Apparel">
                    <h1 className='text-[36px] text-center text-[#312955]'>Apparel Collection</h1>
                    <img src={Apparel} alt="" className='cursor-pointer' />
                </div>


                {/* ------------- About Asics Section ------------------ */}

                <div className="About_Asics mx-10 my-20 ">

                    <div className="container flex justify-around gap-10  mx-15">
                        <div className="video w-[80%]">
                            <video width="650" height="700" controls autoPlay loop muted poster="thumbnail.jpg">
                                <source src={Aboutasics} type="video/mp4"></source>
                            </video>
                        </div>

                        <div className="description w-[100%]  flex flex-col just gap-5">
                            <h1 className='text-[36px] text-[#312955]'>About ASICS</h1>
                            <p className='w-[90%] text-[#312955]'>ASICS has been developing sports footwear and apparel for more than 50 years. In this time, innovation has been the key to our introduction of design philosophies that have revolutionised the world of sports. At our research and development centre in Kobe, Japan, we work in close collaboration with male and female athletes. Through our scientific approach we have strived to create highly innovative sports product solutions that our customers rely upon. Technologies, such as core GEL cushioning system and Flytefoam are renown for enabling the most comfortable and performance-enhancing footwear and apparel on the market, for athletes and active consumers alike.</p>
                            <button type='button' className='text-[#312955] border-2 p-2 font-semibold text-[12px] w-30 rounded-[20px] cursor-pointer'>Read More</button>
                        </div>
                    </div>





                </div>

            </div>

        </>
    )
}


