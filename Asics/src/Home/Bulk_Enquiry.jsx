import React from 'react'
import bulken from '../assets/Bulken.png'
import Rupees from '../assets/rupees.png'

export const Bulk_Enquiry = () => {
  return (
    <>
    <div className="bulk_enquiry">

         <div className="bulk_enquiry_container">

            <div className="bulk_img cursor-pointer">
                <img src={bulken} alt="" />
            </div>


        <div className="enquiry_info flex justify-around items-center my-8">
            <div className="special_pricing flex gap-4 ">
                <img src={Rupees} alt="" />

                <div className="containt">
                    <h1>Special Pricing</h1>
                    <p className=''>Unlock Special prices with Bulk Orders</p>
                </div>
            </div>

            <div className="GST_Benefits flex gap-4">
               <i className="fa-regular fa-file text-[50px] text-[#001f62]"></i>

                <div className="containt">
                    <h1>GST Benefits</h1>
                    <p className=''>Save up to 30% on your purchases by claiming the GST inputs tax credits</p>
                </div>
            </div>



        </div>
        </div>
    </div>
    </>
  )
}


