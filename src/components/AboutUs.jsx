import React from 'react' 
import { Link } from 'react-router-dom'
import { getText } from '../locales'


const AboutUs = () => {
    return (
        <div className='AboutUs'>
            <div className="text-center">
                <h2 className='blog-title'>О нас</h2>
            </div>
            <div className="row justify-content-center align-items-center">
                <div className="col-lg-6 col-md-8 mb-4">
                    <div className="info">
                        {/* <h3>О компании «Metall Art»</h3> */}
                        <p>{getText("about1")}</p>
                        <p className='d-lg-block d-none'>{getText("about2")}</p>

                        <Link className='d-lg-block d-none' to="/about">{getText("more")}</Link>
                    </div>
                </div>
                <div className="col-lg-10">
                    <div className="img">
                        <img src="img/aboutus.png" className='w-100' alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutUs