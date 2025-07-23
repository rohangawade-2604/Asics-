import React from 'react'
import Truck from '../assets/truck.png'
import Reload from '../assets/reload.png'
import Secure from '../assets/secure.png'
import Rupees from '../assets/rupees.png'


export const Descript = () => {
  return (
    <>
      <div className="descript_container">

        <div className="descript flex justify-around mx-15 my-8">

              <div className="shipping flex justify-evently item-center gap-5  ">
                  <div>
                    <img src={Truck} alt="" className=' h-10' />
                  </div>

                  <div>
                    <h1>Free Shipping</h1>
                    <p>Free shipping on all orders</p>
                  </div>

                <div class="w-px h-12 bg-blue-800 border-1 mx-4"></div>


              </div>

              <div className="EasyReturns flex justify-evently item-center gap-5">
                  <div>
                    <img src={Reload} alt="" />
                  </div>

                  <div>
                    <h1>Easy Return</h1>
                    <p>Simply return it within 7 days</p>
                  </div>

                   <div class="w-px h-12 bg-blue-800 border-1 mx-4"></div>

              </div>

              <div className="shipping flex justify-evently item-center gap-5">
                  <div>
                    <img src={Secure} alt="" />
                  </div>

                  <div>
                    <h1>Secure Payment</h1>
                    <p>Safe and Secure Payments</p>
                  </div>

                   <div class="w-px h-12 bg-blue-800 border-1 mx-4"></div>

              </div>

              <div className="shipping flex justify-evently item-center gap-5">
                  <div>
                    <img src={Rupees} alt="" />
                  </div>

                  <div>
                    <h1>Cash On Delivery</h1>
                    <p>For Order between Rs 5,499 to 14,999</p>
                  </div>

                   <div class="w-px h-12 bg-blue-800 border-1 mx-4"></div>
              </div>



        </div>
      </div>
    </>
  )
}

