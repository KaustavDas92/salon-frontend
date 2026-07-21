import React from 'react'
import logo from '../assets/logos/bookmyglow_logo.png'
import facebook from '../assets/logos/facebook.png'
import insta from '../assets/logos/instagram.png'
import twitter from '../assets/logos/twitter.png'
import whatsapp from '../assets/logos/whatsapp.png'

const Footer = () => {
  return (
    <>
    <section className='footer continer-fluid'>
        <div className="d-flex justify-content-between align-items-stretch">
            <div style={{marginRight:'3rem'}}>
                <img src={logo} width={150} height={150}/>
            </div>
            <div className='footer-info'>
                <ul>
                    <li>
                        Services
                    </li>
                    <li>
                        Businesses
                    </li>
                    <li>
                        Contact Us
                    </li>
                    <li>
                        About Us
                    </li>
                    <li>
                        Gallery
                    </li>
                </ul>
            </div>
            <div className='d-flex flex-column justify-content-between align-items-center '>
                <span>Follow Us on</span>
                <div className='mt-3 d-flex flex-row justify-content-between gap-3 flex-grow-1' >
                    <img className='footer-icons' src={facebook} />
                    <img className='footer-icons' src={insta} />
                    <img className='footer-icons' src={twitter} />
                    <img className='footer-icons' src={whatsapp} />
                </div>
                <p style={{fontSize:'0.7rem'}}>© 2024 All Rights Reserved. Book My Glow. Privacy policy</p>
            </div>
        </div>
    </section>
    
      
    </>
  )
}

export default Footer;
