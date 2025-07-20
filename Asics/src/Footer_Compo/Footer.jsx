import React from 'react'

export const Footer = () => {

  return (
    <>

      <div>
        <div className="footer">

          <div className="footer_logo flex ">

            <div className="footer_link">
              <h1>Corporate Info</h1>
              <ul>
                <li>About ASICS </li>
                <li>Terms and Conditions</li>
                <li>Disclaimers</li>
                <li>Privacy Policy</li>
                <li>Cookie Policy</li>
                <li>Security</li>
                <li>Sustaniability</li>
              </ul>
            </div>

            <div className="footer_link">
              <h1>Customer Services</h1>
              <ul>
                <li>Contact US</li>
                <li>Return Policy</li>
                <li>Shipping Informations</li>
                <li>FAQ</li>
                <li>Store Locator</li>
                <li>Order Tracking</li>
              </ul>
            </div>

            <div className="footer_link">
              <h1>Sizing Guides & Resources</h1>
              <ul>
                <li>Shoe size Guide</li>
                <li>Shoe width Guide</li>
                <li>Pronation Guides</li>
                <li>Clothiing Size Guide</li>
                <li>Blogs</li>
              </ul>
            </div>

            <div className="footer_link ">
              <h1>Sign Up to our Newsletter</h1>
              <ul>
                <li>Be the first to hear about new products, exclusive events and online offers.</li>
                <li>Sign up and Get 10% off on your first Order. T&C applied.</li>
                <input type="text" name='email' placeholder='you@email.com' />
                <button>Sign Up</button>
                <h1>Lets Talk</h1>
                <div className="contact">
                  <i className="fa-solid fa-phone "></i>
                  <a href="" className='mr-5'>0124-6289100</a> 

                  <i className="fa-solid fa-envelope"> </i>
                  <a href="">customer-service-india@asics.com</a> 
                </div>

              </ul>
            </div>


          </div>
        </div>
      </div>


    </>
  )
}


