import React from 'react'

export const Footer = () => {
    return (
        <>
            <div>

                <div>
                    <ul>
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

                <div>
                    <ul>
                        <h4>Customer Service</h4>
                        <li>Contact Us</li>
                        <li>Return Policies</li>
                        <li>Shipping Information</li>
                        <li>FAQs</li>
                        <li>Store Locator</li>
                        <li>Order Tracking</li>
                    </ul>
                </div>

                <div>
                    <ul>
                        <h4>Sizing Guides and Resources</h4>
                        <li>Shoe Size and Guides</li>
                        <li>Shoes Width Guides</li>
                        <li>Pronation Guides</li>
                        <li>Clothing Size Guides</li>
                        <li>Blogs</li>
                    </ul>
                </div>

                <div>
                    <ul>
                        <h4>Sign Up to Our NewsLetter</h4>
                        <li>Be the first to hear about new products, exclusive events and online offers.</li>
                        <li>Sign up and Get 10% off on your first Order. T&C applied.</li>
                        <input type="text" name='email' placeholder='you@email.com' />

                        <div>
                            <h4 className='mt-10'>Let's Talk</h4>
                            <i class="fa-solid fa-phone "></i>
                            <a href="">0124-6289100</a>

                            <i class="fa-solid fa-envelope"></i>
                             <a href=''> customer-service-india@asics.com</a>
                        </div>
                    </ul>
                </div>
            </div>
        </>
    )
}


