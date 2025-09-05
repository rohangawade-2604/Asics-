import React from 'react'
import './Chance.css'
import { useState, useEffect } from 'react'
import axios from "axios"
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export const Chance = () => {

    const [shoes, setShoes] = useState({});
    const [state, setState] = useState([]);


    // This is the function of changing the card image on hover
    const handleMediaChange = (productId, index) => {
        setShoes((prev) => ({
            ...prev,
            [productId]: index
        })
        );
    };

    const API = "https://all-project-api-1.onrender.com/Last_Chances"

    const fetchData = async () => {
        try {
            const response = await axios.get(API)
            const data = await response.data;
            setState(data)
        }
        catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        fetchData();
    });


    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,   // better for smooth autoplay
        autoplay: true,      // enable auto sliding
        autoplaySpeed: 2000, // time between slides (2 seconds)
        cssEase: "linear"
    };

    return (
        <>
            <div className="parent_card my-10">
                <h1 className='text-[36px] text-center text-[#312955] my-3'>Last Chance to Buy</h1>
                <div className="first_shoes_card flex flex-col gap-30 px-15  justify-evenly">
                    <Slider {...settings} >


                        {
                            state.map((el) => (
                                <div className="product1" key={el.id}>
                                    <div className="images">

                                        <div className="preview1">

                                            <img src={el.src[shoes[el.id] || 0]} alt="" />
                                        </div>

                                        <div className="img-hover1">
                                            {
                                                el.src.map((img, id) => (
                                                    <img
                                                        src={img}
                                                        alt=""
                                                        key={id}
                                                        onMouseEnter={() => handleMediaChange(el.id, id)}
                                                        onMouseLeave={() => handleMediaChange(el.id, 0)}
                                                    />
                                                ))
                                            }

                                        </div>
                                    </div>

                                    <div className="details">
                                        <span>{el.h1[shoes[el.id] || 0]}</span>
                                        <p>{el.p}</p>

                                        
                                        <p><s>{el.Amt[shoes[el.id] || 0]}</s>{el.Rs[shoes[el.id] || 0]}</p>


                                    </div>
                                </div>
                            ))
                        }
                    </Slider>
                </div>
            </div>

        </>
    )
}


