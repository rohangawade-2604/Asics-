import React from 'react'

export const DropDown = ({ title, options, isOpen, onToggle }) => {

  console.log(options)
  return (
    <>
      <div className="Dropdown_button inline-block  border-none">

        <div className="button_part">
          <button className='border-1 p-2 flex items-center gap-3'
          onClick={onToggle} >
            {title}
            <span className={`transition-transform ${isOpen ? 'rotate-180' : ""}`}><i className="fa-solid fa-caret-down"></i></span>
          </button>
        </div>

        {
          isOpen && (
            <div className="inputbox w-35 h-30 grid grid-cols-1 gap-2 p-2 border-1">
              {
                options.map((options, i) => (
                  
                  <label key={i} >
                    <input type="checkbox" w-4 h-10 flex/>
                    {options}
                    
                  </label>
                ))
              }
            </div>
          )
        }
      </div>
    </>
  )
}


