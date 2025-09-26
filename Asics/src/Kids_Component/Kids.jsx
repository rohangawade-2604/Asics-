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
      Option={['Shoes']}
      isOpen={isOpen === "CATEGORY"}
      isToggle={() => handleToggle("CATEGORY")}
      /> 

      <DropDown
      title="ACTIVITY"
      Option={['RUNNING','TENNIS','SPORTSTYLE' , 'INDOOR COURT', 'CRICKET', 'WALKING']}
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
    </>


  )
}

