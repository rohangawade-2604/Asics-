import React from 'react'
import { useState, useEffect } from 'react'
import axios from "axios"

export const Featured = () => {

    const [current, setCurrent] = useState({});
    const [data, setData] = useState([]);


    // This is the function of changing the card image on hover
    const handleMediaChange = (productId, index) => {
        setCurrent((prev) => ({
            ...prev,
            [productId]: index
        }));
    };

    const API = "https://all-project-api-1.onrender.com/Mens_shoes_product"

    const fetchData = async () => {
        try {
            const response = await axios.get(API)
            const data = await response.data;
            setData(data)
        }
        catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        fetchData();
    });


    return (
        <div>
            <div className="parent_card">
                <h1 className='text-[36px] text-center text-[#312955] my-5'>Most Popular</h1>
                <div className="first_shoes_card flex justify-around my-12 px-35 ">
                    {
                        data.map((el) => (
                            <div className="product" key={el.id}>
                                <div className="images">

                                    <div className="preview">

                                        <img src={el.src[current[el.id] || 0]} alt="" />
                                    </div>

                                    <div className="img-hover">
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
                </div>
            </div>
        </div>
    )
}


