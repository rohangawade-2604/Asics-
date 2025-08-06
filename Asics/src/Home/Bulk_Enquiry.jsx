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


            <form action="">
                <h1 className='text-[36px] text-[#312955] text-center'>Enquiry Form</h1>
                <div className="name_organisation flex flex-row gap-4 ">
                    <input type="text" name="name" id="name" placeholder='Name of the Representative' className='border-2 p-3 w-100 mt-5'/>
                    <input type="text" name="organisation" id="organisation" placeholder='Name of the Organisation' className='border-2 p-3 w-100 mt-5'/>
                </div>

                <div className="email_contact flex flex-row gap-4 ">
                    <input type="email" name="email" id="email" placeholder='Enter the Email' className='border-2 p-3 w-100 mt-5'/>
                    <input type="text" name="contact" id="contact" placeholder='Contact Number' className='border-2 p-3 w-100 mt-5'/>
                </div>

                <div className="Required_Quantity flex flex-row gap-4 ">
                    <input type="text" name="requirement" id="requirement" placeholder='Requirement' className='border-2 p-3 w-100 mt-5'/>
                    <input type="number" name="quantity" id="quantity" placeholder='Required Quantity' className='border-2 p-3 w-100 mt-5'/>
                </div>

                <div className="msg">
                    <textarea name="msg" id="" cols="30" rows="10" placeholder='Message'></textarea>
                </div>
            </form>
        </div>
    </div>
    </>
  )
}


