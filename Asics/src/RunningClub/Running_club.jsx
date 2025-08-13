import React, { useEffect, useState } from 'react'
import axios from 'axios'
import './running.css'
import Runningclub from '../assets/Runningclub.png'
import CB1 from '../assets/CB1.png'
import CB2 from '../assets/CB2.png'
import CB3 from '../assets/CB3.png'
import CB4 from '../assets/CB4.png'
import CB5 from '../assets/CB5.png'
import CB6 from '../assets/CB6.png'
import CB7 from '../assets/CB7.png'
import CB8 from '../assets/CB8.png'


import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export const Running_club = () => {

  const [coaches, setCoaches] = useState([])

  const API = "https://all-project-api-1.onrender.com/Coaches";

  const FetchData = async () => {
    try {
      const { data } = await axios.get(API);
      setCoaches(data);
    }
    catch (err) {
      console.log(err)
    }
  }

  useEffect(() => {
    FetchData();
  }, [])


  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 4
  };

  return (
    <div className="Running_club">
      <div className="running_container ">

        {/* Hero Section */}
        <div
          className="img1 h-[600px] w-full bg-cover bg-center relative"
          style={{ backgroundImage: `url(${Runningclub})` }}
        >
          <figure className="absolute bottom-20 left-50">
            <h1 className="text-4xl font-bold text-white">ASICS RUNNING CLUB</h1>
            <p className="text-white w-[60%] my-5">
              Come join us for our upcoming sessions! Take a look at our monthly schedule for the upcoming training programmes and sign up for the sessions with our highly-experience coaches.
            </p>
            <button className="effect_button mr-10 text-[16px]">Sign Up here</button>
            <button className="effect_button">Join Facebook Group</button>
          </figure>
        </div>

        {/* Coaches Section */}
        <div className="coaches my-15 mx-20">
          <h1 className="text-[36px] text-center text-[#312955] ">OUR COACHES</h1>
          <Slider {...settings}>

            {coaches.map((el, id) => (
              <div className="coaches_part my-7  " key={id}>

                <img src={el.img} alt={el.name} />

                <div className="one flex flex-col items-center gap-5">

                    <h1 className='uppercase text-[20px] mt-2  text-[#312955] font-bold'>{el.name}</h1>
                    <p>{el.coach}</p>
                </div>
              </div>
            ))}

          </Slider>
        </div>

        {/* Club Members Section */}
        <div className="club_members">
          <h1 className="text-[36px] text-center text-[#312955]">CLUB MEMBERS IN ACTION</h1>

          <div className="imgs flex justify-evenly gap-5 px-76 pl-[20%]">
            {[CB1, CB2, CB3, CB4].map((img, i) => (
              <div className="wrapper h-[220px] w-[220px] overflow-hidden" key={i}>
                <img
                  src={img}
                  alt=""
                  className="h-[100%] w-[100%] grayscale-0 transition-all duration-300 ease-in-out cursor-pointer hover:transform hover:scale-[1.1] hover:grayscale-100"
                />
              </div>
            ))}
          </div>

          <div className="img1 flex justify-evenly gap-5 pt-8 px-76  pl-[20%]">
            {[CB5, CB6, CB7, CB8].map((img, i) => (
              <div className="wrapper h-[220px] w-[220px] overflow-hidden" key={i}>
                <img
                  src={img}
                  alt=""
                  className="h-[100%] w-[100%] grayscale-0 transition-all duration-300 ease-in-out cursor-pointer hover:transform hover:scale-[1.1] hover:grayscale-100"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
