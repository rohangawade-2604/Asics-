import React from 'react'

export const DropDown = ({ title, options, isOpen, isToggle }) => {
  return (
    <>
      <div className="Dropdown_button inline-block  border-none">

        <div className="button_part">
          <button className='border-1 p-2 flex items-center gap-3'
          onClick={isToggle} >
            {title}
            <span className={`transition-transform ${isOpen ? 'rotate-180' : ""}`}><i className="fa-solid fa-caret-down"></i></span>
          </button>
        </div>

        {
          isOpen && (
            <div className="inputbox w-10 h-10 grid grid-cols-1 gap-2 p-2 border-1">
              {
                options.map((option, i) => {
                  <label key={i} >
                    <input type="checkbox" w-4 h-10/>
                    {option}
                  </label>
                })
              }
            </div>
          )
        }
      </div>
    </>
  )
}


