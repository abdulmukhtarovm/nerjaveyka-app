import React from 'react'
import { Link } from 'react-router-dom'

const Grades = () => {
  return (
    <div className='Grades'>
         <div className="text-center">
                <h2 className='blog-title'>Steel grades</h2>    
            </div>
        <div className="row justify-content-center">
            <div className="col-lg-4 col-md-6 mb-lg-0 mb-3">
                <div className="card">
                    <div className="img">
                        <img className='w-100' src="img/grade1.png" alt="" />
                    </div>
                    <div className="text">
                        <h5>AISI 304</h5>
                        <p>Contains Nickel, Acid Resistant Stainless Steel</p>
                        <Link to="/catalog">Learn more</Link>
                    </div>
                </div>
            </div>
            <div className="col-lg-4 col-md-6">
                <div className="card">
                    <div className="img">
                        <img className='w-100' src="img/grade2.png" alt="" />
                    </div>
                    <div className="text">
                        <h5>AISI 430</h5>
                        <p>Contains carbon, for products not in contact with moisture</p>
                        <Link to="/catalog">Learn more</Link>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Grades