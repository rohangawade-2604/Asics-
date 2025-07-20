import React from 'react'

export const Footer = () => {

  return (
    <>

      <div>
        <div className="footer border-2 bg-blue-900 text-white w-[100%] h-[60vh]">

          <div className="footer_logo flex justify-around border-2">

            <div className="footer_link flex flex-col gap-3">
              <h1 className='font-semibold'>Corporate Info</h1>
              <ul className='flex flex-col gap-3'>
                <li>About ASICS </li>
                <li>Terms and Conditions</li>
                <li>Disclaimers</li>
                <li>Privacy Policy</li>
                <li>Cookie Policy</li>
                <li>Security</li>
                <li>Sustaniability</li>
              </ul>
            </div>

            <div className="footer_link flex flex-col gap-3">
              <h1 className='font-semibold'>Customer Services</h1>
              <ul className='flex flex-col gap-3'>
                <li>Contact US</li>
                <li>Return Policy</li>
                <li>Shipping Informations</li>
                <li>FAQ</li>
                <li>Store Locator</li>
                <li>Order Tracking</li>
              </ul>
            </div>

            <div className="footer_link flex flex-col gap-3">
              <h1 className='font-semibold'>Sizing Guides & Resources</h1>
              <ul className='flex flex-col gap-3'>
                <li>Shoe size Guide</li>
                <li>Shoe width Guide</li>
                <li>Pronation Guides</li>
                <li>Clothiing Size Guide</li>
                <li>Blogs</li>
              </ul>
            </div>

            <div className="footer_link flex flex-col gap-3">
              <h1 className='font-semibold'>Sign Up to our Newsletter</h1>
              <ul className='flex flex-col gap-3'>
                <li>Be the first to hear about new products, exclusive events and online offers.</li>
                <li>Sign up and Get 10% off on your first Order. T&C applied.</li>
                <input type="text" name='email' placeholder='you@email.com' />
                <button>Sign Up</button>
                <h1>Lets Talk</h1>

                <div className="contact  flex justify-baseline items-center gap-3 ">
                  <i className="fa-solid fa-phone"></i>
                  <p className='text-[16px]'>0124-6289100</p>

                  <i className="fa-solid fa-envelope"> </i>
                  <p className='text-[16px]'>customer-service-india@asics.com</p>
                </div>

                <h1>Connect with Us</h1>

                <div className="social_media flex justify-baseline gap-5">
                  <i className="fa-brands fa-facebook"></i>
                  <i className="fa-brands fa-twitter"></i>
                  <i className="fa-brands fa-instagram"></i>
                </div>
              </ul>
            </div>


          </div>

          <div className="footer_bottom flex justify-around items-center mt-5 ">
            <h1>© 2025 ASICS India Pvt. Ltd. All Rights Reserved.</h1>
            <h1>The stripe design featured on the sides of the ASICS® shoes is a registered trademark of ASICS Corporation.</h1>
          </div>

        </div>
      </div>


    </>
  )
}


