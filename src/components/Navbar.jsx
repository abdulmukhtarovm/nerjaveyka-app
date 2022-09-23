import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom';

import { getLanguage, getText } from '../locales/index'
import { LANGUAGE } from '../tools/constants';
const Navbar = () => {
    const [burger, setBurger] = useState(false)
    const [navbar, setNavbar] = useState(false)

    const changeNavbar = () => {

        if (window.scrollY >= 30) {
            setNavbar(true);
        } else {
            setNavbar(false)
        }
    }
    window.addEventListener('scroll', changeNavbar);

    const changeLanguage = (e) => {
        localStorage.setItem(LANGUAGE, e.target.value)
        document.location.reload(true)
    }
    const location = useLocation()
    return (

        <>
            <div className={`navBar ${navbar ? 'active' : ''}`}>

                <div className="container">
                    <div className="row justify-content-between align-items-center">
                        <div className="col-lg-3 col-6">
                            <div className="logo">
                                <Link to="/"><img className='w-100' src="img/logo.png" alt="" /></Link>
                            </div>
                        </div>
                        <div className={`col-6 mobileWrap ${burger ? '' : 'burgered'} `}>
                            <ul className="nav-menu">
                                <li>
                                    <Link className={`${location.pathname === '/' ? 'active-link' : ''}`} onClick={() => setBurger(!burger)} to="/">{getText("home")}</Link>
                                </li>
                                <li>
                                    <Link className={`${location.pathname === '/catalog' ? 'active-link' : ''}`} onClick={() => setBurger(!burger)} to="/catalog">{getText("catalog")}</Link>
                                </li>
                                <li>
                                    <Link className={`${location.pathname === '/about' ? 'active-link' : ''}`} onClick={() => setBurger(!burger)} to="/about">{getText("about")}</Link>
                                </li>
                                <li>
                                    <Link className={`${location.pathname === '/about' ? 'active-link' : ''}`} onClick={() => setBurger(!burger)} to="/portfolio">{getText("portfolio")}</Link>
                                </li>
                                <li>
                                    <Link className={`${location.pathname === '/contacts' ? 'active-link' : ''}`} onClick={() => setBurger(!burger)} to="/contacts">{getText("contacts")}</Link>
                                </li>
                                <li className='d-lg-none d-block'>
                                    <select className='siteLang' onChange={changeLanguage}>
                                        <option value="ru" selected={getLanguage() === "ru"} >Ру</option>
                                        <option value="uz" selected={getLanguage() === "uz"} >Uz</option>
                                    </select>
                                </li>
                            </ul>
                        </div>
                        {/* <div className="col-1 d-lg-block d-none">
                            <div className="lang">
                                <select className='siteLang' onChange={changeLanguage}>
                                    <option value="ru" selected={getLanguage() === "ru"} >Ру</option>
                                    <option value="uz" selected={getLanguage() === "uz"} >Uz</option>
                                </select>
                            </div>
                        </div> */}
                        <div onClick={() => setBurger(!burger)} className={`burger pr-4 ml-auto d-flex d-lg-none ${burger ? 'burgered' : ''}`}>
                            <div className="burger1"></div>
                            <div className="burger2"></div>
                            <div className="burger3"></div>
                        </div>
                    </div>
                </div>

            </div>
                        <div className="navbarLine"></div>
        </>
    )
}

export default Navbar