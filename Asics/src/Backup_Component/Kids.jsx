import React, { useState, useEffect } from 'react'
import { DropDown } from './DropDown'
import axios from "axios"
import "./Kids.css"

export const Kids = () => {
  const [isOpen, setIsOpen] = useState(null);
  const [shoes, setShoes] = useState({});
  const [allProducts, setAllProducts] = useState([]);
  const [products, setProducts] = useState([]);

  const [filters, setFilters] = useState({
    category: '',
    activity: '',
    gender: '',
    productType: '',
    pronation: '',
    size: '',
    width: '',
    sort: '',
  });

  // Hover change
  const handleMediaChange = (productId, index) => {
    setShoes((prev) => ({
      ...prev,
      [productId]: index
    }));
  };

  // API endpoint
  const API = "https://all-project-api-1.onrender.com/mens";

  const fetchData = async () => {
    try {
      const response = await axios.get(API);
      const data = response.data;
      setAllProducts(data);
      setProducts(data);
    }
    catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  // Filtering + Sorting
  useEffect(() => {
    let result = [...allProducts].filter(product => {
      const prod = {
        category: product.category || product.CATEGORY,
        activity: product.activity || product.ACTIVITY,
        gender: product.gender || product.GENDER,
        productType: product.productType || product.PRODUCTTYPE,
        pronation: product.pronation || product.PRONATION,
        size: product.size || product.SIZE,
        width: product.width || product.WIDTH,
        price: product.price || product.PRICE,
      };

      return (
        (!filters.category || prod.category === filters.category) &&
        (!filters.activity || prod.activity === filters.activity) &&
        (!filters.gender || prod.gender === filters.gender) &&
        (!filters.productType || prod.productType === filters.productType) &&
        (!filters.pronation || prod.pronation === filters.pronation) &&
        (!filters.size || prod.size === filters.size) &&
        (!filters.width || prod.width === filters.width)
      );
    });

    // Sorting
    const getPrice = (product) => {
      const priceStr = product.Rs?.[0] || "0"; 
      return Number(priceStr.replace(/[^0-9.-]+/g, ""));
    };

    if (filters.sort === 'PRICE LOW TO HIGH') {
      result.sort((a, b) => getPrice(a) - getPrice(b));
    }
    if (filters.sort === 'PRICE HIGH TO LOW') {
      result.sort((a, b) => getPrice(b) - getPrice(a));
    }

    setProducts(result);
  }, [filters, allProducts]);

  // Dropdown toggle
  const handleToggle = (title) => {
    setIsOpen(isOpen === title ? null : title);
  };

  // Set filter value
  const handleFilterChange = (filterName, value) => {
    setFilters(prevFilters => ({
      ...prevFilters,
      [filterName]: value
    }));
    setIsOpen(null);
  };

  // Clear all filters
  const clearFilters = () => {
    setFilters({
      category: '',
      activity: '',
      gender: '',
      productType: '',
      pronation: '',
      size: '',
      width: '',
      sort: '',
    });
    setProducts(allProducts);
  };

  // Remove single filter tag
  const removeFilter = (filterName) => {
    setFilters(prevFilters => ({
      ...prevFilters,
      [filterName]: ''
    }));
  };

  return (
    <>
      {/* ---- Filters Section ---- */}
      <div className="Container flex border-1 border-l-0 border-slate-400 border-r-0 p-2 mx-18">
        <div className="first_Container flex items-center gap-4">
          <h1 className='text-[16px] text-[#002d69] font-black mt-3'>FILTER</h1>
          
          {/* Clear Filters Button */}
          <button 
            onClick={clearFilters} 
            className="ml-4 px-3 py-1 text-sm rounded-md bg-red-500 text-white hover:bg-red-600"
          >
            Clear Filters
          </button>
        </div>
        
        <hr className='h-12 border-1 ml-3 border-slate-300' />

        <div className="Dropdown_Container mt-2">
          <DropDown title="CATEGORY" Option={['SHOES']} isOpen={isOpen === "CATEGORY"} isToggle={() => handleToggle("CATEGORY")} onSelect={(value) => handleFilterChange('category', value)} />
            
          <DropDown title="ACTIVITY" Option={['RUNNING','TENNIS','SPORTSTYLE','INDOOR COURT','CRICKET','WALKING']} isOpen={isOpen === "ACTIVITY"} isToggle={() => handleToggle("ACTIVITY")} onSelect={(value) => handleFilterChange('activity', value)} />
          <DropDown title="GENDER" Option={['KIDS']} isOpen={isOpen === "GENDER"} isToggle={() => handleToggle("GENDER")} onSelect={(value) => handleFilterChange('gender', value)} />
          <DropDown title="PRODUCT TYPE" Option={['SHOES']} isOpen={isOpen === "PRODUCT TYPE"} isToggle={() => handleToggle("PRODUCT TYPE")} onSelect={(value) => handleFilterChange('productType', value)} />
          <DropDown title="PRONATION" Option={['OVERPRONATION','NEUTRAL']} isOpen={isOpen === "PRONATION"} isToggle={() => handleToggle("PRONATION")} onSelect={(value) => handleFilterChange('pronation', value)} />
          <DropDown title="SIZE" Option={['US5/UK4','US6/UK5','US7/UK6','US8/UK7','US9/UK8','US10/UK9']} isOpen={isOpen === "SIZE"} isToggle={() => handleToggle("SIZE")} onSelect={(value) => handleFilterChange('size', value)} />
          <DropDown title="WIDTH" Option={['STANDARD']} isOpen={isOpen === "WIDTH"} isToggle={() => handleToggle("WIDTH")} onSelect={(value) => handleFilterChange('width', value)} />
        </div>

        <hr className='h-12 border-1 ml-3 border-slate-300' />

        <div className="Sort mt-2">
          <DropDown title="SORT RECOMMENDED" Option={['NEW ARRIVALS','MOST POPULAR','PRICE LOW TO HIGH','PRICE HIGH TO LOW','RECOMMENDED']} isOpen={isOpen === "SORT RECOMMENDED"} isToggle={() => handleToggle("SORT RECOMMENDED")} onSelect={(value) => handleFilterChange('sort', value)} />
        </div>
      </div>

      {/* ---- Selected Filters (Chips) ---- */}
      <div className="ml-20 mt-4 flex flex-wrap gap-2">
        {Object.entries(filters).map(([key, value]) => (
          value && (
            <span key={key} className="px-3 py-1 bg-blue-100 text-blue-700 text-sm rounded-full flex items-center gap-2">
              {value}
              <button onClick={() => removeFilter(key)} className="ml-1 text-red-500 hover:text-red-700">✕</button>
            </span>
          )
        ))}
      </div>

      {/* ---- Product Cards ---- */}
      <div className="parent_card my-15">
        <div className="first_shoes_card grid grid-cols-3 ml-25 justify-evenly">
          {products.map((el) => (
            <div className="product1" key={el.id}>
              <div className="images">
                <div className="preview1">
                  <img src={el.src[shoes[el.id] || 0]} alt="" />
                </div>
                <div className="img-hover1">
                  {el.src.map((img, id) => (
                    <img
                      src={img}
                      alt=""
                      key={id}
                      onMouseEnter={() => handleMediaChange(el.id, id)}
                      onMouseLeave={() => handleMediaChange(el.id, 0)}
                    />
                  ))}
                </div>
              </div>
              <div className="details">
                <span>{el.h1[shoes[el.id] || 0]}</span>
                <p>{el.p}</p>
                <p>{el.Rs[shoes[el.id] || 0]}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
