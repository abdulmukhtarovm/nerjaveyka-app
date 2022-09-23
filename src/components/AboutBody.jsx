import React from 'react'
import { getText } from '../locales'

const AboutBody = () => {
    return (
        <div className='AboutBody'>
            <div className="container">
                <div className="row justify-content-center position-relative">
                    <div className="col-lg-6">
                        <div className="img">
                            <img className='w-100' src="img/about.png" alt="" />
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="info">
                            <h3>О компании</h3>
                            <p>{getText("about1")}</p>
                        <p>{getText("about2")}</p>
                        <p className='d-lg-block d-none'>{getText("about3")}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutBody