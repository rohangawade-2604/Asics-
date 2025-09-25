import React from 'react'
import { useState } from 'react'
import { DropDown } from './DropDown'

export const Kids = () => {

  const [opendrag , setOpenDrag] = useState(null)

  const handleDropDown = (title) => {
    setOpenDrag( opendrag === title ? null : title)
    console.log(title)
  }
  return (
    <>
      <div className="Container">
        <div className="filter">

          <div className="filter_part">
            <h1>FILTER</h1>
          </div>

        <DropDown  
          title="CATEGORY"
          options={['Category1', 'Category2', 'Category3']}
          isOpen={opendrag === "CATEGORY"}
          onToggle={() => handleDropDown("CATEGORY")}
        />

        <DropDown
        title="PRICE"
        options={['Price1', 'Price2', 'Price3']}
        isOpen={opendrag === "PRICE"}
        onToggle={() => handleDropDown("PRICE")}
        />




        </div>
      </div>
    </>
  )
}


