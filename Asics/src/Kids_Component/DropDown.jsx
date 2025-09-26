import React from 'react'


export const DropDown = ({ title, Option, isOpen, isToggle }) => {
  return (
    <>
      
      <div className="Container inline-block border-1 ml-3 p-2 relative">

        
              <button className='flex flex-row gap-3' onClick={isToggle}>
                {title} 
                <span className={`transition-transform ${isOpen ? "rotate-180" : ""}`}><i className="fa-solid fa-angle-down"></i></span>
              </button>
            
          {
            isOpen && (
              <div className='absolute top-13 border-1 w-90 bg-white p-3 grid grid-cols-2 gap-3'>
                {
                  Option.map((el, i) => (
                    <div  className='mt-2'> 
                      <label className='flex flex-row gap-3 ' key={i} >
                        <input type="checkbox" className=''/>
                        {el}
                      </label>
                    </div>
                  ))
                }
              </div>

            )
          }


          </div>
        

    </>
  )
}


