import React from 'react'
import { DropDown } from './DropDown'
import { useState } from 'react'


export const Kids = () => {

  const [isOpen, setIsOpen] = useState(null)

  const handleToggle = (title) => {
    setIsOpen(isOpen === title ? null : title)
  }

  return (
    <>
      <DropDown
      title="CATEGORY"
      Option={['Category1','Category2','Category3']}
      isOpen={isOpen === "CATEGORY"}
      isToggle={() => handleToggle("CATEGORY")}
      /> 

      <DropDown
      title="BRAND"
      Option={['Brand1','Brand2','Brand3']}
      isOpen={isOpen === "BRAND"}
      isToggle={() => handleToggle("BRAND")}
      />

      <DropDown
      title="PRICE"
      Option={['Price1','Price2','Price3']}
      isOpen={isOpen === "PRICE"}
      isToggle={() => handleToggle("PRICE")}
      />

                                                                                                                                                                                                                                            
    </>


  )
}

