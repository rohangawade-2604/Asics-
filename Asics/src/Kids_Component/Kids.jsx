import React from 'react'
import { DropDown } from './DropDown'
import { useState } from 'react'
import { useEffect } from 'react'
import axios from "axios"
import "./Kids.css"


export const Kids = () => {

  const [isOpen, setIsOpen] = useState(null);
  const [shoes, setShoes] = useState({});
  const [products, setProducts] = useState([]); // All fetched products
 // Products to be displayed


  // This is the function of changing the card image on hover
  const handleMediaChange = (productId, index) => {
    setShoes((prev) => ({
      ...prev,
      [productId]: index
    }));
  };

  const API = "https://all-project-api-1.onrender.com/mens";

  const fetchData = async () => {
    try {
      const response = await axios.get(API);
      const data = await response.data;
      setProducts(data); // Store all fetched data in 'products'
    }
    catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []); 



  const handleToggle = (title) => {
    setIsOpen(isOpen === title ? null : title);
  };

  // Handler to update the filter state


  return (
    <>
      <div className="Container flex  border-1 border-l-0 border-slate-400 border-r-0 p-2 mx-18">

        <div className="first_Container">
          <h1 className='text-[16px] text-[#002d69] font-black mt-3'>FILTER</h1>
        </div>

        <hr className='h-12 border-1 ml-3  border-slate-300' />

        <div className="Dropdown_Container mt-2">

          <DropDown
            title="CATEGORY"
            Option={['SHOES']}
            isOpen={isOpen === "CATEGORY"}
            isToggle={() => handleToggle("CATEGORY")}
         
          />

          <DropDown
            title="ACTIVITY"
            Option={['RUNNING', 'TENNIS', 'SPORTSTYLE', 'INDOOR COURT', 'CRICKET', 'WALKING']}
            isOpen={isOpen === "ACTIVITY"}
            isToggle={() => handleToggle("ACTIVITY")}
          
          />

          <DropDown
            title="GENDER"
            Option={['KIDS']}
            isOpen={isOpen === "GENDER"}
            isToggle={() => handleToggle("GENDER")}
          
          />
          
          <DropDown
            title="PRODUCT TYPE"
            Option={['SHOES']}
            isOpen={isOpen === "PRODUCT TYPE"}
            isToggle={() => handleToggle("PRODUCT TYPE")}
            
          />

          <DropDown
            title="PRONATION"
            Option={['OVERPRONATION', 'NEUTRAL']}
            isOpen={isOpen === "PRONATION"}
            isToggle={() => handleToggle("PRONATION")}
        
          />

          <DropDown
            title="SIZE"
            Option={['US5/UK4', 'US6/UK5', 'US7/UK6', 'US8/UK7', 'US9/UK8', 'US10/UK9']}
            isOpen={isOpen === "SIZE"}
            isToggle={() => handleToggle("SIZE")}
    
          />
   
          <DropDown
            title="WIDTH"
            Option={['STANDARD']}
            isOpen={isOpen === "WIDTH"}
            isToggle={() => handleToggle("WIDTH")}
           
          />

        </div>

        <hr className='h-12 border-1 ml-3  border-slate-300' />

        <div className="Sort mt-2">
          <DropDown
            title="SORT RECOMMENDED"
            Option={['NEW ARRIVALS', 'MOST POPULAR', 'PRICE LOW TO HIGH', 'PRICE HIGH TO LOW', 'RECOMMENDED']}
            isOpen={isOpen === "SORT RECOMMENDED"}
            isToggle={() => handleToggle("SORT RECOMMENDED")}  
          />
        </div>
      </div>

      <div className="parent_card my-15">
        <div className="first_shoes_card grid grid-cols-3 ml-25 justify-evenly">
          {
            products.map((el) => (
              <div className="product1 " key={el.id}>
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
                          onMouseLeave={() => handleMediaChange(el.id, 0, )}
                        />
                      ))
                    }
                  </div>
                </div>
                <div className="details">
                  <span>{el.h1[shoes[el.id] || 0]}</span>
                  <p>{el.p}</p>
                  <p>{el.Rs[shoes[el.id] || 0]}</p>
                </div>
              </div>
            ))
          }
        </div>
      </div>
    </>
  );
};
