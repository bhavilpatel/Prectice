import React from 'react'
import logo from '../Images/logo.svg'
import './Footer.css'


function Footer() {
    const FacebookIcon = () => {
        return <svg className="social-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" /></svg>
    }

    const InstagramIcon = () => {
        return <svg className="social-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" /></svg>
    }

    const TwitterIcon = () => {
        return <svg className="social-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">  <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" /></svg>
    }

    const LinkedinIcon = () => {
        return <svg className="social-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />  <rect x="2" y="9" width="4" height="12" />  <circle cx="4" cy="4" r="2" /></svg>
    }

    const MailIcon = () => {
        return <svg className="h-5 w-5" style={{ height: "20px", width: "20px" }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 19v-8.93a2 2 0 01.89-1.664l7-4.666a2 2 0 012.22 0l7 4.666A2 2 0 0121 10.07V19M3 19a2 2 0 002 2h14a2 2 0 002-2M3 19l6.75-4.5M21 19l-6.75-4.5M3 10l6.75 4.5M21 10l-6.75 4.5m0 0l-1.14.76a2 2 0 01-2.22 0l-1.14-.76" />
        </svg>
    }

    const PhoneIcon = () => {
        return <svg className="h-5 w-5" style={{ height: "20px", width: "20px" }} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" /></svg>
    }

    const LocationIcon = () => {
        return <svg className="h-8 w-8 " style={{ height: "27px", width: "60px" }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
    }

    const ArrowIcon2 = () => {
        return <svg className="" style={{ height: "25px", width: "25px" }} viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">  <path stroke="none" d="M0 0h24v24H0z" />  <line x1="5" y1="12" x2="19" y2="12" />  <line x1="15" y1="16" x2="19" y2="12" />  <line x1="15" y1="8" x2="19" y2="12" /></svg>
    }


    return (
        <div className='footer'>
            <div className='container'>
                <div className='footer-flex'>
                    <section className='footer-left'>
                        <div className='footer-logo'>
                            <img src={logo} height='40px' width='40px' />
                            <span className='footer-logo-text'>
                                <span className="footer-logo-main-text">E</span>VEN
                                <span className="footer-logo-main-text">S</span>CRIPT
                            </span>
                        </div>
                        <p className='footer-dis'>With custom software development services being our core area of expertise, we can help your business to reach its full potential with our application solutions.</p>

                        <div className="footer-icons">
                            <div className="hover:bg-gradient-to-tl from-[#feda75] via-[#962fbf] to-[#fa7e1e] hover:text-white w-[40px] rounded-md p-1 bg-white   icon insta"><InstagramIcon /></div>
                            <div className="hover:bg-gradient-to-t to-[#17A9FD] from-[#0165E1] hover:text-white w-[40px] rounded-md p-1 bg-white icon facebook"><FacebookIcon /></div>
                            <div className="hover:bg-[#1D9BF0] hover:text-white w-[40px] rounded-md p-1 bg-white icon twitter"><TwitterIcon /></div>
                            <div className="hover:bg-[#0A66C2] hover:text-white w-[40px] rounded-md p-1 bg-white icon linkedin"><LinkedinIcon /></div>
                        </div>
                    </section>

                    <section className='footer-middle'>
                        <div className='footer-head'>Quick Links</div>
                        <ul className='footer-links'>
                            <li className='quick-link'><span>Portfolio</span><div className="hide"><ArrowIcon2 /></div></li>
                            <li className='quick-link'><span>About Us</span><div className="hide"><ArrowIcon2 /></div></li>
                            <li className='quick-link'><span>Career</span><div className="hide"><ArrowIcon2 /></div></li>
                            <li className='quick-link'><span>Contact Us</span><div className="hide"><ArrowIcon2 /></div></li>
                        </ul>
                    </section>

                    <section className='footer-right'>
                        <div className='footer-head'>Contact</div>
                        <div className="contect-details-main">
                            <div className="contect-details"><LocationIcon />D-708, PNTC building, B/H Titanium City Centre,  Prahladnagar road.  Ahmedabad 380015</div>
                            <div className="contect-details"><PhoneIcon />+91 70169 01114</div>
                            <div className="contect-details"><MailIcon />sales@evenscript.com</div>
                        </div>
                    </section>

                    <br />

                </div>
                <section className='terms-main'>
                    <div><hr /></div>
                    <div className="term">
                        <div className="text-center text-white ">© 2023 <span className='policy'>Evenscript</span>. All Rights Reserved.</div>
                        <div className="privacy">
                            <div className="policy">Terms & Conditions</div>
                            <div className="policy">Privacy & Policy</div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    )
}


export default Footer;