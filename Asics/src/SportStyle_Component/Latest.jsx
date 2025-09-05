import React from 'react'

import First from '../SportStyle_Component/Latest_images/First.png'
import whitey from '../SportStyle_Component/Latest_images/whitey.png'
import greywhite from '../SportStyle_Component/Latest_images/greywhite.png'
import kinetic from '../SportStyle_Component/Latest_images/kinetic.png'
import kinetic1 from '../SportStyle_Component/Latest_images/kinetic1.png'
import kinetic2 from '../SportStyle_Component/Latest_images/kinetic2.png'
import Quantum from '../SportStyle_Component/Latest_images/Quantum.png'
import Quantum1 from '../SportStyle_Component/Latest_images/Quantum1.png'
import Quantum2 from '../SportStyle_Component/Latest_images/Quantum2.png'
import Quantum3 from '../SportStyle_Component/Latest_images/Quantum3.png'
import Gel from '../SportStyle_Component/Latest_images/Gel.png'
import Gel1 from '../SportStyle_Component/Latest_images/Gel1.png'
import Gel2 from '../SportStyle_Component/Latest_images/Gel2.png'


export const Latest = () => {
    return (
        <>
            <div className="Latest bg-black h-[300vh] text-white px-20">
                <h1 className='text-[36px] text-center text-white my-3 py-5 font-courier'>Latest Drops</h1>
                <div className="Latest_Container flex flex-col gap-6">
                    
                    {/*-------------- first img sections --------------- */}
                    <div className="first_part flex gap-8">
                        <div className="sticky_img w-80">
                            <img src={First} alt="" />
                        </div>

                        <div className="fleximage w-80 flex gap-7">
                            <img src={whitey} alt="" />
                            <img src={greywhite} alt="" />
                        </div>
                    </div>

                    {/*-------------- second img sections --------------- */}

                    <div className="second_part flex gap-8">
                        <div className="sticky_img w-80">
                            <img src={kinetic} alt="" />
                        </div>

                        <div className="fleximage w-80 flex gap-7">
                            <img src={kinetic1} alt="" />
                            <img src={kinetic2} alt="" />
                        </div>
                    </div>


                    {/*-------------- third img sections --------------- */}

                    <div className="third_part flex gap-8">
                        <div className="sticky_img w-80">
                            <img src={Quantum} alt="" />
                        </div>

                        <div className="fleximage w-80 flex gap-7">
                            <img src={Quantum1} alt="" />
                            <img src={Quantum2} alt="" />
                            <img src={Quantum3} alt="" />
                        </div>
                    </div>


                    {/*-------------- fourth img sections --------------- */}


                    <div className="fourth_part flex gap-8">
                        <div className="sticky_img w-80">
                            <img src={Gel} alt="" />
                        </div>

                        <div className="fleximage w-80 flex gap-7">
                            <img src={Gel1} alt="" />
                            <img src={Gel2} alt="" />
                        </div>
                    </div>

                {/*-------------------- fifth img sections------------------ */}

                

                </div>
            </div>
        </>
    )
}


