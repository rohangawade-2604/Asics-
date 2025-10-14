import React from 'react'   
import { useState, useEffect } from 'react'
import Bulken from '../assets/Bulken.png'

import Rupees from '../assets/rupees.png'
import axios, {Axios} from "axios"
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";



export const Bulk_Enquiry = () => {
    const [Corousel , setCorousel] = useState([])

    const API = "https://all-project-api-1.onrender.com/posts";

    const fetchData = async() => {
        try{
            const data = await axios.get(API);
            const fulldata = await data.data;
            setCorousel(fulldata)
        }
        catch(error){
            console.log(error)
        }
    }

    useEffect(() => {
        fetchData();
    },[])



    var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 2
  };


  return (
    <>
    <div className="bulk_enquiry">

         <div className="bulk_enquiry_container bg-[#cfcfcf]">

            <div className="bulk_img cursor-pointer">
                <img src={Bulken} alt="" />
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


            <form action="" className='flex flex-col items-center py-10 '>
                <h1 className='text-[36px] text-[#312955] text-center'>Enquiry Form</h1>
                <div className="name_organisation flex flex-row gap-4 ">
                    <input type="text" name="name" id="name" placeholder='Name of the Representative' className=' p-3 w-100 mt-5 bg-white rounded-b-[15px]'/>
                    <input type="text" name="organisation" id="organisation" placeholder='Name of the Organisation' className=' p-3 w-100 mt-5 bg-white rounded-b-[15px]'/>
                </div>

                <div className="email_contact flex flex-row gap-4 ">
                    <input type="email" name="email" id="email" placeholder='Enter the Email' className=' p-3 w-100 mt-5 bg-white rounded-b-[15px]'/>
                    <input type="text" name="contact" id="contact" placeholder='Contact Number' className=' p-3 w-100 mt-5 bg-white rounded-b-[15px]'/>
                </div>

                <div className="Required_Quantity flex flex-row gap-4 ">
                    <input type="text" name="requirement" id="requirement" placeholder='Requirement' className=' p-3 w-100 mt-5 bg-white rounded-b-[15px]'/>
                    <input type="number" name="quantity" id="quantity" placeholder='Required Quantity' className=' p-3 w-100 mt-5 bg-white rounded-b-[15px]'/>
                </div>

                <div className="msg">
                    <textarea name="msg" id="" cols="30" rows="10" placeholder='Enter the Message' className=' p-3 w-204 mt-5 bg-white rounded-b-[15px]'></textarea>
                </div>

                <div className="button">
                    <button type='submit' className='p-3 w-100 mt-5 bg-[#001f62] text-white rounded-[15px] transition delay-100 ease-in-out hover:bg-white hover:text-[#001b61] cursor-pointer'>Send Message</button>
                </div>


            </form>
        </div>




        <div className="Corousel">
            <div className="sliders px-15 py-5">
                <Slider {...settings}>
                {
                    Corousel.map((item , id) => (
                        <div className="slider1 uppercase flex my-5 gap-3" key={id}>
                            <img src={item.img} alt="" className='w-100 p-10 transition-all ease-in-out duration-300 hover:transform hover:scale-[1.1]'/>
                            <div className='flex flex-col items-center py-5'>
                                <h1>{item.h1}</h1>
                                <p>{item.code}</p>
                                <p>{item.price}</p>
                            </div>

                            
                        </div> 
                             
                    ))
                }
                </Slider>
            </div>

             <div className="button ">
                    <button type='submit' className='p-3 ml-[43.5%] mt-6 bg-[#001f62] text-white transition delay-100 ease-in-out hover:bg-white hover:text-[#001b61] hover:border-1 cursor-pointer my-7'>Download Full Catalogue</button>
                </div>
        </div>
    </div>
    </>
  )
}


