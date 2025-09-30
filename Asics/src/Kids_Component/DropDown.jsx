import React from 'react'

export const DropDown = ({ title, Option, isOpen, isToggle , onChange}) => {
  return (
    <div className="Container inline-block border-1 border-slate-400 ml-3 p-2 relative">
      <button
        className="flex flex-row gap-3 cursor-pointer text-[#002d69] font-bold text-[13px]"
        onClick={isToggle}
      >
        {title}
        <span className={`transition-transform ${isOpen ? "rotate-180" : ""}`}>
          <i className="fa-solid fa-angle-down"></i>
        </span>
      </button>

      {isOpen && (
        <div className="absolute top-13 border-1 w-60 bg-white p-3 gap-3">
          {Option.map((el, i) => (
            <div className="mt-3" key={i}>
              <label className="flex flex-row gap-3" onChange={onChange}>
                <input
                  type="checkbox"
                  className="bg-white"        
                />
                {el}
              </label>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
