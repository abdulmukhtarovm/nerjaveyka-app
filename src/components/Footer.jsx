import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import { getText } from '../locales'

const Footer = () => {
    const location = useLocation()

    return (
    <>
    {location.pathname === '/contacts' ? '' :
        <div className='Footer'>
        <div className="container">
            <div className="row justify-content-between">
                <div className="col-lg-3 mb-3 mb-lg-0">
                    <div className="card">
                        <h4>Contacts</h4>

                        <div className="blok mb-4">
                            <h6>Phone</h6>
                            <a href="tel:+998999992727">+998 90 123 45 67</a> <br />
                            <a href="tel:+998999992727">+998 90 123 45 67</a>
                        </div>
                        <div className="blok mb-4">
                            <h6>Adress</h6>
                            <a href="mail">1771 Herzog Village Apt. 616 Sandrineport, VA 63303</a>
                        </div>
                        <div className="blok">
                            <h6>Working mode</h6>
                            <p>ПН-ПТ 10:00 - 20:00</p>
                            <p>СБ-ВС Выходной день</p>
                        </div>
                    </div>

                </div>
                <div className="col-lg-3">
                    <div className="card mycard">
                        <h4>Navigation</h4>

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
                            <h6>Social network</h6>

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
                        <iframe className='w-100 h-100' title='Location' src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d187.51608664052296!2d69.34531860589108!3d41.23795102786353!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae5f2ad5f82f65%3A0x3e11809d18d033ca!2z0KLQtdGF0L3QvtC_0LvQsNGB0YI!5e0!3m2!1sru!2sus!4v1656072386996!5m2!1sru!2sus" loading="lazy"></iframe>
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