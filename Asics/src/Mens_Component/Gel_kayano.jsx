import React from 'react'
import { useState, useEffect } from 'react'
import axios from "axios"
import './Gel_kayano.css'
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export const Gel_kayano = () => {

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

    const API = "https://all-project-api-1.onrender.com/Mens_shoes_2"

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
        slidesToScroll: 4
    };




    return (
        <>
            <div className="parent_card my-15">
                {/* <h1 className='text-[36px] text-center text-[#312955] my-5'>Most Popular</h1> */}
                <div className="first_shoes_card flex flex-col gap-30 px-15 justify-evenly">
                    <Slider {...settings}>


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
                                        <span>{el.h1}</span>
                                        <p>{el.p}</p>
                                        <p>{el.Rs}</p>
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


