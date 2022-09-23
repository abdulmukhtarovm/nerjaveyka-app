import React from 'react' 
import { getText } from '../locales'
import { Link, useLocation } from 'react-router-dom'


const Footer = () => {
    const location = useLocation()

    return (
    <>
    {location.pathname === '/contacts' ? '' :
        <div className='Footer'>
        <div className="container">
            <div className="row justify-content-between">
                <div className="col-lg-2 mb-3 mb-lg-0">
                    <div className="card">
                        <h4>{getText("contacts")}</h4>

                        <div className="blok mb-4">
                            <h6>{getText("numbers")}</h6>
                            <a href="tel:+998991695555">+998 99 169 55 55</a> <br />
                            <a href="tel:+998994843225">+998 99 484 32 25</a>
                        </div>
                        <div className="blok mb-4">
                            <h6>{getText("addres")}</h6>
                            <a href="mail">{getText("adres")}</a>
                        </div>
                        <div className="blok">
                            <h6>{getText("grafik")}</h6>
                            <p>{getText("pnpt")} 10:00 - 20:00</p>
                            <p>{getText("vs")}</p>
                        </div>
                    </div>

                </div>
                <div className="col-lg-3">
                    <div className="card mycard">
                    <h4>{getText("navigation")}</h4>

                        <ul>
                            <li>
                                <Link className={`${location.pathname === '/' ? 'active-link' : ''}`} to="/">{getText("home")}</Link>
                            </li>
                            <li>
                                <Link className={`${location.pathname === '/catalog' ? 'active-link' : ''}`} to="/catalog">{getText("catalog")}</Link>
                            </li>
                            <li>
                                <Link className={`${location.pathname === '/about' ? 'active-link' : ''}`} to="/about">{getText("about")}</Link>
                            </li>
                            <li>
                                <Link className={`${location.pathname === '/contacts' ? 'active-link' : ''}`} to="/contacts">{getText("contacts")}</Link>
                            </li>
                        </ul>
                        <div className="blok">
                            <h6>Мы в</h6>

                            <div className="socials d-flex">
                                <div className="icon">
                                    <a href="https://instagram.com"><img src="img/fb.png" alt="" /></a>
                                </div>
                                <div className="icon">
                                    <a href="https://instagram.com"><img src="img/insta.png" alt="" /></a>
                                </div>
                                <div className="icon">
                                    <a href="https://instagram.com"><img src="img/tg.png" alt="" /></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-6">
                    <div className="map w-100 h-100">
                        <iframe className='w-100 h-100' title='Location' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d750.2205331003279!2d69.24487848814529!3d41.224338998698634!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xf2600313cbe9ecf0!2zNDHCsDEzJzI3LjYiTiA2OcKwMTQnNDMuNSJF!5e0!3m2!1sru!2s!4v1663913295067!5m2!1sru!2s" loading="lazy"></iframe>
                    </div>
                </div>
            </div>
        </div>
    </div>
    }
    </>
    )
}

export default Footer