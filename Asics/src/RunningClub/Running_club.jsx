import React from 'react'
import './running.css'
import Runningclub from '../assets/Runningclub.png'

export const Running_club = () => {
  return (
    <>

      <div className="Running_club">
        <div className="running_container ">

          <div className="img1 h-[600px] w-full bg-cover bg-center relative " style={{ backgroundImage: `url(${Runningclub})` }}>
            <figure className='absolute bottom-20 left-50 '>
              <h1 className='text-4xl font-bold text-white'>ASICS RUNNING CLUB</h1>
              <p className='text-white w-[60%] my-5'>Come join us for our upcoming sessions! Take a look at our monthly schedule for the upcoming training programmes and sign up for the sessions with our highly-experience coaches.</p>
              <button className='effect_button mr-10 text-[16px]'>Sign Up here</button>
              <button className='effect_button '>Join Facebook Group</button>
            </figure>
          </div>


          <div className="club_members">
            
          </div>


        </div>
      </div>


    </>
  )
}


