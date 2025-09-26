import React from 'react'


export const DropDown = ({ title, Option, isOpen, isToggle }) => {
  return (
    <>
      
      <div className="Container inline-block border-1 ml-3 p-2 relative">

        
              <button className='flex flex-row gap-3' onClick={isToggle}>
                {title} 
                <span><i className="fa-solid fa-angle-down"></i></span>
              </button>
            
          {
            isOpen && (
              <div className='flex flex-col absolute'>
                {
                  Option.map((el, i) => (
                    <div  className=''> 
                      <label className=' ' key={i} >
                        <input type="checkbox "/>
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


