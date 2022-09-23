import React from 'react'
import { Link } from 'react-router-dom'
import { getText } from '../locales'

const Portfolio = () => {
    return (
        <div className='Portfolio'>
            <div className="text-center">
                <h2 className='blog-title'>{getText("portfolio")}</h2>
            </div>

            <div className="image-gallary">
                <div className="image-box">
                    <img src="/img/portfolio1.png" alt="" />
                </div>
                <div className="image-box">
                    <img src="/img/portfolio2.png" alt="" />
                </div>
                <div className="image-box">
                    <img src="/img/header1.png" alt="" />
                </div>
                <div className="image-box">
                    <img src="/img/portfolio4.png" alt="" />
                </div>
            
            </div>
            <div className="buy-btn text-center">
                <Link className='btn' to="/portfolio">{getText("seeAll")}</Link>
            </div>
        </div>
    )
}

export default Portfolio