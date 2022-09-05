import React from 'react'

const Portfolio = () => {
    return (
        <div className='Portfolio'>
            <div className="text-center">
                <h2 className='blog-title'>Portfolio</h2>
            </div>

            <div className="image-gallary">
                <div className="image-box">
                    {/* <img src="/img/portfolio1.png" alt="" /> */}
                </div>
                <div className="image-box">
                    {/* <img src="/img/portfolio2.png" alt="" /> */}
                </div>
                <div className="image-box">
                    {/* <img src="/img/portfolio3.png" alt="" /> */}
                </div>
                <div className="image-box">
                    {/* <img src="/img/portfolio4.png" alt="" /> */}
                </div>
                <div className="image-box">
                    {/* <img src="/img/portfolio4.png" alt="" /> */}
                </div>
                <div className="image-box">
                    {/* <img src="/img/portfolio4.png" alt="" /> */}
                </div>
                <div className="image-box">
                    {/* <img src="/img/portfolio4.png" alt="" /> */}
                </div>
            </div>
            <div className="buy-btn text-center">
                <a className='btn' href="#portfolio">View all</a>
            </div>
        </div>
    )
}

export default Portfolio