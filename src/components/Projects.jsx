import React from 'react'
import { getText } from '../locales'

const Projects = () => {
    return (
        <div className='Projects'>
            <div className="text-center">
                <h2 className='blog-title'>{getText("portfolio")}</h2>
            </div>

            <div className="container">
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
                    <div className="image-box">
                        <img src="/img/portfolio5.png" alt="" />
                    </div>
                    <div className="image-box">
                        <img src="/img/portfolio3.png" alt="" />
                    </div>
                    <div className="image-box">
                        <img src="/img/portfolio8.png" alt="" />
                    </div>
                    <div className="image-box">
                        <img src="/img/portfolio4.png" alt="" />
                    </div>
                    <div className="image-box">
                    <img src="/img/portfolio7.png" alt="" />

                    </div>
                    <div className="image-box">
                        <img src="/img/portfolio6.png" alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Projects