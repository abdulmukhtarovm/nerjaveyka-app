import React from 'react'
import { getText } from '../locales'

const Benefits = () => {
    return (
        <div className='Benefits'>
            <div className="row justify-content-center">
                <div className="col-lg-10">
                    <div className="row justify-content-center">
                     
                        <div className="col-lg-10">
                            <div className="info">
                            <div className="text-center">
                                <h2 className='blog-title'>{getText("benefits")}</h2>
                            </div>
                            {/* <h3>{getText("whatcanwedo")}</h3> */}

                                <p>
                                    {getText("whatP1")}
                                </p>
                                <p>
                                    {getText("whatP2")}
                                </p>
                                <p className='d-lg-block d-none'>
                                    {getText("whatP3")}
                                </p>
                                <p className='d-lg-block d-none'>
                                    {getText("whatP4")}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Benefits