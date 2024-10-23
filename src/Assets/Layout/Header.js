import React from 'react'
import logo from '../Images/logo.svg'
import './Header.css'
import service from '../../Pages/Service'
export default function Header() {
    return (
        <div>
            <header className='header'>
                <nav className='nav'>
                    <div className='logo'>
                        <img src={logo} height='40px' width='40px' />
                        <span className='logo-text'>
                            <span className="logo-main-text">E</span>VEN
                            <span className="logo-main-text">S</span>CRIPT
                        </span>
                    </div>

                    <div className='menu'>
                        <ul className='pages'>
                            <a href='#'><li className='dropdown'>
                                <a href='#'><span>About Us</span></a>
                                <ul className='dropdown-ul'>
                                    <a href='#'><li className="dropdown-list">About Us</li></a>
                                    <a href='#'><li className="dropdown-list">Portfolio</li></a>
                                    <a href='#'><li className="dropdown-list">Career</li></a>
                                </ul>
                            </li></a>
                            <a href={service}><li className='dropdown'>
                                <span>Service</span>
                                <ul className='dropdown-ul'>
                                    <a href='#'><li className="dropdown-list">UI-UX Designing</li></a>
                                    <a href='#'><li className="dropdown-list">Website Development</li></a>
                                    <a href='#'><li className="dropdown-list">Mobile App Development</li></a>
                                </ul>
                            </li></a>
                            <a href='#'><li className='dropdown'>
                                <span>Technoligies</span>
                                <ul className='dropdown-ul'>
                                    <a href='#'><li className="dropdown-list">React Js</li></a>
                                    <a href='#'><li className="dropdown-list">Node Js</li></a>
                                    <a href='#'><li className="dropdown-list">Angular Js</li></a>
                                    <a href='#'><li className="dropdown-list">Laravel</li></a>
                                    <a href='#'><li className="dropdown-list">Flutter</li></a>
                                    <a href='#'><li className="dropdown-list">React Native</li></a>
                                    <a href='#'><li className="dropdown-list">Nest js</li></a>
                                    <a href='#'><li className="dropdown-list">Next js</li></a>
                                </ul>
                            </li></a>
                            <a href='#'><li className='dropdown'>
                                <span>Industries</span>
                                <ul className='dropdown-ul'>
                                    <a href='#'><li className="dropdown-list">Education</li></a>
                                    <a href='#'><li className="dropdown-list">Ecommerce</li></a>
                                    <a href='#'><li className="dropdown-list">Healthcare</li></a>
                                    <a href='#'><li className="dropdown-list">Travel Agency</li></a>
                                    <a href='#'><li className="dropdown-list">Hospitality</li></a>
                                    <a href='#'><li className="dropdown-list">Manufacturing</li></a>
                                    <a href='#'><li className="dropdown-list">Retail</li></a>
                                    <a href='#'><li className="dropdown-list">Supply Chain And Logistic</li></a>
                                    <a href='#'><li className="dropdown-list">Media And Entertainment</li></a>
                                    <a href='#'><li className="dropdown-list">Real Estate</li></a>
                                </ul>
                            </li></a>
                            <a href='#'><li className='dropdown'>Contact Us</li></a>
                        </ul>
                    </div>
                </nav>
            </header>
        </div>
    )
}
