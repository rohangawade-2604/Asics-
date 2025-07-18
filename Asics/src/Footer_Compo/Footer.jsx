import React from 'react'
import './Footer.css'

export const Footer = () => {
    return (
        <>
        <div className='footer'>

            <div className="footer-container">
                <div >
                    <ul className='footer-logo'>
                        <h4>Corporate Info</h4>
                        <li>About ASICS</li>
                        <li>Terms and Conditions</li>
                        <li>Disclaimer</li>
                        <li>Privacy Policies</li>
                        <li>Cookies Policies</li>
                        <li>Security</li>
                        <li>Sustainabiltiy</li>
                    </ul>
                </div>

                <div >
                    <ul className='footer-logo'>
                        <h4>Customer Service</h4>
                        <li>Contact Us</li>
                        <li>Return Policies</li>
                        <li>Shipping Information</li>
                        <li>FAQs</li>
                        <li>Store Locator</li>
                        <li>Order Tracking</li>
                    </ul>
                </div>

                <div className='footer-logo'>
                    <ul className='footer-logo'>
                        <h4>Sizing Guides and Resources</h4>
                        <li>Shoe Size and Guides</li>
                        <li>Shoes Width Guides</li>
                        <li>Pronation Guides</li>
                        <li>Clothing Size Guides</li>
                        <li>Blogs</li>
                    </ul>
                </div>

                <div >
                    <ul className='footer-logo'>
                        <h4>Sign Up to Our NewsLetter</h4>
                        <li>Be the first to hear about new products, exclusive events and online offers.</li>
                        <li>Sign up and Get 10% off on your first Order. T&C applied.</li>
                        <input type="text" name='email' placeholder='you@email.com' />

                        <div>
                            <h4 className='mt-10'>Let's Talk</h4>
                            <i className="fa-solid fa-phone "></i>
                            <a href="" className='phone'>0124-6289100</a>

                            <i className="fa-solid fa-envelope"></i>
                            <a href='' className='email'> customer-service-india@asics.com</a>
                        </div>

                        <h4>Connect With Us</h4>

                        <div className='social-icons'>
                            <i className="fa-brands fa-facebook"></i>
                            <i className="fa-brands fa-instagram"></i>
                            <i className="fa-brands fa-twitter"></i>
                        </div>


                    </ul>
                </div>

            </div>


                <div className='footer-bottom'>
                    <h5>© 2025 ASICS India Pvt. Ltd. All Rights Reserved.</h5>
                    <h5>The stripe design featured on the sides of the ASICS® shoes is a registered trademark of ASICS Corporation.</h5>
                </div>
            </div>
        </>
    )
}


