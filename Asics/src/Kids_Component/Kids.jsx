import React from 'react'
import { DropDown } from './DropDown'
import { useState } from 'react'


export const Kids = () => {

  const [isOpen, setIsOpen] = useState(null)
  const [sort , setSort] = useState(null)

  const handleToggle = (title) => {
    setIsOpen(isOpen === title ? null : title)
  }

  const handleSort = (name) => {
    setSort(sort === name ? null : name)
  }

  return (
    <>

      <div className="Container flex  border-1 border-l-0 border-r-0 p-2 mx-18">

        <div className="first_Container">
          <h1 className='text-[16px] text-[#002d69] font-black mt-3'>FILTER</h1>
        </div>

        <hr className='h-12 border-1 ml-3' />

        <div className="Dropdown_Container mt-2">

          <DropDown
            title="CATEGORY"
            Option={['Shoes']}
            isOpen={isOpen === "CATEGORY"}
            isToggle={() => handleToggle("CATEGORY")}
          />

          <DropDown
            title="ACTIVITY"
            Option={['RUNNING', 'TENNIS', 'SPORTSTYLE', 'INDOOR COURT', 'CRICKET', 'WALKING']}
            isOpen={isOpen === "BRAND"}
            isToggle={() => handleToggle("BRAND")}
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

        <hr className='h-12 border-1 ml-3' />

        <div className="Sort mt-2">

           <DropDown
            name="SORT RECOMMENDED"
            Option={['NEW ARRIVALS','MOST POPULAR', 'PRICE LOW TO HIGH', 'PRICE HIGH TO LOW',  'RECOMMENDED']}
            isOpen={isOpen === "SORT RECOMMENDED"}
            isToggle={() => handleToggle("SORT RECOMMENDED")}
          />
        </div>

      </div>
    </>


  )
}

